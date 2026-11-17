import { describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { MultiOptions } from "@/components/MultiOptions";
import { OpenAnswer } from "@/components/OpenAnswer";
import { QuizOptions } from "@/components/QuizOptions";
import type { MultiItem, OpenItem, QuizItem } from "@/feed/types";

const quiz: QuizItem = { id: "cq1", kind: "quiz", pageId: "funcoes", title: "t", tags: [], question: "?", options: ["Alfa", "Beta", "Gama", "Delta"], answer: 2, explanation: "Gama é a certa." };
const multi: MultiItem = { id: "cm1", kind: "multi", pageId: "funcoes", title: "t", tags: [], question: "?", options: ["Um", "Dois", "Três", "Quatro"], answers: [1, 3], explanation: "Pares." };
const open: OpenItem = {
  id: "co1", kind: "open", pageId: "biologia", title: "t", tags: [], question: "Por quê?", model: "Resposta-modelo completa.",
  points: [
    { label: "Evaporação", terms: ["evapor"] },
    { label: "Condensação", terms: ["condens"] },
  ],
};

/** Text of every option button, in the order shown. */
const shownOptions = (prefix: string) =>
  screen.getAllByTestId(new RegExp(`^${prefix}-\\d$`)).map((n) => (n.props.accessibilityLabel as string).replace(/^Opção [A-E]: /, ""));

describe("QuizOptions", () => {
  it("reports the item's own index whatever order the options are shown in", async () => {
    const onPick = jest.fn();
    await render(<QuizOptions item={quiz} picked={null} onPick={onPick} />);
    const shown = shownOptions("option");
    expect([...shown].sort()).toEqual([...quiz.options].sort());
    await fireEvent.press(screen.getByTestId(`option-${shown.indexOf("Gama")}`));
    expect(onPick).toHaveBeenCalledWith(2);
  });

  it("after answering, names the letter where the right option actually is", async () => {
    await render(<QuizOptions item={quiz} picked={0} onPick={() => {}} />);
    const letter = "ABCD"[shownOptions("option").indexOf("Gama")];
    expect(screen.getByText(`Quase! Resposta certa: ${letter}`)).toBeTruthy();
    expect(screen.getByText("Gama é a certa.")).toBeTruthy();
  });

  it("shows a new order on different mounts (not always the same)", async () => {
    const orders = new Set<string>();
    for (let i = 0; i < 12; i++) {
      const r = await render(<QuizOptions item={quiz} picked={null} onPick={() => {}} />);
      orders.add(shownOptions("option").join("|"));
      await r.unmount();
    }
    expect(orders.size).toBeGreaterThan(1);
  });
});

describe("MultiOptions", () => {
  it("confirms the marked options (item indexes, sorted) and grades them", async () => {
    const onConfirm = jest.fn();
    await render(<MultiOptions item={multi} picked={null} onConfirm={onConfirm} />);
    const shown = shownOptions("multi-option");
    await fireEvent.press(screen.getByTestId(`multi-option-${shown.indexOf("Quatro")}`));
    await fireEvent.press(screen.getByTestId(`multi-option-${shown.indexOf("Dois")}`));
    await fireEvent.press(screen.getByText("Confirmar (2)"));
    expect(onConfirm).toHaveBeenCalledWith([1, 3]);
  });

  it("does nothing when confirming with nothing marked", async () => {
    const onConfirm = jest.fn();
    await render(<MultiOptions item={multi} picked={null} onConfirm={onConfirm} />);
    await fireEvent.press(screen.getByText("Confirmar"));
    expect(onConfirm).not.toHaveBeenCalled();
  });

  it("explains a partial answer", async () => {
    await render(<MultiOptions item={multi} picked={[1, 0]} onConfirm={() => {}} />);
    expect(screen.getByTestId("multi-result").props.children).toMatch(/1 de 2 certas e 1 errada/);
  });

  it("praises the exact set", async () => {
    await render(<MultiOptions item={multi} picked={[1, 3]} onConfirm={() => {}} />);
    expect(screen.getByTestId("multi-result").props.children).toMatch(/Mandou bem/);
  });
});

describe("OpenAnswer", () => {
  it("ticks the key points found in the text and reports the self-grade", async () => {
    const onGraded = jest.fn();
    await render(<OpenAnswer item={open} onGraded={onGraded} />);
    await fireEvent.changeText(screen.getByTestId("open-input"), "A água evapora quando aquece.");
    await fireEvent.press(screen.getByText("Corrigir minha resposta"));
    expect(screen.getByTestId("open-model")).toBeTruthy();
    expect(screen.getByText("Pontos-chave · 1 de 2 no seu texto")).toBeTruthy();
    expect(screen.getByTestId("open-point-0").props.accessibilityState).toMatchObject({ checked: true });
    expect(screen.getByTestId("open-point-1").props.accessibilityState).toMatchObject({ checked: false });
    await fireEvent.press(screen.getByTestId("open-point-1"));
    expect(screen.getByTestId("open-point-1").props.accessibilityState).toMatchObject({ checked: true });
    await fireEvent.press(screen.getByTestId("open-grade-partial"));
    expect(onGraded).toHaveBeenCalledWith("partial", "A água evapora quando aquece.");
    await fireEvent.press(screen.getByTestId("open-grade-right"));
    expect(onGraded).toHaveBeenCalledTimes(1);
  });

  it("lets you just see the answer without writing", async () => {
    await render(<OpenAnswer item={open} onGraded={() => {}} />);
    await fireEvent.press(screen.getByTestId("open-skip"));
    expect(screen.getByTestId("open-model")).toBeTruthy();
  });
});

describe("Collapsible", () => {
  it("shows the summary closed and the content once opened", async () => {
    await render(
      <Collapsible id="t-collapse" title="Seção" summary="resumo">
        <Text>conteúdo</Text>
      </Collapsible>,
    );
    expect(screen.getByText("resumo")).toBeTruthy();
    expect(screen.queryByText("conteúdo")).toBeNull();
    await fireEvent.press(screen.getByTestId("section-t-collapse"));
    expect(screen.getByText("conteúdo")).toBeTruthy();
  });
});
