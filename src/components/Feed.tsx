import { FlashList, type FlashListRef } from "@shopify/flash-list";
import { useCallback, useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, View, type NativeScrollEvent, type NativeSyntheticEvent } from "react-native";
import { useIsFocused } from "expo-router";
import type { FeedEntry } from "@/feed/types";
import { useFeed, blockedItems, type FeedSource } from "@/feed/useFeed";
import { useLibrary } from "@/store/library";
import { useChrome } from "@/store/chrome";
import { useResume } from "@/store/resume";
import { countStudy, trackTime } from "@/store/progress";
import { ForceDark } from "@/theme";
import { AmbientBackdrop } from "./AmbientBackdrop";
import { FeedItem } from "./FeedItem";

const QUICK_SKIP_MS = 1500;
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
  const [height, setHeight] = useState(0);
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

  // Remember where "Para você" is, so it reopens on the same card.
  useEffect(() => {
    if (source.type !== "forYou" || entries.length === 0) return;
    useResume.getState().setForYou(entries.slice(active, active + 4).map((e) => e.item.id));
  }, [source.type, active, entries]);

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
    <View style={styles.fill} onLayout={(e) => setHeight(Math.round(e.nativeEvent.layout.height))}>
      <AmbientBackdrop pageId={activePage} />
      {needsFollow && emptyState}
      {!needsFollow && height > 0 && (
        <FlashList
          ref={list}
          data={entries}
          keyExtractor={(e) => e.key}
          renderItem={({ item, index }) => <FeedItem key={item.key} entry={item} active={playing && index === active} height={height} onFail={onFail} onStudied={onStudied} bottomInset={bottomInset} />}
          extraData={`${active}-${playing}-${height}-${bottomInset}`}
          pagingEnabled
          snapToInterval={Platform.OS === "web" ? undefined : height}
          snapToAlignment="start"
          decelerationRate="fast"
          disableIntervalMomentum
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          onScrollBeginDrag={() => useChrome.getState().setTabBarHidden(true)}
          onMomentumScrollEnd={() => setTimeout(() => useChrome.getState().setTabBarHidden(false), 450)}
          onScrollEndDrag={() => setTimeout(() => useChrome.getState().setTabBarHidden(false), 1200)}
          onEndReached={loadMore}
          onEndReachedThreshold={2}
          initialScrollIndex={initialIndex > 0 ? initialIndex : undefined}
          drawDistance={height}
          getItemType={(e) => e.item.kind}
          testID="feed-list"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
});
