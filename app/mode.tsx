import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { toast } from "@/components/Toast";
import { AppText, Bouncy, Chip, GradientButton, Icon, PageAvatar, Segmented, type IconName } from "@/components/ui";
import { ENEM_AREAS, MONTHS, SCHOOL_SUBJECTS, TOPICS, itemsForTopics, topicsWhere, type Bimestre, type Serie } from "@/data/curriculum";
import { MACETES } from "@/data/macetes";
import { getPage } from "@/data/pages";
import { useExamScope } from "@/feed/examPool";
import { createRng } from "@/feed/sources/generators";
import type { QuizItem, StudyItem } from "@/feed/types";
import { useViewer } from "@/feed/viewer";
import { haptic } from "@/lib/haptics";
import { addDays } from "@/lib/planner";
import { dayKey } from "@/lib/streak";
import { MODE_INFO, isComplete, isCustom, modeItems, modeKey, modeTitle, modeTopics, type ModeConfig, type ModeKind } from "@/lib/modes";
import { useLibrary } from "@/store/library";
import { useModes } from "@/store/modes";
import { usePlanner } from "@/store/planner";
import { useReview } from "@/store/review";
import { useSettings } from "@/store/settings";
import { fonts, radius, space, TOUCH, useColors } from "@/theme";

const shuffled = <T,>(list: T[]) => {
  const rng = createRng(Date.now() & 0xffffffff);
  return [...list].map((x) => [rng(), x] as const).sort((a, b) => a[0] - b[0]).map(([, x]) => x);
};

function parseConfig(c?: string, kind?: string): ModeConfig | null {
  if (c) {
    try {
      return JSON.parse(c) as ModeConfig;
    } catch {
      return null;
    }
  }
  return kind && kind in MODE_INFO ? { kind: kind as ModeKind } : null;
}

export default function ModeScreen() {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ kind?: string; c?: string }>();
  const defaultSerie = useSettings((s) => s.serie);
  const [config, setConfig] = useState<ModeConfig>(() => {
    const parsed = parseConfig(params.c, params.kind) ?? { kind: "enem" };
    return MODE_INFO[parsed.kind].perSubject && !parsed.serie ? { ...parsed, serie: defaultSerie ?? 1 } : parsed;
  });
  // Saved or recent configs open straight on the plan; new ones (and empty custom ones) start on the setup.
  const [planning, setPlanning] = useState(() => (!!params.c && isComplete(config)) || (!MODE_INFO[config.kind].perSubject && !isCustom(config)));
  const info = MODE_INFO[config.kind];
  const back = () => (router.canGoBack() ? router.back() : router.replace("/modes"));

  return (
    <View style={{ flex: 1, backgroundColor: c.bg }}>
      {planning && isComplete(config) ? (
        <Plan
          config={config}
          onChange={setConfig}
          onEdit={info.perSubject || isCustom(config) ? () => setPlanning(false) : undefined}
          onCustomize={() => {
            setConfig({ kind: config.kind, topicIds: modeTopics(config).map((t) => t.id) });
            setPlanning(false);
          }}
        />
      ) : (
        <Setup config={config} onChange={setConfig} onDone={() => setPlanning(true)} />
      )}
      <View style={[styles.top, { top: insets.top + space.xs }]} pointerEvents="box-none">
        <Bouncy onPress={back} style={[styles.iconBtn, styles.round]} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={28} color="#fff" />
        </Bouncy>
      </View>
    </View>
  );
}

function Setup({ config, onChange, onDone }: { config: ModeConfig; onChange: (c: ModeConfig) => void; onDone: () => void }) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const info = MODE_INFO[config.kind];
  const topics = config.subject && config.serie ? topicsWhere({ subjects: [config.subject], series: [config.serie] }) : [];
  const ready = isComplete(config);
  const custom = isCustom(config);
  const toggleCustom = (on: boolean) => {
    if (on === custom) return;
    if (on) onChange({ kind: config.kind, topicIds: isComplete(config) ? modeTopics(config).map((t) => t.id) : [] });
    else onChange({ kind: config.kind, serie: useSettings.getState().serie ?? 1 });
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAwareScrollView bottomOffset={96} contentContainerStyle={{ paddingTop: insets.top + 64, paddingHorizontal: space.lg, paddingBottom: insets.bottom + 120 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.setupHead}>
          <LinearGradient colors={info.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.setupIcon}>
            <Icon name={info.icon as IconName} size={30} color="#fff" />
          </LinearGradient>
          <View style={{ flex: 1 }}>
            <AppText variant="title">{info.title}</AppText>
            <AppText dim>{info.description}</AppText>
          </View>
        </View>

        <View style={{ marginTop: space.xl }}>
          <Segmented<string>
            fill
            value={custom ? "custom" : "one"}
            onChange={(v) => toggleCustom(v === "custom")}
            options={[{ value: "one", label: info.perSubject ? "Uma matéria" : "Padrão" }, { value: "custom", label: "Personalizar" }]}
          />
        </View>

        {custom ? (
          <CustomSetup config={config} onChange={onChange} />
        ) : (
        <>
        <AppText variant="headline" style={styles.label}>Matéria</AppText>
        <View style={styles.chips}>
          {SCHOOL_SUBJECTS.map((s) => (
            <Chip key={s} label={getPage(s).name} active={config.subject === s} onPress={() => onChange({ ...config, subject: s, topicId: undefined })} />
          ))}
        </View>

        <AppText variant="headline" style={styles.label}>Série</AppText>
        <Segmented<string>
          fill
          value={String(config.serie ?? 1)}
          onChange={(v) => onChange({ ...config, serie: Number(v) as Serie, topicId: undefined })}
          options={[1, 2, 3].map((n) => ({ value: String(n), label: `${n}º ano` }))}
        />

        {config.kind === "bimestral" && (
          <>
            <AppText variant="headline" style={styles.label}>Bimestre</AppText>
            <Segmented<string>
              fill
              value={String(config.bimestre ?? "")}
              onChange={(v) => onChange({ ...config, bimestre: Number(v) as Bimestre })}
              options={[1, 2, 3, 4].map((n) => ({ value: String(n), label: `${n}º` }))}
            />
          </>
        )}

        {config.kind === "mensal" && (
          <>
            <AppText variant="headline" style={styles.label}>Mês da prova</AppText>
            <View style={styles.chips}>
              {MONTHS.map((m) => <Chip key={m.month} label={m.name} active={config.month === m.month} onPress={() => onChange({ ...config, month: m.month })} />)}
            </View>
          </>
        )}

        {config.kind === "atividade" && (
          <>
            <AppText variant="headline" style={styles.label}>Assunto</AppText>
            {!config.subject && <AppText dim>Escolha a matéria para ver os assuntos.</AppText>}
            {topics.map((t) => {
              const on = config.topicId === t.id;
              return (
                <Bouncy key={t.id} onPress={() => onChange({ ...config, topicId: t.id })} scaleTo={0.98} style={[styles.topicPick, { borderColor: on ? c.accent : c.border, backgroundColor: on ? "rgba(139,92,246,0.14)" : c.surface }]} accessibilityRole="radio" accessibilityState={{ selected: on }}>
                  <Icon name={on ? "radiobox-marked" : "radiobox-blank"} size={22} color={on ? c.accent : c.textDim} />
                  <View style={{ flex: 1 }}>
                    <AppText variant="label">{t.name}</AppText>
                    <AppText variant="caption" dim>{t.bimestre}º bimestre</AppText>
                  </View>
                </Bouncy>
              );
            })}
          </>
        )}

        </>
        )}

        <AppText variant="caption" dim style={{ marginTop: space.lg }}>
          A ordem dos conteúdos segue a sequência mais comum das escolas; a sua pode variar um pouco.
        </AppText>
      </KeyboardAwareScrollView>
      <View style={[styles.footer, { paddingBottom: insets.bottom + space.lg, backgroundColor: c.bg }]}>
        <GradientButton label={ready ? "Montar meu plano" : "Complete as escolhas"} icon="arrow-right" onPress={() => (ready ? onDone() : haptic.error())} style={{ opacity: ready ? 1 : 0.45 }} />
      </View>
    </View>
  );
}

const SERIES: Serie[] = [1, 2, 3];

/** Pick several subjects, séries and the exact topics for a custom exam. */
function CustomSetup({ config, onChange }: { config: ModeConfig; onChange: (c: ModeConfig) => void }) {
  const c = useColors();
  const chosen = useMemo(() => new Set(config.topicIds ?? []), [config.topicIds]);
  const [subjects, setSubjects] = useState<string[]>(() => {
    const fromTopics = [...new Set((config.topicIds ?? []).map((id) => TOPICS.find((t) => t.id === id)?.subject).filter((x): x is string => !!x))];
    return fromTopics.length ? fromTopics : [];
  });
  const [series, setSeries] = useState<Serie[]>(() => {
    const fromTopics = [...new Set((config.topicIds ?? []).map((id) => TOPICS.find((t) => t.id === id)?.serie).filter((x): x is Serie => !!x))];
    return fromTopics.length ? fromTopics : [useSettings.getState().serie ?? 1];
  });
  const myTopics = useSettings((s) => s.myTopics);
  const setIds = (ids: Iterable<string>) => onChange({ ...config, topicIds: [...new Set(ids)] });
  const toggleTopic = (id: string) => {
    haptic.select();
    const next = new Set(chosen);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setIds(next);
  };
  const toggleSubject = (s: string) => {
    haptic.select();
    if (subjects.includes(s)) {
      setSubjects(subjects.filter((x) => x !== s));
      setIds([...chosen].filter((id) => TOPICS.find((t) => t.id === id)?.subject !== s));
    } else {
      setSubjects([...subjects, s]);
      // A newly picked subject starts with all its topics from the chosen séries.
      setIds([...chosen, ...topicsWhere({ subjects: [s], series }).map((t) => t.id)]);
    }
  };
  const toggleSerie = (n: Serie) => {
    haptic.select();
    const next = series.includes(n) ? series.filter((x) => x !== n) : [...series, n].sort();
    if (next.length === 0) return;
    setSeries(next);
    const allowed = new Set(topicsWhere({ subjects, series: next }).map((t) => t.id));
    const added = next.filter((x) => !series.includes(x));
    setIds([...[...chosen].filter((id) => allowed.has(id)), ...topicsWhere({ subjects, series: added }).map((t) => t.id)]);
  };
  const useMine = () => {
    const ids = myTopics ?? topicsWhere({ series: [useSettings.getState().serie ?? 1] }).map((t) => t.id);
    const list = TOPICS.filter((t) => ids.includes(t.id));
    setSubjects([...new Set(list.map((t) => t.subject))]);
    setSeries([...new Set(list.map((t) => t.serie))].sort() as Serie[]);
    setIds(ids);
    haptic.success();
  };

  return (
    <>
      <View style={[styles.chips, { marginTop: space.lg }]}>
        <Chip icon="school-outline" label="Usar os assuntos da minha escola" onPress={useMine} />
      </View>

      <AppText variant="headline" style={styles.label}>Matérias</AppText>
      <View style={styles.chips}>
        {SCHOOL_SUBJECTS.map((s) => <Chip key={s} label={getPage(s).name} active={subjects.includes(s)} onPress={() => toggleSubject(s)} />)}
      </View>

      <AppText variant="headline" style={styles.label}>Séries</AppText>
      <View style={styles.chips}>
        {SERIES.map((n) => <Chip key={n} label={`${n}º ano`} active={series.includes(n)} onPress={() => toggleSerie(n)} />)}
      </View>

      <View style={[styles.sectionHead, { marginTop: space.xl }]}>
        <AppText variant="headline">Assuntos</AppText>
        <AppText variant="caption" dim>{chosen.size} marcados</AppText>
      </View>
      {subjects.length === 0 && <AppText dim>Escolha uma ou mais matérias.</AppText>}
      {subjects.map((s) => {
        const list = topicsWhere({ subjects: [s], series }).sort((a, b) => a.serie - b.serie || a.bimestre - b.bimestre);
        const count = list.filter((t) => chosen.has(t.id)).length;
        const all = count === list.length && list.length > 0;
        return (
          <View key={s} style={[styles.customCard, { backgroundColor: c.surface, borderColor: c.border }]}>
            <View style={styles.customHead}>
              <PageAvatar pageId={s} size={28} />
              <AppText variant="label" style={{ flex: 1 }}>{getPage(s).name}</AppText>
              <Bouncy onPress={() => setIds(all ? [...chosen].filter((id) => !list.some((t) => t.id === id)) : [...chosen, ...list.map((t) => t.id)])} style={styles.allBtn} accessibilityLabel={all ? `Desmarcar ${getPage(s).name}` : `Marcar todos de ${getPage(s).name}`}>
                <AppText variant="caption" style={{ color: c.accent2 }}>{all ? "Desmarcar" : "Marcar todos"}</AppText>
              </Bouncy>
            </View>
            {list.map((t) => {
              const on = chosen.has(t.id);
              return (
                <Bouncy key={t.id} onPress={() => toggleTopic(t.id)} scaleTo={0.98} style={[styles.customRow, { borderColor: c.border }]} accessibilityRole="checkbox" accessibilityState={{ checked: on }} testID={`custom-topic-${t.id}`}>
                  <Icon name={on ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} size={22} color={on ? c.accent : c.textMute} />
                  <View style={{ flex: 1 }}>
                    <AppText style={{ color: on ? c.text : c.textDim }} numberOfLines={2}>{t.name}</AppText>
                    <AppText variant="caption" dim>{t.serie}º ano · {t.bimestre}º bim</AppText>
                  </View>
                </Bouncy>
              );
            })}
          </View>
        );
      })}

      <AppText variant="headline" style={styles.label}>Nome (opcional)</AppText>
      <TextInput
        value={config.name ?? ""}
        onChangeText={(name) => onChange({ ...config, name })}
        placeholder="Ex.: Prova de sexta"
        placeholderTextColor={c.textMute}
        maxLength={40}
        style={[styles.nameInput, { color: c.text, borderColor: c.border, backgroundColor: c.surface, fontFamily: fonts.body }]}
        testID="custom-name"
      />
    </>
  );
}

function Plan({ config, onChange, onEdit, onCustomize }: { config: ModeConfig; onChange: (c: ModeConfig) => void; onEdit?: () => void; onCustomize: () => void }) {
  const c = useColors();
  const insets = useSafeAreaInsets();
  const info = MODE_INFO[config.kind];
  const { title, subtitle } = modeTitle(config);
  const custom = useLibrary((s) => s.customItems);
  const mastered = useModes((s) => s.mastered);
  const topics = useMemo(() => modeTopics(config), [config]);
  const items = useMemo(() => modeItems(config, custom), [config, custom]);
  const quizzes = useMemo(() => items.filter((i): i is QuizItem => i.kind === "quiz"), [items]);
  const openViewer = useViewer((s) => s.open);
  const setScope = useExamScope((s) => s.set);
  const [tip] = useState(() => MACETES[Math.floor((Date.now() / 1000) % MACETES.length)]);
  const doneCount = topics.filter((t) => mastered[t.id]).length;
  const customMode = isCustom(config);
  const savedKey = modeKey(config);
  const isSaved = useModes((s) => s.saved.some((x) => modeKey(x) === savedKey));

  useEffect(() => {
    useModes.getState().remember(config);
  }, [config]);

  const study = (list: StudyItem[], heading: string) => {
    if (list.length === 0) return toast({ message: "Ainda não há cards aqui", icon: "information-outline" });
    openViewer(shuffled(list), 0, heading);
    router.push("/viewer");
  };

  const review = () => {
    const added = items.filter((i) => useReview.getState().add(i)).length;
    haptic.success();
    toast({ message: added ? `${added} cards entraram na revisão` : "Esses cards já estão na sua revisão", icon: "history" });
    router.push("/review");
  };

  const simulate = () => {
    if (quizzes.length < 3) return toast({ message: "Poucas questões aqui. Estude pelo feed ou escolha um escopo maior.", icon: "information-outline" });
    setScope({ key: modeKey(config), title, subtitle, quizzes, count: info.examCount, secondsPerQuestion: info.secondsPerQuestion });
    router.push({ pathname: "/exam", params: { mode: "1" } });
  };

  const schedule = () => {
    const subjects = config.subject ? [config.subject] : [...new Set(topics.map((t) => t.subject))];
    usePlanner.getState().save({ title: `${title}${subtitle ? ` (${subtitle})` : ""}`, date: dayKey(addDays(new Date(), 14)), pageIds: subjects });
    toast({ message: "Prova adicionada. Ajuste a data no calendário.", icon: "calendar-check", tone: "success" });
    router.push("/planner");
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + space.xxl }} showsVerticalScrollIndicator={false}>
      <View style={[styles.hero, { paddingTop: insets.top + 60 }]}>
        <LinearGradient colors={[info.colors[0], info.colors[1], c.bg]} locations={[0, 0.6, 1]} style={StyleSheet.absoluteFill} />
        <View style={styles.heroIcon}>
          <Icon name={info.icon as IconName} size={36} color="#fff" />
        </View>
        <AppText variant="title" style={styles.heroTitle}>{title}</AppText>
        <AppText variant="label" style={{ color: "rgba(255,255,255,0.88)", textAlign: "center" }}>{subtitle}</AppText>
        <AppText variant="caption" style={{ color: "rgba(255,255,255,0.8)", marginTop: space.sm }}>
          {topics.length} {topics.length === 1 ? "assunto" : "assuntos"} · {items.length} {items.length === 1 ? "card" : "cards"} · {quizzes.length} {quizzes.length === 1 ? "questão" : "questões"}
        </AppText>
        <View style={styles.pills}>
          {onEdit && (
            <Bouncy onPress={onEdit} style={styles.editPill} accessibilityLabel="Mudar escolhas">
              <Icon name="tune-variant" size={16} color="#fff" />
              <AppText variant="caption" style={{ color: "#fff" }}>Mudar</AppText>
            </Bouncy>
          )}
          {!customMode && (
            <Bouncy onPress={onCustomize} style={styles.editPill} accessibilityLabel="Personalizar matérias e assuntos" testID="mode-customize">
              <Icon name="playlist-edit" size={16} color="#fff" />
              <AppText variant="caption" style={{ color: "#fff" }}>Personalizar</AppText>
            </Bouncy>
          )}
          {customMode && (
            <Bouncy
              onPress={() => {
                if (isSaved) useModes.getState().unsave(config);
                else useModes.getState().save(config);
                haptic.success();
                toast({ message: isSaved ? "Removido dos seus modos" : "Salvo em Seus modos", icon: isSaved ? "bookmark-remove-outline" : "bookmark-check", tone: "success" });
              }}
              style={styles.editPill}
              accessibilityLabel={isSaved ? "Remover dos seus modos" : "Salvar este modo"}
              testID="mode-save"
            >
              <Icon name={isSaved ? "bookmark" : "bookmark-outline"} size={16} color="#fff" />
              <AppText variant="caption" style={{ color: "#fff" }}>{isSaved ? "Salvo" : "Salvar"}</AppText>
            </Bouncy>
          )}
        </View>
      </View>

      <View style={{ paddingHorizontal: space.lg }}>
        {config.kind === "enem" && !customMode && (
          <View style={[styles.chips, { marginBottom: space.lg }]}>
            <Chip label="Todas" active={!config.area} onPress={() => onChange({ ...config, area: undefined })} />
            {ENEM_AREAS.map((a) => <Chip key={a.id} label={a.name} active={config.area === a.id} onPress={() => onChange({ ...config, area: a.id })} />)}
          </View>
        )}

        <View style={styles.actions}>
          {[
            { icon: "play-box-multiple", label: "Estudar", sub: "feed do conteúdo", onPress: () => study(items, title), id: "mode-study" },
            { icon: "history", label: "Revisar", sub: "repetição espaçada", onPress: review, id: "mode-review" },
            { icon: "timer-outline", label: "Simulado", sub: `${Math.min(info.examCount, quizzes.length)} ${Math.min(info.examCount, quizzes.length) === 1 ? "questão" : "questões"}`, onPress: simulate, id: "mode-exam" },
          ].map((a) => (
            <Bouncy key={a.id} onPress={a.onPress} scaleTo={0.96} style={[styles.action, { backgroundColor: c.surface, borderColor: c.border }]} accessibilityLabel={a.label} testID={a.id}>
              <Icon name={a.icon as IconName} size={26} color={c.accent2} />
              <AppText variant="label">{a.label}</AppText>
              <AppText variant="caption" dim numberOfLines={1}>{a.sub}</AppText>
            </Bouncy>
          ))}
        </View>

        <View style={styles.sectionHead}>
          <AppText variant="headline">Assuntos</AppText>
          <AppText variant="caption" dim>{doneCount}/{topics.length} dominados</AppText>
        </View>
        <View style={[styles.track, { backgroundColor: c.surface2 }]}>
          <View style={[styles.fill, { width: `${topics.length ? (doneCount / topics.length) * 100 : 0}%`, backgroundColor: c.success }]} />
        </View>
        {topics.slice(0, 60).map((t, i) => {
          const on = !!mastered[t.id];
          const count = itemsForTopics([t.id], custom).length;
          return (
            <Animated.View key={t.id} entering={FadeInDown.delay(Math.min(i, 12) * 30).springify().damping(26).stiffness(280).mass(1)}>
              <View style={[styles.topicRow, { borderColor: c.border }]}>
                <Bouncy onPress={() => { useModes.getState().toggleMastered(t.id); haptic.select(); }} style={styles.check} accessibilityRole="checkbox" accessibilityState={{ checked: on }} accessibilityLabel={`Marcar ${t.name} como dominado`}>
                  <Icon name={on ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} size={26} color={on ? c.success : c.textDim} />
                </Bouncy>
                <Bouncy onPress={() => study(itemsForTopics([t.id], custom), t.name)} scaleTo={0.98} style={styles.topicBody} accessibilityLabel={`Estudar ${t.name}`}>
                  {!config.subject && <PageAvatar pageId={t.subject} size={26} />}
                  <View style={{ flex: 1 }}>
                    <AppText variant="label" style={{ color: on ? c.textDim : c.text }} numberOfLines={2}>{t.name}</AppText>
                    <AppText variant="caption" dim>
                      {!config.subject ? `${getPage(t.subject).name} · ` : ""}{t.serie}º ano · {t.bimestre}º bim · {count} {count === 1 ? "card" : "cards"}
                    </AppText>
                  </View>
                  <Icon name="chevron-right" size={20} color={c.textDim} />
                </Bouncy>
              </View>
            </Animated.View>
          );
        })}
        {topics.length > 60 && <AppText variant="caption" dim style={{ marginTop: space.sm }}>+ {topics.length - 60} assuntos. Use o filtro de área para ver por partes.</AppText>}

        <Bouncy onPress={() => router.push("/page/macetes")} scaleTo={0.98} style={[styles.tip, { borderColor: c.save, backgroundColor: c.surface }]} accessibilityLabel="Abrir macetes de prova">
          <Icon name="lightning-bolt" size={22} color={c.save} />
          <View style={{ flex: 1 }}>
            <AppText variant="caption" style={{ color: c.save }}>MACETE · {tip.title.toUpperCase()}</AppText>
            <AppText style={{ fontSize: 15, lineHeight: 21, marginTop: 2 }}>{tip.kind === "concept" ? tip.takeaway : tip.kind === "flash" ? tip.back : tip.kind === "quiz" ? tip.explanation : tip.title}</AppText>
          </View>
        </Bouncy>

        <Bouncy onPress={schedule} scaleTo={0.98} style={[styles.schedule, { borderColor: c.border }]} accessibilityLabel="Marcar data da prova">
          <Icon name="calendar-plus" size={20} color={c.text} />
          <AppText variant="label" style={{ flex: 1 }}>Marcar a data desta prova</AppText>
          <Icon name="chevron-right" size={20} color={c.textDim} />
        </Bouncy>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  top: { position: "absolute", left: space.sm },
  iconBtn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  round: { borderRadius: TOUCH / 2, backgroundColor: "rgba(0,0,0,0.25)" },
  setupHead: { flexDirection: "row", alignItems: "center", gap: space.md },
  setupIcon: { width: 60, height: 60, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  label: { marginTop: space.xl, marginBottom: space.md },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: space.sm },
  topicPick: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.md, borderRadius: radius.md, borderWidth: 1.5, marginBottom: space.sm },
  footer: { position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: space.lg, paddingTop: space.md },
  hero: { alignItems: "center", paddingHorizontal: space.xl, paddingBottom: space.xl },
  heroIcon: { width: 72, height: 72, borderRadius: 22, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.2)", borderWidth: 2, borderColor: "rgba(255,255,255,0.3)" },
  heroTitle: { color: "#fff", marginTop: space.md, textAlign: "center" },
  pills: { flexDirection: "row", gap: space.sm, marginTop: space.md },
  customCard: { borderRadius: radius.lg, borderWidth: 1, marginBottom: space.md, overflow: "hidden" },
  customHead: { flexDirection: "row", alignItems: "center", gap: space.sm, padding: space.md },
  allBtn: { paddingHorizontal: space.sm, paddingVertical: 6 },
  customRow: { flexDirection: "row", alignItems: "center", gap: space.md, paddingHorizontal: space.md, paddingVertical: 10, borderTopWidth: StyleSheet.hairlineWidth, minHeight: TOUCH },
  nameInput: { height: 50, borderRadius: radius.md, borderWidth: 1, paddingHorizontal: space.md, fontSize: 16 },
  editPill: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: space.md, paddingVertical: 6, borderRadius: radius.pill, backgroundColor: "rgba(0,0,0,0.3)" },
  actions: { flexDirection: "row", gap: space.sm },
  action: { flex: 1, alignItems: "center", gap: 4, paddingVertical: space.lg, paddingHorizontal: space.xs, borderRadius: radius.lg, borderWidth: StyleSheet.hairlineWidth },
  sectionHead: { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", marginTop: space.xl, marginBottom: space.sm },
  track: { height: 6, borderRadius: 3, overflow: "hidden", marginBottom: space.sm },
  fill: { height: 6, borderRadius: 3 },
  topicRow: { flexDirection: "row", alignItems: "center", borderBottomWidth: StyleSheet.hairlineWidth },
  check: { width: TOUCH, height: TOUCH + 8, alignItems: "center", justifyContent: "center" },
  topicBody: { flex: 1, flexDirection: "row", alignItems: "center", gap: space.sm, paddingVertical: space.md },
  tip: { flexDirection: "row", gap: space.md, padding: space.lg, borderRadius: radius.lg, borderWidth: 1, marginTop: space.xl },
  schedule: { flexDirection: "row", alignItems: "center", gap: space.md, padding: space.md, borderRadius: radius.md, borderWidth: 1, marginTop: space.md },
});
