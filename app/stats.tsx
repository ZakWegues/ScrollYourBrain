import { router } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, Icon, PageAvatar, Segmented, type IconName } from "@/components/ui";
import { getPage } from "@/data/pages";
import { formatDuration, heatmap, summarize } from "@/lib/stats";
import { useProgress } from "@/store/progress";
import { radius, space, TOUCH, useColors } from "@/theme";

type Range = "7" | "30" | "all";

/** One hue, light-to-dark by magnitude (lighter = more on the dark surface). */
const RAMP = ["#2E2350", "#4C3A8F", "#6D52D1", "#9479F5", "#C4B5FD"];
const level = (n: number) => (n <= 0 ? -1 : n < 5 ? 0 : n < 10 ? 1 : n < 20 ? 2 : n < 40 ? 3 : 4);
const fmtDay = (key: string) => new Date(`${key}T12:00:00`).toLocaleDateString("pt-BR", { weekday: "short", day: "numeric", month: "short" });

export default function Stats() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const log = useProgress((s) => s.log);
  const [range, setRange] = useState<Range>("7");
  const summary = useMemo(() => summarize(log, range === "all" ? null : Number(range)), [log, range]);
  const daily = summary.daily.slice(-30);
  const [picked, setPicked] = useState<string | null>(null);
  const [cell, setCell] = useState<{ key: string; studied: number } | null>(null);

  const weeks = 17;
  const contentW = Math.min(width, 640) - space.lg * 2 - space.lg * 2;
  const gap = 3;
  const cellSize = Math.floor((contentW - 22 - gap * (weeks - 1)) / weeks);
  const grid = useMemo(() => heatmap(log, weeks), [log]);
  const maxDay = Math.max(1, ...daily.map((d) => d.studied));
  const pickedDay = daily.find((d) => d.key === picked) ?? daily[daily.length - 1];

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      <View style={[styles.top, { paddingTop: insets.top + space.xs }]}>
        <Bouncy onPress={() => (router.canGoBack() ? router.back() : router.replace("/library"))} style={styles.iconBtn} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color={c.text} />
        </Bouncy>
        <AppText variant="label">Estatísticas</AppText>
        <View style={styles.iconBtn} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: space.lg, paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
        <Segmented<Range>
          fill
          value={range}
          onChange={(r) => { setRange(r); setPicked(null); }}
          options={[{ value: "7", label: "7 dias" }, { value: "30", label: "30 dias" }, { value: "all", label: "Tudo" }]}
        />

        <View style={styles.tiles}>
          <Tile icon="clock-outline" label="Tempo estudado" value={formatDuration(summary.seconds)} />
          <Tile icon="cards-outline" label="Cards estudados" value={String(summary.studied)} />
          <Tile icon="target" label="Precisão nos quizzes" value={summary.accuracy === null ? "—" : `${summary.accuracy}%`} />
          <Tile icon="calendar-check" label="Dias ativos" value={String(summary.activeDays)} />
        </View>

        <Card title="Cards por dia" subtitle={pickedDay ? `${fmtDay(pickedDay.key)} · ${pickedDay.studied} ${pickedDay.studied === 1 ? "card" : "cards"} · ${formatDuration(pickedDay.seconds)}` : undefined}>
          <View style={styles.chart}>
            {[0.5, 1].map((f) => (
              <View key={f} style={[styles.gridLine, { bottom: f * 120, borderColor: c.border }]} />
            ))}
            {daily.map((d) => {
              const on = d.key === (picked ?? daily[daily.length - 1]?.key);
              const h = d.studied > 0 ? Math.max(4, (d.studied / maxDay) * 120) : 2;
              return (
                <Pressable
                  key={d.key}
                  onPress={() => setPicked(d.key)}
                  style={styles.barHit}
                  accessibilityRole="button"
                  accessibilityLabel={`${fmtDay(d.key)}: ${d.studied} cards`}
                >
                  <View style={[styles.bar, { height: h, backgroundColor: d.studied ? (on ? c.accent2 : c.accent) : c.surface2 }]} />
                </Pressable>
              );
            })}
          </View>
          <View style={styles.axis}>
            <AppText variant="caption" dim>{daily[0] ? fmtDay(daily[0].key) : ""}</AppText>
            <AppText variant="caption" dim>hoje</AppText>
          </View>
        </Card>

        <Card title="Por tema" subtitle={summary.topics.length ? "Tempo, cards e precisão em cada tema" : undefined}>
          {summary.topics.length === 0 ? (
            <AppText dim>Estude alguns cards para ver seus temas aqui.</AppText>
          ) : (
            summary.topics.map((t) => (
              <View key={t.pageId} style={[styles.topic, { borderColor: c.border }]}>
                <PageAvatar pageId={t.pageId} size={32} />
                <View style={{ flex: 1 }}>
                  <View style={styles.topicHead}>
                    <AppText variant="label">{getPage(t.pageId).name}</AppText>
                    <AppText variant="caption" dim>{formatDuration(t.seconds)} · {t.studied} {t.studied === 1 ? "card" : "cards"}</AppText>
                  </View>
                  <View style={[styles.track, { backgroundColor: c.surface2 }]}>
                    {t.accuracy !== null && <View style={[styles.fill, { width: `${t.accuracy}%`, backgroundColor: c.accent }]} />}
                  </View>
                  <AppText variant="caption" dim style={{ marginTop: 4 }}>
                    {t.accuracy === null ? "Sem quizzes respondidos" : `${t.accuracy}% de acerto em ${t.answered} ${t.answered === 1 ? "quiz" : "quizzes"}`}
                  </AppText>
                </View>
              </View>
            ))
          )}
        </Card>

        <Card title="Últimos 4 meses" subtitle={cell ? `${fmtDay(cell.key)} · ${cell.studied} ${cell.studied === 1 ? "card" : "cards"}` : "Toque num dia para ver quantos cards estudou"}>
          <View style={styles.heat}>
            <View style={[styles.dayLabels, { gap, width: 22 }]}>
              {["S", "T", "Q", "Q", "S", "S", "D"].map((l, i) => (
                <AppText key={i} variant="caption" dim style={{ height: cellSize, lineHeight: cellSize, fontSize: 10 }}>{i % 2 === 0 ? l : ""}</AppText>
              ))}
            </View>
            {grid.map((week, w) => (
              <View key={w} style={{ gap, marginRight: w < weeks - 1 ? gap : 0 }}>
                {week.map((d, i) => {
                  if (!d) return <View key={i} style={{ width: cellSize, height: cellSize }} />;
                  const lv = level(d.studied);
                  return (
                    <Pressable
                      key={i}
                      onPress={() => setCell(d)}
                      accessibilityLabel={`${fmtDay(d.key)}: ${d.studied} cards`}
                      style={{ width: cellSize, height: cellSize, borderRadius: 4, backgroundColor: lv < 0 ? c.surface2 : RAMP[lv], borderWidth: cell?.key === d.key ? 1.5 : 0, borderColor: c.text }}
                    />
                  );
                })}
              </View>
            ))}
          </View>
          <View style={styles.legend}>
            <AppText variant="caption" dim>Menos</AppText>
            {[c.surface2, ...RAMP].map((col) => <View key={col} style={[styles.legendCell, { backgroundColor: col }]} />)}
            <AppText variant="caption" dim>Mais</AppText>
          </View>
        </Card>

        <View style={[styles.extra, { borderColor: c.border }]}>
          <Mini icon="history" label="Revisões" value={summary.reviews} />
          <Mini icon="timer-outline" label="Provas" value={summary.exams} />
          <Mini icon="bullseye-arrow" label="Sessões de foco" value={summary.focus} />
        </View>
      </ScrollView>
    </View>
  );
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  const c = useColors();
  return (
    <View style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]}>
      <AppText variant="headline">{title}</AppText>
      {subtitle && <AppText variant="caption" dim style={{ marginTop: 2 }}>{subtitle}</AppText>}
      <View style={{ marginTop: space.md }}>{children}</View>
    </View>
  );
}

function Tile({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  const c = useColors();
  return (
    <View style={[styles.tile, { backgroundColor: c.surface, borderColor: c.border }]}>
      <Icon name={icon} size={20} color={c.accent2} />
      <AppText variant="title" style={{ marginTop: space.sm, fontSize: 24, lineHeight: 30 }} numberOfLines={1} adjustsFontSizeToFit>{value}</AppText>
      <AppText variant="caption" dim>{label}</AppText>
    </View>
  );
}

function Mini({ icon, label, value }: { icon: IconName; label: string; value: number }) {
  const c = useColors();
  return (
    <View style={styles.mini}>
      <Icon name={icon} size={18} color={c.textDim} />
      <AppText variant="headline">{value}</AppText>
      <AppText variant="caption" dim numberOfLines={1}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: space.sm, marginBottom: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  tiles: { flexDirection: "row", flexWrap: "wrap", gap: space.sm, marginTop: space.lg },
  tile: { width: "48.8%", flexGrow: 1, padding: space.lg, borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth },
  card: { padding: space.lg, borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth, marginTop: space.md },
  chart: { height: 124, flexDirection: "row", alignItems: "flex-end" },
  gridLine: { position: "absolute", left: 0, right: 0, borderTopWidth: StyleSheet.hairlineWidth, borderStyle: "dashed" },
  barHit: { flex: 1, height: "100%", justifyContent: "flex-end", alignItems: "center", paddingHorizontal: 1 },
  bar: { width: "70%", maxWidth: 22, borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  axis: { flexDirection: "row", justifyContent: "space-between", marginTop: space.sm },
  topic: { flexDirection: "row", gap: space.md, paddingVertical: space.md, borderTopWidth: StyleSheet.hairlineWidth },
  topicHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 },
  track: { height: 6, borderRadius: 3, overflow: "hidden" },
  fill: { height: 6, borderRadius: 3 },
  heat: { flexDirection: "row" },
  dayLabels: {},
  legend: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 4, marginTop: space.md },
  legendCell: { width: 12, height: 12, borderRadius: 3 },
  extra: { flexDirection: "row", marginTop: space.md, borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth, paddingVertical: space.lg },
  mini: { flex: 1, alignItems: "center", gap: 2 },
});
