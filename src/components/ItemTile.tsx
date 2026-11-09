import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { getPage } from "@/data/pages";
import type { StudyItem } from "@/feed/types";
import { youtubeThumb } from "@/feed/sources/youtube";
import { radius, useColors } from "@/theme";
import { AppText, Bouncy, Icon, type IconName } from "./ui";

const ICON: Record<StudyItem["kind"], IconName> = {
  concept: "text-box-outline", quiz: "help-circle-outline", flash: "cards-outline", video: "play-circle-outline", wiki: "wikipedia",
};

export const preview = (i: StudyItem): string => {
  switch (i.kind) {
    case "concept": return i.beats[0];
    case "quiz": return i.question;
    case "flash": return i.front;
    case "video": return i.caption;
    case "wiki": return i.extract;
  }
};

/** Compact card used in grids (library, pages, search). */
export function ItemTile({ item, onPress }: { item: StudyItem; onPress: () => void }) {
  const c = useColors();
  const page = getPage(item.pageId);
  const image = item.kind === "video" ? youtubeThumb(item.youtubeId) : item.kind === "wiki" ? item.imageUrl : undefined;
  return (
    <Bouncy onPress={onPress} scaleTo={0.96} style={[styles.tile, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={item.title}>
      <LinearGradient colors={[page.colors[0] + "55", page.colors[1] + "10"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
      {image && <Image source={image} style={StyleSheet.absoluteFill} contentFit="cover" />}
      {image && <LinearGradient colors={["transparent", "rgba(0,0,0,0.85)"]} style={StyleSheet.absoluteFill} />}
      <View style={styles.head}>
        <Icon name={ICON[item.kind]} size={16} color="#fff" />
        <AppText variant="caption" style={{ color: "#fff" }} numberOfLines={1}>{page.name}</AppText>
      </View>
      <View style={{ flex: 1 }} />
      <AppText variant="label" numberOfLines={2} style={{ color: "#fff" }}>{item.title}</AppText>
      {!image && <AppText variant="caption" numberOfLines={3} style={{ color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{preview(item)}</AppText>}
    </Bouncy>
  );
}

const styles = StyleSheet.create({
  tile: { aspectRatio: 0.72, borderRadius: radius.md, padding: 12, overflow: "hidden", borderWidth: StyleSheet.hairlineWidth },
  head: { flexDirection: "row", alignItems: "center", gap: 6 },
});
