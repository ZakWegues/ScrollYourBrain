import { router } from "expo-router";
import { toast } from "@/components/Toast";
import { weakPool } from "@/lib/weak";
import { useMistakes, pendingMistakes } from "@/store/mistakes";
import { useProgress } from "@/store/progress";
import { useSettings } from "@/store/settings";
import { useExamScope } from "./examPool";
import { createRng } from "./sources/generators";
import { contentForStudent } from "./sources/library";
import { useViewer } from "./viewer";

/** Opens a timed exam made of your weak accounts and pending mistakes. */
export function startWeakExam(): void {
  const { serie, myTopics } = useSettings.getState();
  const quizzes = weakPool({
    log: useProgress.getState().log,
    mistakes: pendingMistakes(useMistakes.getState().items).map((m) => m.item),
    content: contentForStudent(serie, myTopics),
    count: 15,
    rng: createRng(Date.now() & 0xffffffff),
  });
  if (quizzes.length < 5) {
    toast({ message: "Responda mais quizzes no feed para o app achar seus pontos fracos", icon: "information-outline" });
    return;
  }
  useExamScope.getState().set({ key: "weak", title: "Pontos fracos", subtitle: "Onde você mais erra", quizzes, count: 15, secondsPerQuestion: 120 });
  router.push({ pathname: "/exam", params: { mode: "1" } });
}

/** Re-does the questions you got wrong, in the full-screen viewer. */
export function redoMistakes(): void {
  const list = pendingMistakes(useMistakes.getState().items).map((m) => m.item);
  if (list.length === 0) {
    toast({ message: "Nenhum erro pendente. Mandou bem!", icon: "check-circle-outline", tone: "success" });
    return;
  }
  useViewer.getState().open(list, 0, "Caderno de erros");
  router.push("/viewer");
}
