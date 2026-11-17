import { scheduleReminder } from "@/lib/notifications";
import { daysUntil } from "@/lib/planner";
import type { ReminderInfo } from "@/lib/reminders";
import { currentStreak, dayKey } from "@/lib/streak";
import { usePlanner } from "./planner";
import { useProgress } from "./progress";
import { dueCards, useReview } from "./review";
import { useSettings } from "./settings";

/** Today's numbers, read from the stores, for the reminder texts. */
export function reminderInfo(): ReminderInfo {
  const { days } = useProgress.getState();
  const goal = useSettings.getState().dailyGoal;
  const exam = Object.values(usePlanner.getState().exams)
    .filter((e) => daysUntil(e.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date))[0];
  return {
    streak: currentStreak(days, goal),
    goal,
    count: days[dayKey()] ?? 0,
    due: dueCards(useReview.getState().cards).length,
    examIn: exam ? daysUntil(exam.date) : undefined,
    examTitle: exam?.title,
  };
}

/** Reschedules the reminders with fresh numbers (no-op when they are off or unsupported). */
export function refreshReminders(): Promise<void> {
  return scheduleReminder(useSettings.getState().reminder, reminderInfo()).catch(() => {});
}
