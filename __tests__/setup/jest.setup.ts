import { jest } from "@jest/globals";

// Stores persist through AsyncStorage; tests use the official in-memory mock.
jest.mock("@react-native-async-storage/async-storage", () => require("@react-native-async-storage/async-storage/jest/async-storage-mock"));
