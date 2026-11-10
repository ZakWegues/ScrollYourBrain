import Constants from "expo-constants";
import { router } from "expo-router";
import type { ReactNode } from "react";
import { Alert, Linking, Platform, StyleSheet, Switch, View } from "react-native";
import { Screen, SectionTitle } from "@/components/Screen";
import { AppText, Bouncy, Chip, Icon, type IconName } from "@/components/ui";
import { PAGES } from "@/data/pages";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "@/store/library";
import { useNotebooks } from "@/store/notebooks";
import { useProgress } from "@/store/progress";
import { useReview } from "@/store/review";
import { useSettings } from "@/store/settings";
import { getColors, radius, useColors, type ThemeMode } from "@/theme";

const REPO = "https://github.com/ZakWegues/ScrollYourBrain";

const confirm = (title: string, msg: string, onOk: () => void) => {
  if (Platform.OS === "web") {
    if (window.confirm(`${title}\n${msg}`)) onOk();
    return;
  }
  Alert.alert(title, msg, [{ text: "Cancelar", style: "cancel" }, { text: "Confirmar", style: "destructive", onPress: onOk }]);
};

function Card({ children }: { children: ReactNode }) {
  const c = useColors();
  return <View style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]}>{children}</View>;
}

function Row({ icon, title, subtitle, value, onChange, last, testID }: { icon: IconName; title: string; subtitle?: string; value: boolean; onChange: (v: boolean) => void; last?: boolean; testID?: string }) {
  const c = useColors();
  return (
    <View style={[styles.row, !last && { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: c.border }]}>
      <View style={[styles.rowIcon, { backgroundColor: c.surface2 }]}><Icon name={icon} size={18} color={c.text} /></View>
      <View style={{ flex: 1 }}>
        <AppText variant="label">{title}</AppText>
        {subtitle && <AppText variant="caption" dim style={{ marginTop: 2 }}>{subtitle}</AppText>}
      </View>
      <Switch
        value={value}
        onValueChange={(v) => { onChange(v); haptic.select(); }}
        trackColor={{ false: c.surface2, true: c.accent }}
        thumbColor="#fff"
        {...({ activeThumbColor: "#fff" } as object)}
        accessibilityLabel={title}
        testID={testID}
      />
    </View>
  );
}

function ThemeOption({ mode, label, desc }: { mode: ThemeMode; label: string; desc: string }) {
  const c = useColors();
  const current = useSettings((s) => s.theme);
  const set = useSettings((s) => s.set);
  const p = getColors(mode);
  const on = current === mode;
  return (
    <Bouncy
      onPress={() => { set({ theme: mode }); haptic.select(); }}
      scaleTo={0.97}
      style={[styles.themeOpt, { borderColor: on ? c.accent : c.border, backgroundColor: c.surface }]}
      accessibilityRole="radio"
      accessibilityState={{ selected: on }}
      accessibilityLabel={`Tema ${label}`}
      testID={`theme-${mode}`}
    >
      <View style={[styles.preview, { backgroundColor: p.bg, borderColor: p.border }]}>
        <View style={[styles.previewBar, { backgroundColor: p.surface2 }]} />
        <View style={[styles.previewBar, { backgroundColor: p.surface2, width: "60%" }]} />
        <View style={[styles.previewTab, { backgroundColor: p.tab }]}>
          <View style={[styles.previewPill, { backgroundColor: c.accent }]} />
        </View>
      </View>
      <View style={styles.themeLabel}>
        <Icon name={on ? "radiobox-marked" : "radiobox-blank"} size={18} color={on ? c.accent : c.textDim} />
        <AppText variant="label">{label}</AppText>
      </View>
      <AppText variant="caption" dim style={{ marginTop: 2 }}>{desc}</AppText>
    </Bouncy>
  );
}

export default function Settings() {
  const c = useColors();
  const s = useSettings();
  const lib = useLibrary.getState();

  return (
    <Screen title="Ajustes" subtitle="Deixe o app do seu jeito">
      <SectionTitle>Aparência</SectionTitle>
      <View style={styles.themeRow}>
        <ThemeOption mode="amoled" label="Preto AMOLED" desc="Preto puro. Economiza bateria em telas OLED." />
        <ThemeOption mode="default" label="Padrão" desc="Escuro suave, com mais profundidade." />
      </View>

      <SectionTitle>Meta diária</SectionTitle>
      <AppText variant="caption" dim style={{ marginTop: -6, marginBottom: 10 }}>Cards por dia para manter sua sequência acesa.</AppText>
      <View style={styles.chips}>
        {[5, 10, 20, 30].map((g) => <Chip key={g} label={`${g} cards`} icon="fire" active={s.dailyGoal === g} onPress={() => s.set({ dailyGoal: g })} />)}
      </View>

      <SectionTitle>Reprodução</SectionTitle>
      <Card>
        <Row icon="play-speed" title="Reproduzir vídeos automaticamente" subtitle="Toca o vídeo assim que ele aparece" value={s.autoplay} onChange={(v) => s.set({ autoplay: v })} testID="toggle-autoplay" />
        <Row icon="volume-off" title="Começar sem som" value={s.startMuted} onChange={(v) => s.set({ startMuted: v })} />
        <Row icon="wifi-strength-1" title="Economia de dados" subtitle="Sem autoplay, sem imagens e sem Wikipédia" value={s.dataSaver} onChange={(v) => s.set({ dataSaver: v })} last />
      </Card>

      <SectionTitle>Interação</SectionTitle>
      <Card>
        <Row icon="vibrate" title="Vibração (haptics)" value={s.haptics} onChange={(v) => s.set({ haptics: v })} />
        <Row icon="motion-pause-outline" title="Reduzir movimento" subtitle="Menos animações e transições" value={s.reduceMotion} onChange={(v) => s.set({ reduceMotion: v })} last />
      </Card>

      <SectionTitle>Interesses</SectionTitle>
      <AppText variant="caption" dim style={{ marginTop: -6, marginBottom: 10 }}>Temas marcados aparecem com mais frequência no feed.</AppText>
      <View style={styles.chips}>
        {PAGES.map((p) => <Chip key={p.id} label={p.name} active={s.interests.includes(p.id)} onPress={() => s.toggleInterest(p.id)} />)}
      </View>
      <Bouncy scaleTo={0.98} onPress={() => router.push("/onboarding")} style={[styles.redo, { borderColor: c.border }]} accessibilityLabel="Refazer onboarding">
        <Icon name="restart" size={18} color={c.text} />
        <AppText variant="label">Refazer escolha de temas</AppText>
      </Bouncy>

      <SectionTitle>Dados</SectionTitle>
      <Card>
        <Bouncy scaleTo={0.98} style={[styles.row, { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: c.border }]} onPress={() => confirm("Limpar histórico?", "Zera o aprendizado do feed e as estatísticas de quiz. Salvos e curtidos ficam.", () => { lib.clearHistory(); haptic.success(); })}>
          <View style={[styles.rowIcon, { backgroundColor: c.surface2 }]}><Icon name="refresh" size={18} color={c.text} /></View>
          <AppText variant="label" style={{ flex: 1 }}>Limpar histórico do feed</AppText>
        </Bouncy>
        <Bouncy scaleTo={0.98} style={styles.row} onPress={() => confirm("Apagar tudo?", "Remove salvos, curtidos, cadernos, notas, revisão, sequência, recordes e ajustes.", () => { useLibrary.getState().reset(); useProgress.getState().reset(); useReview.getState().reset(); useNotebooks.getState().reset(); s.reset(); haptic.success(); })}>
          <View style={[styles.rowIcon, { backgroundColor: "rgba(244,63,94,0.15)" }]}><Icon name="trash-can-outline" size={18} color={c.danger} /></View>
          <AppText variant="label" style={{ flex: 1, color: c.danger }}>Apagar todos os dados</AppText>
        </Bouncy>
      </Card>

      <SectionTitle>Sobre</SectionTitle>
      <Card>
        <Bouncy scaleTo={0.98} style={[styles.row, { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: c.border }]} onPress={() => Linking.openURL(REPO)}>
          <View style={[styles.rowIcon, { backgroundColor: c.surface2 }]}><Icon name="github" size={18} color={c.text} /></View>
          <View style={{ flex: 1 }}>
            <AppText variant="label">Código aberto no GitHub</AppText>
            <AppText variant="caption" dim>Licença MIT · contribuições bem-vindas</AppText>
          </View>
          <Icon name="open-in-new" size={18} color={c.textDim} />
        </Bouncy>
        <View style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: c.surface2 }]}><Icon name="information-outline" size={18} color={c.text} /></View>
          <AppText variant="label" style={{ flex: 1 }}>Versão</AppText>
          <AppText variant="caption" dim>{Constants.expoConfig?.version ?? "0.1.0"}</AppText>
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth, overflow: "hidden" },
  row: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 14, paddingVertical: 12, minHeight: 58 },
  rowIcon: { width: 34, height: 34, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  themeRow: { flexDirection: "row", gap: 10 },
  themeOpt: { flex: 1, padding: 10, borderRadius: radius.lg, borderWidth: 1.5 },
  preview: { height: 110, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, padding: 10, gap: 6, overflow: "hidden" },
  previewBar: { height: 10, borderRadius: 5, width: "80%" },
  previewTab: { position: "absolute", bottom: 8, left: 10, right: 10, height: 20, borderRadius: 10, justifyContent: "center", paddingHorizontal: 3 },
  previewPill: { width: "30%", height: 14, borderRadius: 7 },
  themeLabel: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 10 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  redo: { flexDirection: "row", alignItems: "center", gap: 8, alignSelf: "flex-start", paddingHorizontal: 14, paddingVertical: 10, borderRadius: radius.pill, borderWidth: 1, marginTop: 12 },
});
