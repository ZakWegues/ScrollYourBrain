import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { planReminders, REMINDER_IDS, type ReminderInfo } from "./reminders";

const CHANNEL = "daily-reminder";
/** The repeating reminder of older versions; cancelled when rescheduling. */
const LEGACY_ID = "syb-daily-reminder";

export const remindersSupported = Platform.OS !== "web";

Notifications.setNotificationHandler({
  handleNotification: async () => ({ shouldShowBanner: true, shouldShowList: true, shouldPlaySound: false, shouldSetBadge: false }),
});

/** Asks for permission if needed. Returns whether notifications can be shown. */
export async function ensurePermission(): Promise<boolean> {
  if (!remindersSupported) return false;
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync(CHANNEL, { name: "Lembrete diário", importance: Notifications.AndroidImportance.DEFAULT });
  }
  const current = await Notifications.getPermissionsAsync();
  if (current.granted) return true;
  const asked = await Notifications.requestPermissionsAsync();
  return asked.granted;
}

/**
 * (Re)schedules the reminders: the daily one at `minutes` (minutes after midnight, or null to cancel) and the evening
 * warning when the streak is at stake. The text reflects today's plan, so the app refreshes them on launch and as you study.
 */
export async function scheduleReminder(minutes: number | null, info: ReminderInfo): Promise<void> {
  if (!remindersSupported) return;
  await Promise.all([LEGACY_ID, ...REMINDER_IDS].map((id) => Notifications.cancelScheduledNotificationAsync(id).catch(() => {})));
  if (minutes === null) return;
  for (const r of planReminders(new Date(), minutes, info)) {
    await Notifications.scheduleNotificationAsync({
      identifier: r.id,
      content: { title: r.title, body: r.body },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: r.at, channelId: CHANNEL },
    });
  }
}

export const formatTime = (minutes: number) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
