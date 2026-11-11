import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Linking, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppText, Bouncy, Icon } from "@/components/ui";
import { WatchView } from "@/components/video/WatchView";
import { watchUrl, YT_ID } from "@/lib/ytEmbed";
import { TOUCH } from "@/theme";

/** Plays a video on YouTube's own page, inside the app. Used when the embedded player is refused. */
export default function Watch() {
  const insets = useSafeAreaInsets();
  const { id = "", vertical, title } = useLocalSearchParams<{ id: string; vertical?: string; title?: string }>();
  const valid = YT_ID.test(id);
  const back = () => (router.canGoBack() ? router.back() : router.replace("/"));
  return (
    <View style={[styles.root, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <StatusBar style="light" />
      <View style={styles.bar}>
        <Bouncy onPress={back} style={styles.btn} accessibilityLabel="Voltar">
          <Icon name="chevron-left" size={30} color="#fff" />
        </Bouncy>
        <AppText variant="label" numberOfLines={1} style={styles.title}>{title || "Vídeo"}</AppText>
        {valid && (
          <Bouncy onPress={() => Linking.openURL(`https://youtu.be/${id}`)} style={styles.btn} accessibilityLabel="Abrir no app do YouTube">
            <Icon name="open-in-new" size={22} color="#fff" />
          </Bouncy>
        )}
      </View>
      {valid ? (
        <WatchView url={watchUrl(id, vertical === "1")} />
      ) : (
        <View style={styles.center}>
          <AppText dim>Vídeo não encontrado.</AppText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#000" },
  bar: { flexDirection: "row", alignItems: "center", paddingHorizontal: 4, gap: 4 },
  btn: { width: TOUCH, height: TOUCH, alignItems: "center", justifyContent: "center" },
  title: { flex: 1, minWidth: 0, color: "#fff" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});
