import type { ConfigContext, ExpoConfig } from "expo/config";

// CI passes its run number so every APK has a higher versionCode and installs over the previous one.
export default ({ config }: ConfigContext): ExpoConfig =>
  ({
    ...config,
    android: { ...config.android, versionCode: Number(process.env.BUILD_NUMBER) || 1 },
    extra: { ...config.extra, buildNumber: process.env.BUILD_NUMBER ?? "dev" },
  }) as ExpoConfig;
