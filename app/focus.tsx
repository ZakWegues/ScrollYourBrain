import { LinearGradient } from "@/components/LinearGradient";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Alert, Platform, ScrollView, StyleSheet, View } from "react-native";
import Animated, { FadeIn, ZoomIn } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feed } from "@/components/Feed";
import { toast } from "@/components/Toast";
import { AppText, Bouncy, Chip, Glass, GradientButton, Icon, Segmented } from "@/components/ui";
import { ROOT_PAGES, getPage } from "@/data/pages";
import type { FeedSource } from "@/feed/useFeed";
import { haptic } from "@/lib/haptics";
import { awardXp } from "@/store/xp";
import { useProgress } from "@/store/progress";
import { radius, space, TOUCH, useColors } from "@/theme";

const PRESETS = { "25": { focus: 25, rest: 5 }, "50": { focus: 50, rest: 10 }, "15": { focus: 15, rest: 3 } } as const;
type Preset = keyof typeof PRESETS;
type Phase = "setup" | "focus" | "break";

const mmss = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};

const confirmStop = (onOk: () => void) => {
  if (Platform.OS === "web") {
    if (window.confirm("Encerrar a sessão de foco?")) onOk();
    return;
  }
  Alert.alert("Encerrar a sessão de foco?", "O ciclo atual não será contado.", [{ text: "Continuar focado", style: "cancel" }, { text: "Encerrar", style: "destructive", onPress: onOk }]);
};

/** Pomodoro: a distraction-free feed (one topic or "Para você") with focus and break cycles. */
export default function Focus() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ page?: string }>();
  const [preset, setPreset] = useState<Preset>("25");
  const [pageId, setPageId] = useState<string | null>(params.page ?? null);
  const [phase, setPhase] = useState<Phase>("setup");
  const [endsAt, setEndsAt] = useState(0);
  const [now, setNow] = useState(0);
  const [cycles, setCycles] = useState(0);
  const source = useMemo<FeedSource>(() => (pageId ? { type: "page", pageId } : { type: "forYou" }), [pageId]);
  const { focus, rest } = PRESETS[preset];
  const left = endsAt - now;

  // Latest values for the interval callback, which outlives renders.
  const live = useRef({ phase, endsAt, cycles, focus, rest, pageId });
  useEffect(() => {
    live.current = { phase, endsAt, cycles, focus, rest, pageId };
  }, [phase, endsAt, cycles, focus, rest, pageId]);

  // One tick per second; switches between focus and break when the clock runs out.
  useEffect(() => {
    if (phase === "setup") return;
    const id = setInterval(() => {
      const t = Date.now();
      setNow(t);
      const cur = live.current;
      if (t < cur.endsAt) return;
      if (cur.phase === "focus") {
        useProgress.getState().logEvent(cur.pageId ?? undefined, { focus: 1 });
        awardXp("focus");
        haptic.success();
        toast({ message: `Ciclo ${cur.cycles + 1} concluído! Pausa de ${cur.rest} min`, icon: "coffee-outline", tone: "success" });
        setCycles(cur.cycles + 1);
        setPhase("break");
        setEndsAt(t + cur.rest * 60_000);
        live.current = { ...cur, phase: "break", endsAt: t + cur.rest * 60_000, cycles: cur.cycles + 1 };
      } else {
        haptic.medium();
        toast({ message: "Pausa acabou. Bora para o próximo ciclo!", icon: "bullseye-arrow" });
        setPhase("focus");
        setEndsAt(t + cur.focus * 60_000);
        live.current = { ...cur, phase: "focus", endsAt: t + cur.focus * 60_000 };
      }
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  const start = () => {
    const at = Date.now();
    setNow(at);
    setEndsAt(at + focus * 60_000);
    setPhase("focus");
    haptic.medium();
  };
  const close = () => (router.canGoBack() ? router.back() : router.replace("/"));

  if (phase === "setup") {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg }}>
        <LinearGradient colors={["rgba(99,102,241,0.25)", "transparent"]} style={styles.glow} pointerEvents="none" />
        <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
          <Bouncy onPress={close} style={styles.iconBtn} accessibilityLabel="Fechar">
            <Icon name="close" size={26} color={c.text} />
          </Bouncy>
          <AppText variant="label">Modo foco</AppText>
          <View style={styles.iconBtn} />
        </View>
        <ScrollView contentContainerStyle={{ padding: space.lg, paddingBottom: insets.bottom + 120 }} showsVerticalScrollIndicator={false}>
          <Animated.View entering={ZoomIn.springify().damping(18).stiffness(260).mass(1)} style={styles.hero}>
            <Icon name="bullseye-arrow" size={56} color="#818CF8" />
            <AppText variant="title" style={styles.center}>Estude sem distrações</AppText>
            <AppText dim style={styles.center}>Um feed só do tema que você escolher, com ciclos de foco e pausas. O app avisa quando parar.</AppText>
          </Animated.View>

          <AppText variant="headline" style={styles.label}>Ciclo</AppText>
          <Segmented<Preset>
            fill
            value={preset}
            onChange={setPreset}
            options={[{ value: "15", label: "15 + 3" }, { value: "25", label: "25 + 5" }, { value: "50", label: "50 + 10" }]}
          />
          <AppText variant="caption" dim style={{ marginTop: space.sm }}>Minutos de foco + minutos de pausa.</AppText>

          <AppText variant="headline" style={styles.label}>Tema</AppText>
          <View style={styles.chips}>
            <Chip label="Para você" icon="shuffle-variant" active={pageId === null} onPress={() => setPageId(null)} />
            {ROOT_PAGES.map((p) => <Chip key={p.id} label={p.name} active={pageId === p.id} onPress={() => setPageId(p.id)} />)}
          </View>
        </ScrollView>
        <View style={[styles.footer, { paddingBottom: insets.bottom + space.lg, backgroundColor: c.bg }]}>
          <GradientButton label={`Começar ${focus} min de foco`} icon="play" onPress={start} />
        </View>
      </View>
    );
  }

  const total = (phase === "focus" ? focus : rest) * 60_000;
  const progress = Math.min(1, Math.max(0, 1 - left / total));

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      {phase === "focus" ? (
        <Feed key={pageId ?? "forYou"} source={source} bottomInset={insets.bottom + space.lg} />
      ) : (
        <Animated.View entering={FadeIn} style={[styles.break, { paddingTop: insets.top }]}>
          <Icon name="coffee-outline" size={64} color={c.save} />
          <AppText variant="display" style={{ marginTop: space.md }}>{mmss(left)}</AppText>
          <AppText variant="headline" style={styles.center}>Pausa</AppText>
          <AppText dim style={[styles.center, { maxWidth: 280 }]}>Levante, beba água, respire. O próximo ciclo começa sozinho.</AppText>
          <GradientButton label="Pular pausa" icon="skip-next" onPress={() => { setPhase("focus"); setEndsAt(Date.now() + focus * 60_000); setNow(Date.now()); }} style={{ marginTop: space.xl }} />
        </Animated.View>
      )}
      <View style={[styles.hud, { top: insets.top + space.sm }]} pointerEvents="box-none">
        <Glass style={styles.timer}>
          <Icon name={phase === "focus" ? "bullseye-arrow" : "coffee-outline"} size={18} color={phase === "focus" ? "#818CF8" : c.save} />
          <AppText variant="label" style={{ fontVariant: ["tabular-nums"] }} accessibilityLabel={`Faltam ${mmss(left)}`}>{mmss(left)}</AppText>
          <AppText variant="caption" dim>· ciclo {cycles + (phase === "focus" ? 1 : 0)}</AppText>
          <View style={[styles.timerTrack, { backgroundColor: c.surface2 }]}>
            <View style={[styles.timerFill, { width: `${progress * 100}%`, backgroundColor: phase === "focus" ? "#818CF8" : c.save }]} />
          </View>
        </Glass>
        <Bouncy onPress={() => confirmStop(close)} style={styles.stop} accessibilityLabel="Encerrar foco">
          <Glass style={styles.stopInner}><Icon name="stop" size={20} color="#fff" /></Glass>
        </Bouncy>
      </View>
      {phase === "focus" && pageId && (
        <View style={[styles.topic, { top: insets.top + 60 }]} pointerEvents="none">
          <AppText variant="caption" dim>{getPage(pageId).name}</AppText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  glow: { position: "absolute", top: 0, left: 0, right: 0, height: 320 },
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  hero: { alignItems: "center", gap: space.sm, paddingVertical: space.lg },
  center: { textAlign: "center" },
  label: { marginTop: space.xl, marginBottom: space.md },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: space.sm },
  footer: { position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: space.lg, paddingTop: space.md },
  break: { flex: 1, alignItems: "center", justifyContent: "center", padding: space.xl, gap: space.xs },
  hud: { position: "absolute", left: space.lg, right: space.lg, flexDirection: "row", alignItems: "center", gap: space.sm },
  timer: { flex: 1, flexDirection: "row", alignItems: "center", gap: space.sm, paddingHorizontal: space.md, height: TOUCH, borderRadius: radius.pill, overflow: "hidden" },
  timerTrack: { position: "absolute", left: 0, right: 0, bottom: 0, height: 3 },
  timerFill: { height: 3 },
  stop: {},
  stopInner: { width: TOUCH, height: TOUCH, borderRadius: TOUCH / 2, alignItems: "center", justifyContent: "center" },
  topic: { position: "absolute", left: 0, right: 0, alignItems: "center" },
});
