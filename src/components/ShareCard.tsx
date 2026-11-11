import * as Sharing from "expo-sharing";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import { Platform, Share, StyleSheet, View } from "react-native";
import { captureRef } from "react-native-view-shot";
import { create } from "zustand";
import { getPage } from "@/data/pages";
import type { StudyItem } from "@/feed/types";
import { haptic } from "@/lib/haptics";
import { radius, space } from "@/theme";
import { LogoMark } from "./Logo";
import { Sheet } from "./Sheet";
import { toast } from "./Toast";
import { AppText, GradientButton, Icon, PageAvatar, type IconName } from "./ui";

const useShareCard = create<{ item: StudyItem | null }>()(() => ({ item: null }));
export const openShareCard = (item: StudyItem) => useShareCard.setState({ item });
const close = () => useShareCard.setState({ item: null });

const KIND: Record<StudyItem["kind"], { label: string; icon: IconName }> = {
  concept: { label: "Conceito", icon: "text-box-outline" },
  quiz: { label: "Quiz", icon: "help-circle-outline" },
  flash: { label: "Flashcard", icon: "cards-outline" },
  video: { label: "Vídeo", icon: "play-circle-outline" },
  wiki: { label: "Você sabia?", icon: "wikipedia" },
};

function Body({ item }: { item: StudyItem }) {
  switch (item.kind) {
    case "quiz":
      return (
        <>
          <AppText variant="title" style={styles.white}>{item.question}</AppText>
          {item.options.map((o, i) => (
            <View key={i} style={styles.option}>
              <AppText variant="label" style={styles.white}>{"ABCD"[i]}</AppText>
              <AppText style={[styles.white, { flex: 1 }]}>{o}</AppText>
            </View>
          ))}
          <AppText variant="caption" style={styles.soft}>Resposta no app 😉</AppText>
        </>
      );
    case "flash":
      return (
        <>
          <AppText variant="title" style={styles.white}>{item.front}</AppText>
          <View style={styles.answer}>
            <AppText variant="caption" style={styles.soft}>RESPOSTA</AppText>
            <AppText variant="headline" style={styles.white}>{item.back}</AppText>
          </View>
        </>
      );
    case "concept":
      return (
        <>
          {item.beats.slice(0, 3).map((b, i) => <AppText key={i} variant={i === 0 ? "title" : "headline"} style={[styles.white, { marginBottom: space.sm }]}>{b}</AppText>)}
          <View style={styles.answer}>
            <AppText variant="label" style={styles.white}>💡 {item.takeaway}</AppText>
          </View>
        </>
      );
    case "video":
      return <AppText variant="title" style={styles.white}>{item.title}</AppText>;
    case "wiki":
      return (
        <>
          <AppText variant="title" style={styles.white}>{item.title}</AppText>
          <AppText style={[styles.white, { marginTop: space.sm }]} numberOfLines={8}>{item.extract}</AppText>
        </>
      );
  }
}

/** Renders a clean, branded image of a card and opens the share sheet. */
export function ShareCardHost() {
  const item = useShareCard((s) => s.item);
  const ref = useRef<View>(null);
  const [busy, setBusy] = useState(false);
  if (!item) return null;
  const page = getPage(item.pageId);

  const share = async () => {
    setBusy(true);
    try {
      if (Platform.OS === "web" || !(await Sharing.isAvailableAsync())) {
        await Share.share({ message: `${item.title}\n\n— estudado no ScrollYourBrain` });
      } else {
        const uri = await captureRef(ref, { format: "png", quality: 1, result: "tmpfile" });
        await Sharing.shareAsync(uri, { mimeType: "image/png", dialogTitle: "Compartilhar card" });
      }
      haptic.success();
      close();
    } catch {
      toast({ message: "Não deu para gerar a imagem agora", icon: "alert-circle-outline", tone: "error" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Sheet visible onClose={close} title="Compartilhar como imagem">
      <View ref={ref} collapsable={false} style={styles.card}>
        <LinearGradient colors={[page.colors[0], page.colors[1], "#0B0B0E"]} locations={[0, 0.55, 1]} start={{ x: 0, y: 0 }} end={{ x: 0.6, y: 1 }} style={StyleSheet.absoluteFill} />
        <View style={styles.head}>
          <PageAvatar pageId={item.pageId} size={32} />
          <View style={{ flex: 1 }}>
            <AppText variant="label" style={styles.white}>{page.name}</AppText>
            <AppText variant="caption" style={styles.soft}>{page.handle}</AppText>
          </View>
          <View style={styles.kind}>
            <Icon name={KIND[item.kind].icon} size={14} color="#fff" />
            <AppText variant="caption" style={styles.white}>{KIND[item.kind].label}</AppText>
          </View>
        </View>
        <View style={styles.body}>
          <Body item={item} />
        </View>
        <View style={styles.foot}>
          <LogoMark size={26} />
          <AppText variant="label" style={styles.white}>ScrollYourBrain</AppText>
          <AppText variant="caption" style={[styles.soft, { marginLeft: "auto" }]}>estude no ritmo do scroll</AppText>
        </View>
      </View>
      <GradientButton label={busy ? "Gerando…" : "Compartilhar"} icon="share-variant" onPress={share} style={{ marginTop: space.lg }} />
    </Sheet>
  );
}

const styles = StyleSheet.create({
  card: { aspectRatio: 4 / 5, borderRadius: radius.xl, overflow: "hidden", padding: space.xl, justifyContent: "space-between" },
  head: { flexDirection: "row", alignItems: "center", gap: space.sm },
  kind: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.pill, backgroundColor: "rgba(0,0,0,0.3)" },
  body: { flex: 1, justifyContent: "center", paddingVertical: space.lg },
  option: { flexDirection: "row", gap: space.md, paddingVertical: 8, paddingHorizontal: space.md, marginTop: space.sm, borderRadius: radius.md, backgroundColor: "rgba(0,0,0,0.28)" },
  answer: { marginTop: space.lg, padding: space.md, borderRadius: radius.md, backgroundColor: "rgba(0,0,0,0.3)" },
  foot: { flexDirection: "row", alignItems: "center", gap: space.sm },
  white: { color: "#fff" },
  soft: { color: "rgba(255,255,255,0.75)" },
});
