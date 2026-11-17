import { describe, expect, it } from "@jest/globals";
import { planReminders, REMINDER_IDS } from "@/lib/reminders";

const info = { streak: 4, goal: 10, count: 2, due: 3 };
const morning = new Date(2026, 10, 17, 9, 0);
const night = new Date(2026, 10, 17, 22, 0);

describe("planReminders", () => {
  it("today's reminder carries today's plan; the next days get a generic one", () => {
    const r = planReminders(morning, 19 * 60, info);
    const daily = r.filter((x) => x.id.startsWith("syb-reminder"));
    expect(daily).toHaveLength(3);
    expect(daily[0].at.getDate()).toBe(17);
    expect(daily[0].at.getHours()).toBe(19);
    expect(daily[0].body).toBe("Hoje: 3 revisões e 8 cards da meta.");
    expect(daily[0].title).toMatch(/4 dias seguidos/);
    expect(daily[1].at.getDate()).toBe(18);
    expect(daily[2].at.getDate()).toBe(19);
  });

  it("skips today once its time has passed or the goal is done", () => {
    expect(planReminders(night, 19 * 60, info)[0].at.getDate()).toBe(18);
    expect(planReminders(morning, 19 * 60, { ...info, count: 10 })[0].at.getDate()).toBe(18);
  });

  it("warns at 21:00 when a streak would be lost, not when the goal is done or there is no streak", () => {
    const evening = planReminders(morning, 18 * 60, info).find((x) => x.id === "syb-evening");
    expect(evening?.at.getHours()).toBe(21);
    expect(evening?.body).toBe("Faltam 8 cards. Dá tempo!");
    expect(planReminders(morning, 18 * 60, { ...info, count: 10 }).some((x) => x.id === "syb-evening")).toBe(false);
    expect(planReminders(morning, 18 * 60, { ...info, streak: 0 }).some((x) => x.id === "syb-evening")).toBe(false);
    expect(planReminders(night, 18 * 60, info).some((x) => x.id === "syb-evening")).toBe(false);
    // A daily reminder at 20:30 is close enough: no second ping.
    expect(planReminders(morning, 20 * 60 + 30, info).some((x) => x.id === "syb-evening")).toBe(false);
  });

  it("talks about the exam in its last week", () => {
    const r = planReminders(morning, 19 * 60, { ...info, examIn: 3, examTitle: "Prova de Bio" });
    expect(r[0].title).toBe("Prova de Bio em 3 dias 📅");
  });

  it("only uses ids it knows how to cancel", () => {
    for (const r of planReminders(morning, 18 * 60, info)) expect(REMINDER_IDS).toContain(r.id);
  });
});
