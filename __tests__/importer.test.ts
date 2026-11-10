import { describe, expect, it } from "@jest/globals";
import { parseCards } from "@/lib/importer";

describe("parseCards", () => {
  it("splits semicolon lines and drops a header row", () => {
    const { cards } = parseCards("pergunta;resposta\nCapital da França;Paris\nH2O;Água");
    expect(cards).toEqual([{ front: "Capital da França", back: "Paris" }, { front: "H2O", back: "Água" }]);
  });

  it("reads tab-separated spreadsheet rows", () => {
    expect(parseCards("mitose\tdivisão celular\nmeiose\tgera gametas").cards).toHaveLength(2);
  });

  it("reads P:/R: blocks, including multi-line questions", () => {
    const { cards } = parseCards("P: O que é\nfotossíntese?\nR: Produção de glicose com luz\n\nP: Quem foi Platão?\nR: Filósofo grego");
    expect(cards).toEqual([
      { front: "O que é fotossíntese?", back: "Produção de glicose com luz" },
      { front: "Quem foi Platão?", back: "Filósofo grego" },
    ]);
  });

  it("uses dash separators and reports lines it cannot split", () => {
    const { cards, skipped } = parseCards("Mitocôndria - usina da célula\nlinha sem par");
    expect(cards).toEqual([{ front: "Mitocôndria", back: "usina da célula" }]);
    expect(skipped).toEqual(["linha sem par"]);
  });

  it("accepts separator lines and P:/R: blocks in the same text", () => {
    const { cards, skipped } = parseCards("Capital da França;Paris\nMitocôndria;Organela\nP: Quem escreveu Dom Casmurro?\nR: Machado de Assis");
    expect(cards).toHaveLength(3);
    expect(skipped).toEqual([]);
  });

  it("keeps the answer intact when it also contains the separator", () => {
    expect(parseCards("2 + 2 = 4 = quatro").cards[0]).toEqual({ front: "2 + 2", back: "4 = quatro" });
  });
});
