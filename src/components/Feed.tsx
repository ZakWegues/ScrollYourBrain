import { FlashList, type FlashListRef } from "@shopify/flash-list";
import { useCallback, useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, View, type NativeScrollEvent, type NativeSyntheticEvent } from "react-native";
import { useIsFocused } from "expo-router";
import type { FeedEntry } from "@/feed/types";
import { useFeed, blockedItems, type FeedSource } from "@/feed/useFeed";
import { useLibrary } from "@/store/library";
import { countStudy } from "@/store/progress";
import { useColors } from "@/theme";
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
}

export function Feed({ source, initialIndex = 0, emptyState, paused }: Props) {
  const c = useColors();
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
      countStudy();
    },
    [studied],
  );

  const activeKey = entries[active]?.key;
  useEffect(() => {
    if (!playing || !activeKey) return;
    const id = setTimeout(() => onStudied(activeKey), DWELL_MS);
    return () => clearTimeout(id);
  }, [playing, activeKey, onStudied]);

  return (
    <View style={[styles.fill, { backgroundColor: c.bg }]} onLayout={(e) => setHeight(Math.round(e.nativeEvent.layout.height))}>
      {needsFollow && emptyState}
      {!needsFollow && height > 0 && (
        <FlashList
          ref={list}
          data={entries}
          keyExtractor={(e) => e.key}
          renderItem={({ item, index }) => <FeedItem entry={item} active={playing && index === active} height={height} onFail={onFail} onStudied={onStudied} />}
          extraData={`${active}-${playing}-${height}`}
          pagingEnabled
          snapToInterval={Platform.OS === "web" ? undefined : height}
          snapToAlignment="start"
          decelerationRate="fast"
          disableIntervalMomentum
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
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
