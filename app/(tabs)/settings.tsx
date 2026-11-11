import Constants from "expo-constants";
import { router } from "expo-router";
import type { ReactNode } from "react";
import { Alert, Linking, Platform, StyleSheet, Switch, View } from "react-native";
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
import { useSettings } from "@/store/settings";
import { getColors, radius, space, useColors, type ThemeMode } from "@/theme";

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
      <SectionTitle>Aparência</SectionTitle>
      <View style={styles.themeRow}>
        <ThemeOption mode="amoled" label="Preto AMOLED" desc="Preto puro. Economiza bateria em telas OLED." />
        <ThemeOption mode="default" label="Padrão" desc="Escuro suave, com mais profundidade." />
      </View>

      <SectionTitle>Texto confortável</SectionTitle>
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

      <SectionTitle>Lembrete diário</SectionTitle>
      <ReminderSettings />

      <SectionTitle>Meta diária</SectionTitle>
      <AppText variant="caption" dim style={{ marginTop: -6, marginBottom: 10 }}>Cards por dia para manter sua sequência acesa.</AppText>
      <Segmented<string>
        fill
        value={String(s.dailyGoal)}
        onChange={(v) => s.set({ dailyGoal: Number(v) })}
        options={[5, 10, 20, 30].map((g) => ({ value: String(g), label: `${g} cards` }))}
      />

      <SectionTitle>Reprodução</SectionTitle>
      <Card>
        <Row icon="play-speed" title="Reproduzir vídeos automaticamente" subtitle="Toca o vídeo assim que ele aparece" value={s.autoplay} onChange={(v) => s.set({ autoplay: v })} testID="toggle-autoplay" />
        <Row icon="volume-off" title="Começar sem som" value={s.startMuted} onChange={(v) => s.set({ startMuted: v })} />
        <Row icon="wifi-strength-1" title="Economia de dados" subtitle="Sem autoplay, sem imagens e sem Wikipédia" value={s.dataSaver} onChange={(v) => s.set({ dataSaver: v })} last />
      </Card>

      <SectionTitle>Interação</SectionTitle>
      <Card>
        <Row icon="vibrate" title="Vibração (haptics)" value={s.haptics} onChange={(v) => s.set({ haptics: v })} />
        <Row icon="motion-pause-outline" title="Reduzir movimento" subtitle="Menos animações e transições" value={s.reduceMotion} onChange={(v) => s.set({ reduceMotion: v })} />
        <Row icon="account-voice" title="Ler cards em voz alta" subtitle="Lê cada card quando ele aparece no feed" value={s.autoSpeak} onChange={(v) => s.set({ autoSpeak: v })} last />
      </Card>

      <SectionTitle>Sua série</SectionTitle>
      <AppText variant="caption" dim style={{ marginTop: -6, marginBottom: 10 }}>O feed usa o conteúdo da sua série, ou os assuntos que você marcar.</AppText>
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

      <SectionTitle>Interesses</SectionTitle>
      <AppText variant="caption" dim style={{ marginTop: -6, marginBottom: 10 }}>Temas marcados aparecem com mais frequência no feed.</AppText>
      <View style={styles.chips}>
        {ROOT_PAGES.map((p) => <Chip key={p.id} label={p.name} active={s.interests.includes(p.id)} onPress={() => s.toggleInterest(p.id)} />)}
      </View>
      <Bouncy scaleTo={0.98} onPress={() => router.push("/onboarding")} style={[styles.redo, { borderColor: c.border }]} accessibilityLabel="Refazer onboarding">
        <Icon name="restart" size={18} color={c.text} />
        <AppText variant="label">Refazer escolha de temas</AppText>
      </Bouncy>

      <SectionTitle>Backup</SectionTitle>
      <AppText variant="caption" dim style={{ marginTop: -6, marginBottom: 10 }}>Guarde um arquivo com todo o seu progresso para restaurar em outro celular.</AppText>
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

      <SectionTitle>Dados</SectionTitle>
      <Card>
        <Bouncy scaleTo={0.98} style={[styles.row, { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: c.border }]} onPress={() => confirm("Limpar histórico?", "Zera o aprendizado do feed e as estatísticas de quiz. Salvos e curtidos ficam.", () => { lib.clearHistory(); haptic.success(); })}>
          <View style={[styles.rowIcon, { backgroundColor: c.surface2 }]}><Icon name="refresh" size={18} color={c.text} /></View>
          <AppText variant="label" style={{ flex: 1 }}>Limpar histórico do feed</AppText>
        </Bouncy>
        <Bouncy scaleTo={0.98} style={styles.row} onPress={() => confirm("Apagar tudo?", "Remove salvos, curtidos, cadernos, notas, revisão, sequência, recordes e ajustes.", () => { useLibrary.getState().reset(); useProgress.getState().reset(); useReview.getState().reset(); useNotebooks.getState().reset(); usePlanner.getState().reset(); s.reset(); haptic.success(); })}>
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
  times: { padding: space.md, borderTopWidth: StyleSheet.hairlineWidth },
  redo: { flexDirection: "row", alignItems: "center", gap: 8, alignSelf: "flex-start", paddingHorizontal: 14, paddingVertical: 10, borderRadius: radius.pill, borderWidth: 1, marginTop: 12 },
});
