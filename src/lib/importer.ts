export interface ImportedCard {
  front: string;
  back: string;
}

const SEPARATORS = ["\t", ";", " | ", " - ", " — ", " = ", ": "];

const clean = (s: string) => s.replace(/^["'\s]+|["'\s]+$/g, "").replace(/\s+/g, " ").trim();

/**
 * Turns pasted text into flashcards. Accepts, in order of preference:
 * - "P: pergunta" / "R: resposta" blocks (also Q:/A:, Pergunta:/Resposta:)
 * - one card per line split by tab (spreadsheets, Anki export), ";", " | ", " - ", " — ", " = " or ": "
 * Lines that cannot be split are skipped and reported.
 */
export function parseCards(text: string): { cards: ImportedCard[]; skipped: string[] } {
  const lines = text.replace(/\r/g, "").split("\n").map((l) => l.trim()).filter(Boolean);
  const qa = /^(p|q|pergunta|question|frente)\s*[:.)-]\s*(.+)$/i;
  const an = /^(r|a|resposta|answer|verso)\s*[:.)-]\s*(.+)$/i;
  const plain = lines.filter((l) => !qa.test(l) && !an.test(l));

  // Use the separator that splits the most plain lines, so "a - b; c" files stay consistent.
  const best = SEPARATORS.map((s) => [s, plain.filter((l) => l.includes(s)).length] as const).sort((a, b) => b[1] - a[1])[0];
  const sep = best && best[1] > 0 ? best[0] : null;

  const cards: ImportedCard[] = [];
  const skipped: string[] = [];
  let front: string | null = null;

  for (const line of lines) {
    const q = line.match(qa);
    const a = line.match(an);
    if (q) {
      if (front) skipped.push(front);
      front = clean(q[2]);
    } else if (a && front) {
      cards.push({ front, back: clean(a[2]) });
      front = null;
    } else if (front) {
      // A question that continues on the next line.
      front = `${front} ${clean(line)}`;
    } else if (sep && line.includes(sep)) {
      const idx = line.indexOf(sep);
      const f = clean(line.slice(0, idx));
      const b = clean(line.slice(idx + sep.length));
      if (f && b) cards.push({ front: f, back: b });
      else skipped.push(line);
    } else {
      skipped.push(line);
    }
  }
  if (front) skipped.push(front);
  // A header row like "pergunta;resposta" is not a card.
  if (cards.length > 1 && /^(pergunta|frente|front|question|termo)$/i.test(cards[0].front)) cards.shift();
  return { cards, skipped };
}
