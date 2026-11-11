import { FlashList, type FlashListRef } from "@shopify/flash-list";
import { useCallback, useEffect, useRef, useState } from "react";
import { AppState, Platform, StyleSheet, View, type NativeScrollEvent, type NativeSyntheticEvent } from "react-native";
import { useIsFocused } from "expo-router";
import { Freeze } from "react-freeze";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { FeedEntry } from "@/feed/types";
import { useFeed, blockedItems, type FeedSource } from "@/feed/useFeed";
import { useLibrary } from "@/store/library";
import { hideTabBar, showTabBar } from "@/store/chrome";
import { useResume } from "@/store/resume";
import { countStudy, trackTime } from "@/store/progress";
import { ForceDark, TAB_BAR_SPACE } from "@/theme";
import { AmbientBackdrop } from "./AmbientBackdrop";
import { FeedItem } from "./FeedItem";

const QUICK_SKIP_MS = 1500;

/** A measured feed height is worth using when it is real (not 0/tiny) and actually different. */
export const isUsableHeight = (prev: number, next: number) => next >= 100 && Math.abs(next - prev) >= 2;
/** Staying this long on a card counts it as studied. */
const DWELL_MS = 3000;

interface Props {
  source: FeedSource;
  initialIndex?: number;
  /** Rendered instead of the list when the source has nothing to show (e.g. no followed pages). */
  emptyState?: React.ReactNode;
  /** Pause everything (e.g. when another tab is focused). */
  paused?: boolean;
  /** Bottom space for the card overlays; defaults to the floating tab bar height. */
  bottomInset?: number;
}

export function Feed(props: Props) {
  // The feed always uses a dark palette, even under the light theme.
  return (
    <ForceDark.Provider value>
      <FeedInner {...props} />
    </ForceDark.Provider>
  );
}

function FeedInner({ source, initialIndex = 0, emptyState, paused, bottomInset }: Props) {
  const focused = useIsFocused();
  const { entries, loadMore, drop, needsFollow } = useFeed(source);
  const insets = useSafeAreaInsets();
  const inset = bottomInset ?? TAB_BAR_SPACE + insets.bottom;
  const [height, setHeight] = useState(0);
  // Card the list (re)starts on. It changes when the list is rebuilt after a real size change.
  const [startIndex, setStartIndex] = useState(initialIndex);
  const [active, setActive] = useState(initialIndex);
  const list = useRef<FlashListRef<FeedEntry>>(null);
  const shownAt = useRef(0);
  const activeRef = useRef(initialIndex);

  // The parent remounts this component (via `key`) when the source changes.
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!height) return;
      const index = Math.round(e.nativeEvent.contentOffset.y / height);
      if (index === activeRef.current) return;
      const prev = entries[activeRef.current];
      if (prev && source.type === "forYou" && Date.now() - shownAt.current < QUICK_SKIP_MS && index > activeRef.current) {
        useLibrary.getState().recordSkip(prev.item.pageId);
      }
      activeRef.current = index;
      shownAt.current = Date.now();
      setActive(index);
      if (index >= entries.length - 3) loadMore();
    },
    [height, entries, loadMore, source.type],
  );

  const onFail = useCallback(
    (key: string) => {
      const entry = entries.find((e) => e.key === key);
      if (entry) blockedItems.add(entry.item.id);
      drop(key);
    },
    [entries, drop],
  );

  const playing = focused && !paused;

  // Web only: a screen pushed over the feed hides it with display:none, and a card that re-renders while
  // hidden makes FlashList re-measure zero sizes in a loop. Once the feed is out of view, freeze the list.
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    if (Platform.OS !== "web") return;
    const id = setTimeout(() => setSettled(!focused), focused ? 0 : 450);
    return () => clearTimeout(id);
  }, [focused]);
  const frozen = Platform.OS === "web" && !focused && settled;

  // The tab bar never stays hidden once the feed is left (other tab, other screen, unmount).
  useEffect(() => {
    if (!focused) showTabBar();
    return () => showTabBar();
  }, [focused]);

  /**
   * Coming back from the background (or a font/inset change) can report a new height. Small jitters and 0
   * are ignored; a real change rebuilds the list on the current card so every card is measured again.
   */
  const heightRef = useRef(0);
  const onLayout = useCallback((h: number) => {
    const next = Math.round(h);
    if (!isUsableHeight(heightRef.current, next)) return;
    if (heightRef.current > 0) setStartIndex(activeRef.current);
    heightRef.current = next;
    setHeight(next);
  }, []);

  // After a fling, make sure the list rests exactly on a card.
  const onMomentumEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      showTabBar(350);
      if (!height) return;
      const y = e.nativeEvent.contentOffset.y;
      const index = Math.round(y / height);
      if (Math.abs(y - index * height) > 2) list.current?.scrollToOffset({ offset: index * height, animated: true });
    },
    [height],
  );

  // Each entry counts toward the daily goal at most once.
  const [studied] = useState(() => new Set<string>());
  const onStudied = useCallback(
    (key: string) => {
      if (studied.has(key)) return;
      studied.add(key);
      countStudy(entries.find((e) => e.key === key)?.item.pageId);
    },
    [studied, entries],
  );

  // Remember where "Para você" is, so it reopens on the same card. Kept in memory while scrolling and
  // written to storage only when the feed is left or the app goes to the background.
  const resumeIds = useRef<string[]>([]);
  useEffect(() => {
    if (source.type === "forYou" && entries.length > 0) resumeIds.current = entries.slice(active, active + 4).map((e) => e.item.id);
  }, [source.type, active, entries]);
  useEffect(() => {
    if (source.type !== "forYou") return;
    const save = () => {
      if (resumeIds.current.length) useResume.getState().setForYou(resumeIds.current);
    };
    const sub = AppState.addEventListener("change", (state) => {
      if (state !== "active") save();
    });
    return () => {
      sub.remove();
      save();
    };
  }, [source.type, focused]);

  const activeEntry = entries[active];
  const activeKey = activeEntry?.key;
  const activePage = activeEntry?.item.pageId;
  useEffect(() => {
    if (!playing || !activeKey || !activePage) return;
    const startedAt = Date.now();
    const id = setTimeout(() => onStudied(activeKey), DWELL_MS);
    // Time on screen counts toward statistics until the card changes or the feed loses focus.
    return () => {
      clearTimeout(id);
      trackTime(activePage, Date.now() - startedAt);
    };
  }, [playing, activeKey, activePage, onStudied]);

  return (
    <View style={styles.fill} onLayout={(e) => onLayout(e.nativeEvent.layout.height)}>
      <AmbientBackdrop pageId={activePage} />
      {needsFollow && emptyState}
      {!needsFollow && height > 0 && (
        <Freeze freeze={frozen}>
        <FlashList
          key={height}
          ref={list}
          data={entries}
          keyExtractor={(e) => e.key}
          renderItem={({ item, index }) => <FeedItem key={item.key} entry={item} active={playing && index === active} height={height} onFail={onFail} onStudied={onStudied} bottomInset={inset} />}
          extraData={`${active}-${playing}-${height}-${inset}`}
          pagingEnabled
          snapToInterval={Platform.OS === "web" ? undefined : height}
          snapToAlignment="start"
          decelerationRate="fast"
          disableIntervalMomentum
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          onScrollBeginDrag={hideTabBar}
          onMomentumScrollEnd={onMomentumEnd}
          onScrollEndDrag={() => showTabBar(1200)}
          onEndReached={loadMore}
          onEndReachedThreshold={2}
          initialScrollIndex={startIndex > 0 ? startIndex : undefined}
          drawDistance={height}
          getItemType={(e) => e.item.kind}
          testID="feed-list"
        />
        </Freeze>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
});
