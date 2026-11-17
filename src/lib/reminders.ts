/** What the reminders know about the student when they are (re)scheduled. */
export interface ReminderInfo {
  streak: number;
  goal: number;
  /** Cards studied today. */
  count: number;
  /** Review cards due now. */
  due: number;
  /** Days until the next exam, if any. */
  examIn?: number;
  examTitle?: string;
}

export interface PlannedReminder {
  id: string;
  at: Date;
  title: string;
  body: string;
}

/** Evening warning time: 21:00, when the day's goal is still open and a streak is at stake. */
const EVENING = 21 * 60;
/** How many days ahead to keep reminders, so they still come if the app is not opened for a while. */
const AHEAD = 3;

const at = (base: Date, dayOffset: number, minutes: number) => {
  const d = new Date(base);
  d.setDate(d.getDate() + dayOffset);
  d.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
  return d;
};

function todayText(i: ReminderInfo): { title: string; body: string } {
  const left = Math.max(0, i.goal - i.count);
  const parts: string[] = [];
  if (i.due > 0) parts.push(`${i.due} ${i.due === 1 ? "revisão" : "revisões"}`);
  if (left > 0) parts.push(`${left} cards da meta`);
  const plan = parts.length ? `Hoje: ${parts.join(" e ")}.` : "Seu dia já tem missões esperando.";
  if (i.examIn !== undefined && i.examIn >= 1 && i.examIn <= 7) return { title: `${i.examTitle ?? "Prova"} em ${i.examIn} ${i.examIn === 1 ? "dia" : "dias"} 📅`, body: `${plan} O plano da reta final está pronto.` };
  if (i.streak >= 2) return { title: `${i.streak} dias seguidos. Bora pro ${i.streak + 1}º? 🔥`, body: plan };
  if (i.streak === 1) return { title: "Ontem você estudou. Hoje também? 🔥", body: plan };
  return { title: "Hora de estudar 🧠", body: `${plan} Poucos minutos já contam.` };
}

/**
 * The reminders to schedule from `now`: the daily one at `minutes` for the next days (today only if its time has not
 * passed and the goal is still open), with today's text built from the plan, plus an evening warning when a streak
 * would be lost.
 */
export function planReminders(now: Date, minutes: number, i: ReminderInfo): PlannedReminder[] {
  const out: PlannedReminder[] = [];
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const goalDone = i.count >= i.goal;
  const startToday = !goalDone && minutes > nowMin;
  for (let k = 0; k < AHEAD; k++) {
    const offset = startToday ? k : k + 1;
    const text = offset === 0 ? todayText(i) : { title: "Hora de estudar 🧠", body: `Sua meta de ${i.goal} cards e as missões do dia estão te esperando.` };
    out.push({ id: `syb-reminder-${k}`, at: at(now, offset, minutes), ...text });
  }
  if (!goalDone && i.streak >= 1 && nowMin < EVENING && EVENING - minutes >= 60) {
    const left = i.goal - i.count;
    out.push({
      id: "syb-evening",
      at: at(now, 0, EVENING),
      title: `Sua sequência de ${i.streak} ${i.streak === 1 ? "dia" : "dias"} acaba hoje ⏳`,
      body: `Faltam ${left} ${left === 1 ? "card" : "cards"}. Dá tempo!`,
    });
  }
  return out;
}

/** Every id this module may schedule, so all of them can be cancelled before rescheduling. */
export const REMINDER_IDS = [...Array.from({ length: AHEAD }, (_, k) => `syb-reminder-${k}`), "syb-evening"];
