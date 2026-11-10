import "expo-router/entry";
import { Platform } from "react-native";

if (Platform.OS === "android") {
  // The home-screen widget renders in a headless task, outside the app's React tree.
  /* eslint-disable @typescript-eslint/no-require-imports */
  const { registerWidgetTaskHandler } = require("react-native-android-widget");
  const { widgetTaskHandler } = require("./src/widget/handler");
  /* eslint-enable @typescript-eslint/no-require-imports */
  registerWidgetTaskHandler(widgetTaskHandler);
}
