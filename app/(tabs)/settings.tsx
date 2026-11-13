import Constants from "expo-constants";
import { LinearGradient } from "@/components/LinearGradient";
import { router } from "expo-router";
import { useEffect, useState, type ReactNode } from "react";
import { Alert, Linking, Platform, ScrollView, StyleSheet, Switch, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { Screen, SectionTitle } from "@/components/Screen";
import { toast } from "@/components/Toast";
import { AppText, Bouncy, Chip, Icon, Segmented, type IconName } from "@/components/ui";
import { ensurePermission, formatTime, remindersSupported, scheduleReminder } from "@/lib/notifications";
import { ROOT_PAGES } from "@/data/pages";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "@/store/library";
import { useNotebooks } from "@/store/notebooks";
import { useProgress, useToday } from "@/store/progress";
import { useReview } from "@/store/review";
import { usePlanner } from "@/store/planner";
import { exportBackup, pickBackup, restoreBackup } from "@/store/backup";
import { useSettings, type VideoFrequency } from "@/store/settings";
import { getColors, radius, space, THEME_ORDER, THEMES, useColors, type ThemeMode } from "@/theme";
import { iconLevel, levelInfo, themeLevel } from "@/lib/xp";
import * as AppIcon from "expo-quick-actions/icon";
import { Image } from "expo-image";
import { useXp } from "@/store/xp";
import { useModes } from "@/store/modes";
import { useMistakes } from "@/store/mistakes";
import { useDaily } from "@/store/daily";
import { useWatchLater } from "@/store/watchLater";
import { useSearch } from "@/store/search";
import { useResume } from "@/store/resume";

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

function ThemeOption({ mode }: { mode: ThemeMode }) {
  const c = useColors();
  const current = useSettings((st) => st.theme);
  const set = useSettings((st) => st.set);
  const level = useXp((st) => levelInfo(st.xp).level);
  const def = THEMES[mode];
  const p = getColors(mode);
  const need = themeLevel(mode);
  const locked = level < need;
  const on = current === mode;
  return (
    <Bouncy
      onPress={() => {
        if (locked) {
          haptic.error();
          toast({ message: `${def.name} libera no nível ${need}. Você está no ${level}.`, icon: "lock-outline" });
          return;
        }
        set({ theme: mode });
        haptic.select();
      }}
      scaleTo={0.97}
      style={[styles.themeOpt, { borderColor: on ? c.accent : c.border, backgroundColor: c.surface }]}
      accessibilityRole="radio"
      accessibilityState={{ selected: on, disabled: locked }}
      accessibilityLabel={`Tema ${def.name}${locked ? `, bloqueado até o nível ${need}` : ""}`}
      accessibilityHint={def.description}
      testID={`theme-${mode}`}
    >
      <View style={[styles.preview, { backgroundColor: p.bg, borderColor: p.border }]}>
        <LinearGradient colors={[`${def.ambient[0]}55`, "transparent", `${def.ambient[2]}44`]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
        <View style={[styles.previewBar, { backgroundColor: p.surface2 }]} />
        <View style={[styles.previewBar, { backgroundColor: p.surface2, width: "60%" }]} />
        <View style={[styles.previewTab, { backgroundColor: p.tab }]}>
          <View style={[styles.previewPill, { backgroundColor: p.accent }]} />
        </View>
        {locked && (
          <View style={styles.lock}>
            <Icon name="lock" size={18} color="#fff" />
            <AppText variant="caption" style={{ color: "#fff" }}>Nível {need}</AppText>
          </View>
        )}
      </View>
      <View style={styles.themeLabel}>
        <Icon name={on ? "radiobox-marked" : "radiobox-blank"} size={18} color={on ? c.accent : c.textDim} />
        <AppText variant="label" numberOfLines={1} style={{ flex: 1 }}>{def.name}</AppText>
      </View>
    </Bouncy>
  );
}

const APP_ICONS: { id: string | null; name: string; image: number }[] = [
  { id: null, name: "Padrão", image: require("../../assets/icon.png") },
  { id: "neon", name: "Néon", image: require("../../assets/app-icons/neon.png") },
  { id: "aurora", name: "Aurora", image: require("../../assets/app-icons/aurora.png") },
  { id: "espaco", name: "Espaço", image: require("../../assets/app-icons/espaco.png") },
  { id: "ouro", name: "Ouro", image: require("../../assets/app-icons/ouro.png") },
];

/** Alternate launcher icons unlocked by level (Android). Changing it closes the app, as Android requires. */
function AppIconPicker() {
  const c = useColors();
  const level = useXp((x) => levelInfo(x.xp).level);
  const [current, setCurrent] = useState<string | null | undefined>(undefined);
  useEffect(() => {
    AppIcon.getIcon?.().then((name) => setCurrent(!name || name === "Default" ? null : name)).catch(() => setCurrent(null));
  }, []);
  if (Platform.OS !== "android" || !AppIcon.isSupported) return null;

  const choose = (id: string | null, need: number) => {
    if (level < need) {
      haptic.error();
      toast({ message: `Esse ícone libera no nível ${need}. Você está no ${level}.`, icon: "lock-outline" });
      return;
    }
    if (id === current) return;
    Alert.alert("Trocar o ícone?", "O Android fecha o app para aplicar o novo ícone. É só abrir de novo.", [
      { text: "Cancelar", style: "cancel" },
      { text: "Trocar", onPress: () => { setCurrent(id); AppIcon.setIcon?.(id); } },
    ]);
  };

  return (
    <>
      <SectionTitle>Ícone do app</SectionTitle>
      <View style={styles.iconRow}>
        {APP_ICONS.map((ic) => {
          const need = ic.id ? iconLevel(ic.id) : 1;
          const locked = level < need;
          const on = (current ?? null) === ic.id;
          return (
            <Bouncy key={ic.name} onPress={() => choose(ic.id, need)} style={styles.iconOpt} accessibilityLabel={`Ícone ${ic.name}${locked ? `, nível ${need}` : ""}`} accessibilityState={{ selected: on }}>
              <View style={[styles.iconFrame, { borderColor: on ? c.accent : "transparent" }]}>
                <Image source={ic.image} style={styles.iconImg} />
                {locked && (
                  <View style={styles.iconLock}>
                    <Icon name="lock" size={16} color="#fff" />
                  </View>
                )}
              </View>
              <AppText variant="caption" dim={!on}>{locked ? `Nv. ${need}` : ic.name}</AppText>
            </Bouncy>
          );
        })}
      </View>
    </>
  );
}

/** "Tema automático": Claro during the day, a dark theme of your choice at night. */
function AutoTheme() {
  const c = useColors();
  const st = useSettings();
  const level = useXp((x) => levelInfo(x.xp).level);
  const darks = THEME_ORDER.filter((m) => !THEMES[m].light && level >= themeLevel(m));
  const hours = (list: number[], value: number, key: "dayStart" | "nightStart") => (
    <View style={styles.chips}>
      {list.map((h) => <Chip key={h} label={`${h}h`} active={value === h} onPress={() => st.set({ [key]: h })} />)}
    </View>
  );
  return (
    <View style={{ marginTop: space.md }}>
      <Card>
        <Row icon="theme-light-dark" title="Tema automático" subtitle="Claro de dia, escuro à noite" value={st.autoTheme} onChange={(v) => st.set({ autoTheme: v })} last testID="toggle-auto-theme" />
      </Card>
      {st.autoTheme && (
        <View style={[styles.autoBox, { borderColor: c.border }]}>
          <AppText variant="caption" dim>Tema da noite</AppText>
          <View style={styles.chips}>
            {darks.map((m) => <Chip key={m} label={THEMES[m].name} active={st.nightTheme === m} onPress={() => st.set({ nightTheme: m })} />)}
          </View>
          <AppText variant="caption" dim style={{ marginTop: space.md }}>O dia começa às</AppText>
          {hours([5, 6, 7, 8], st.dayStart, "dayStart")}
          <AppText variant="caption" dim style={{ marginTop: space.md }}>A noite começa às</AppText>
          {hours([17, 18, 19, 20, 21], st.nightStart, "nightStart")}
        </View>
      )}
    </View>
  );
}

const REMINDER_TIMES = [7 * 60, 12 * 60, 18 * 60, 20 * 60, 21 * 60 + 30];

function ReminderSettings() {
  const c = useColors();
  const reminder = useSettings((st) => st.reminder);
  const set = useSettings((st) => st.set);
  const { streak, goal } = useToday();

  const apply = async (minutes: number | null) => {
    if (minutes !== null && !(await ensurePermission())) {
      toast({ message: remindersSupported ? "Permita notificações nos ajustes do Android" : "Lembretes funcionam no app do celular", icon: "bell-off-outline", tone: "error" });
      return;
    }
    set({ reminder: minutes });
    await scheduleReminder(minutes, streak, goal);
    haptic.select();
    toast({ message: minutes === null ? "Lembrete desligado" : `Lembrete todo dia às ${formatTime(minutes)}`, icon: minutes === null ? "bell-off-outline" : "bell-ring-outline" });
  };

  return (
    <Card>
      <Row icon="bell-ring-outline" title="Me lembrar de estudar" subtitle={reminder === null ? "Uma notificação por dia, no horário que você escolher" : `Todo dia às ${formatTime(reminder)}`} value={reminder !== null} onChange={(v) => apply(v ? (reminder ?? 20 * 60) : null)} last={reminder === null} testID="toggle-reminder" />
      {reminder !== null && (
        <View style={[styles.times, { borderTopColor: c.border }]}>
          <Segmented<string> fill value={String(reminder)} onChange={(v) => apply(Number(v))} options={REMINDER_TIMES.map((t) => ({ value: String(t), label: formatTime(t) }))} />
        </View>
      )}
    </Card>
  );
}

export default function Settings() {
  const c = useColors();
  const s = useSettings();
  const lib = useLibrary.getState();

  const doExport = async () => {
    try {
      await exportBackup();
      haptic.success();
      toast({ message: "Backup pronto", icon: "check-circle", tone: "success" });
    } catch {
      toast({ message: "Não deu para criar o backup. Tente de novo.", icon: "alert-circle-outline", tone: "error" });
    }
  };

  const doImport = async () => {
    try {
      const backup = await pickBackup();
      if (!backup) return;
      const when = backup.exportedAt ? new Date(backup.exportedAt).toLocaleDateString("pt-BR") : "data desconhecida";
      confirm("Restaurar backup?", `Backup de ${when}. Seus dados atuais serão substituídos.`, () => {
        restoreBackup(backup);
        haptic.success();
        toast({ message: "Backup restaurado", icon: "check-circle", tone: "success" });
      });
    } catch (e) {
      toast({ message: e instanceof Error ? e.message : "Arquivo inválido", icon: "file-alert-outline", tone: "error" });
    }
  };

  return (
    <Screen title="Ajustes" subtitle="Deixe o app do seu jeito">
      <SectionTitle>Tema</SectionTitle>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.themeScroll} contentContainerStyle={[styles.themeRow, s.autoTheme && { opacity: 0.55 }]}>
        {THEME_ORDER.map((m) => <ThemeOption key={m} mode={m} />)}
      </ScrollView>
      <AutoTheme />

      <SectionTitle>Meta diária</SectionTitle>
      <Segmented<string>
        fill
        value={String(s.dailyGoal)}
        onChange={(v) => s.set({ dailyGoal: Number(v) })}
        options={[5, 10, 20, 30].map((g) => ({ value: String(g), label: `${g} cards` }))}
      />
      <View style={{ height: space.md }} />
      <ReminderSettings />

      <SectionTitle>Sua série</SectionTitle>
      <Segmented<string>
        fill
        value={String(s.serie ?? 0)}
        onChange={(v) => s.set({ serie: v === "0" ? null : (Number(v) as 1 | 2 | 3) })}
        options={[{ value: "1", label: "1º ano" }, { value: "2", label: "2º ano" }, { value: "3", label: "3º ano" }, { value: "0", label: "Todas" }]}
      />
      <Bouncy scaleTo={0.98} onPress={() => router.push("/my-topics")} style={[styles.redo, { borderColor: c.border, alignSelf: "stretch" }]} accessibilityLabel="Marcar assuntos da minha escola" testID="my-topics-link">
        <Icon name="school-outline" size={18} color={c.text} />
        <AppText variant="label" style={{ flex: 1 }}>Assuntos da minha escola</AppText>
        <AppText variant="caption" dim>{s.myTopics ? `${s.myTopics.length} marcados` : "padrão"}</AppText>
        <Icon name="chevron-right" size={18} color={c.textDim} />
      </Bouncy>

      <SectionTitle>Mais ajustes</SectionTitle>
      <Collapsible id="settings-look" icon="format-size" title="Texto e ícone do app" summary="Tamanho do texto, alto contraste, ícone">
        <Segmented<string>
          fill
          value={String(s.textScale)}
          onChange={(v) => s.set({ textScale: Number(v) })}
          options={[{ value: "1", label: "Normal" }, { value: "1.15", label: "Grande" }, { value: "1.3", label: "Enorme" }]}
        />
        <View style={{ height: space.md }} />
        <Card>
          <Row icon="contrast-circle" title="Alto contraste" subtitle="Textos secundários e bordas mais fortes" value={s.highContrast} onChange={(v) => s.set({ highContrast: v })} last testID="toggle-contrast" />
        </Card>
        <AppIconPicker />
      </Collapsible>

      <Collapsible id="settings-video" icon="play-box-outline" title="Vídeos" summary="Autoplay, som, economia de dados, frequência">
        <Card>
          <Row icon="play-speed" title="Reproduzir vídeos automaticamente" subtitle="Toca o vídeo assim que ele aparece" value={s.autoplay} onChange={(v) => s.set({ autoplay: v })} testID="toggle-autoplay" />
          <Row icon="volume-off" title="Começar sem som" value={s.startMuted} onChange={(v) => s.set({ startMuted: v })} />
          <Row icon="closed-caption-outline" title="Legendas em português" subtitle="Quando o vídeo tiver legenda" value={s.captions} onChange={(v) => s.set({ captions: v })} testID="toggle-captions" />
          <Row icon="wifi-strength-1" title="Economia de dados" subtitle="Sem autoplay, sem imagens e sem Wikipédia" value={s.dataSaver} onChange={(v) => s.set({ dataSaver: v })} last />
        </Card>
        <AppText variant="caption" dim style={{ marginTop: 14, marginBottom: 8 }}>Frequência de vídeos no feed (Shorts e aulas)</AppText>
        <Segmented<VideoFrequency>
          fill
          value={s.videoFrequency}
          onChange={(v) => s.set({ videoFrequency: v })}
          options={[{ value: "more", label: "Mais vídeos" }, { value: "balanced", label: "Equilibrado" }, { value: "less", label: "Menos" }]}
        />
      </Collapsible>

      <Collapsible id="settings-study" icon="gesture-tap" title="Estudo e interação" summary="Vibração, voz, revisão, interesses">
        <Card>
          <Row icon="vibrate" title="Vibração (haptics)" value={s.haptics} onChange={(v) => s.set({ haptics: v })} />
          <Row icon="motion-pause-outline" title="Reduzir movimento" subtitle="Menos animações e transições" value={s.reduceMotion} onChange={(v) => s.set({ reduceMotion: v })} />
          <Row icon="account-voice" title="Ler cards em voz alta" subtitle="Lê cada card quando ele aparece no feed" value={s.autoSpeak} onChange={(v) => s.set({ autoSpeak: v })} />
          <Row icon="bookmark-plus-outline" title="Salvar vira revisão" subtitle="Quizzes e flashcards salvos entram na revisão espaçada" value={s.saveToReview} onChange={(v) => s.set({ saveToReview: v })} last />
        </Card>
        <AppText variant="label" style={{ marginTop: space.lg }}>Interesses</AppText>
        <AppText variant="caption" dim style={{ marginTop: 2, marginBottom: 10 }}>Temas marcados aparecem com mais frequência no feed.</AppText>
        <View style={styles.chips}>
          {ROOT_PAGES.map((p) => <Chip key={p.id} label={p.name} active={s.interests.includes(p.id)} onPress={() => s.toggleInterest(p.id)} />)}
        </View>
        <Bouncy scaleTo={0.98} onPress={() => router.push("/onboarding")} style={[styles.redo, { borderColor: c.border }]} accessibilityLabel="Refazer onboarding">
          <Icon name="restart" size={18} color={c.text} />
          <AppText variant="label">Refazer escolha de temas</AppText>
        </Bouncy>
      </Collapsible>

      <Collapsible id="settings-data" icon="cloud-sync-outline" title="Backup e dados" summary="Guardar, restaurar ou apagar seu progresso">
        <AppText variant="caption" dim style={{ marginBottom: 10 }}>Guarde um arquivo com todo o seu progresso para restaurar em outro celular.</AppText>
        <Card>
          <Bouncy scaleTo={0.98} style={[styles.row, { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: c.border }]} onPress={doExport} testID="backup-export">
            <View style={[styles.rowIcon, { backgroundColor: c.surface2 }]}><Icon name="cloud-upload-outline" size={18} color={c.text} /></View>
            <View style={{ flex: 1 }}>
              <AppText variant="label">Fazer backup</AppText>
              <AppText variant="caption" dim>Salva um arquivo .json (Drive, WhatsApp, e-mail…)</AppText>
            </View>
          </Bouncy>
          <Bouncy scaleTo={0.98} style={styles.row} onPress={doImport} testID="backup-import">
            <View style={[styles.rowIcon, { backgroundColor: c.surface2 }]}><Icon name="cloud-download-outline" size={18} color={c.text} /></View>
            <View style={{ flex: 1 }}>
              <AppText variant="label">Restaurar backup</AppText>
              <AppText variant="caption" dim>Substitui os dados atuais pelos do arquivo</AppText>
            </View>
          </Bouncy>
        </Card>
        <View style={{ height: space.md }} />
        <Card>
          <Bouncy scaleTo={0.98} style={[styles.row, { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: c.border }]} onPress={() => confirm("Limpar histórico?", "Zera o aprendizado do feed e as estatísticas de quiz. Salvos e curtidos ficam.", () => { lib.clearHistory(); haptic.success(); })}>
            <View style={[styles.rowIcon, { backgroundColor: c.surface2 }]}><Icon name="refresh" size={18} color={c.text} /></View>
            <AppText variant="label" style={{ flex: 1 }}>Limpar histórico do feed</AppText>
          </Bouncy>
          <Bouncy scaleTo={0.98} style={styles.row} onPress={() => confirm("Apagar tudo?", "Remove salvos, curtidos, cadernos, notas, revisão, erros, sequência, XP, recordes, modos salvos e ajustes.", () => { useLibrary.getState().reset(); useProgress.getState().reset(); useReview.getState().reset(); useNotebooks.getState().reset(); usePlanner.getState().reset(); useXp.getState().reset(); useModes.getState().reset(); useMistakes.getState().reset(); useDaily.getState().reset(); useWatchLater.getState().reset(); useSearch.getState().clear(); useResume.getState().setForYou([]); s.reset(); haptic.success(); })}>
            <View style={[styles.rowIcon, { backgroundColor: "rgba(244,63,94,0.15)" }]}><Icon name="trash-can-outline" size={18} color={c.danger} /></View>
            <AppText variant="label" style={{ flex: 1, color: c.danger }}>Apagar todos os dados</AppText>
          </Bouncy>
        </Card>
      </Collapsible>

      <Collapsible id="settings-about" icon="information-outline" title="Sobre" summary={`Versão ${Constants.expoConfig?.version ?? "0.7.2"} · código aberto`}>
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
            <AppText variant="caption" dim>{Constants.expoConfig?.version ?? "0.7.2"} · build {String(Constants.expoConfig?.extra?.buildNumber ?? "dev")}</AppText>
          </View>
        </Card>
      </Collapsible>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth, overflow: "hidden" },
  row: { flexDirection: "row", alignItems: "center", gap: 12, paddingHorizontal: 14, paddingVertical: 12, minHeight: 58 },
  rowIcon: { width: 34, height: 34, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  themeScroll: { marginHorizontal: -space.lg },
  themeRow: { flexDirection: "row", gap: 10, paddingHorizontal: space.lg },
  iconRow: { flexDirection: "row", justifyContent: "space-between" },
  iconOpt: { alignItems: "center", gap: 4 },
  iconFrame: { borderWidth: 2, borderRadius: 18, padding: 2 },
  iconImg: { width: 52, height: 52, borderRadius: 14 },
  iconLock: { ...StyleSheet.absoluteFill, margin: 2, borderRadius: 14, backgroundColor: "rgba(0,0,0,0.5)", alignItems: "center", justifyContent: "center" },
  autoBox: { marginTop: space.sm, padding: space.md, borderRadius: radius.lg, borderWidth: 1, gap: space.sm },
  themeOpt: { width: 142, padding: 8, borderRadius: radius.lg, borderWidth: 1.5 },
  lock: { ...StyleSheet.absoluteFill, alignItems: "center", justifyContent: "center", gap: 2, backgroundColor: "rgba(0,0,0,0.45)" },
  preview: { height: 84, borderRadius: radius.md, borderWidth: StyleSheet.hairlineWidth, padding: 10, gap: 6, overflow: "hidden" },
  previewBar: { height: 10, borderRadius: 5, width: "80%" },
  previewTab: { position: "absolute", bottom: 8, left: 10, right: 10, height: 20, borderRadius: 10, justifyContent: "center", paddingHorizontal: 3 },
  previewPill: { width: "30%", height: 14, borderRadius: 7 },
  themeLabel: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 10 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  times: { padding: space.md, borderTopWidth: StyleSheet.hairlineWidth },
  redo: { flexDirection: "row", alignItems: "center", gap: 8, alignSelf: "flex-start", paddingHorizontal: 14, paddingVertical: 10, borderRadius: radius.pill, borderWidth: 1, marginTop: 12 },
});
