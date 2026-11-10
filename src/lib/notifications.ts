import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

const CHANNEL = "daily-reminder";
const REMINDER_ID = "syb-daily-reminder";

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

function message(streak: number, goal: number): { title: string; body: string } {
  if (streak >= 2) return { title: `Não perca seus ${streak} dias seguidos 🔥`, body: `Faltam ${goal} cards para manter a sequência. Bora?` };
  if (streak === 1) return { title: "Ontem você estudou. Hoje também? 🔥", body: `Estude ${goal} cards e comece uma sequência.` };
  return { title: "Hora de estudar 🧠", body: `Só ${goal} cards por dia já fazem diferença. Abra o ScrollYourBrain.` };
}

/**
 * (Re)schedules the daily reminder. `minutes` is minutes after midnight, or null to cancel.
 * The text reflects the streak at scheduling time, so the app refreshes it on every launch.
 */
export async function scheduleReminder(minutes: number | null, streak: number, goal: number): Promise<void> {
  if (!remindersSupported) return;
  await Notifications.cancelScheduledNotificationAsync(REMINDER_ID).catch(() => {});
  if (minutes === null) return;
  await Notifications.scheduleNotificationAsync({
    identifier: REMINDER_ID,
    content: message(streak, goal),
    trigger: { type: Notifications.SchedulableTriggerInputTypes.DAILY, hour: Math.floor(minutes / 60), minute: minutes % 60, channelId: CHANNEL },
  });
}

export const formatTime = (minutes: number) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
