import { jest } from "@jest/globals";

/* eslint-disable @typescript-eslint/no-require-imports -- jest.mock factories must be synchronous */
// Stores persist through AsyncStorage; tests use the official in-memory mock.
jest.mock("@react-native-async-storage/async-storage", () => require("@react-native-async-storage/async-storage/jest/async-storage-mock"));
// Animations run on the UI thread in the app; tests use Reanimated's own mock.
jest.mock("react-native-reanimated", () => require("react-native-reanimated/mock"));
// Icon fonts need expo-asset at runtime; tests only need a component that renders nothing.
jest.mock("@expo/vector-icons", () => {
  const Icon = Object.assign(() => null, { glyphMap: {} });
  return { MaterialCommunityIcons: Icon };
});
