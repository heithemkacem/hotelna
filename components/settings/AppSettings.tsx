import Ionicons from "@expo/vector-icons/Ionicons";
import { Settings, StyleSheet, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { SettingsLinks } from "./SettingsLinks";

export function AppSettings() {
  const theme = useColorScheme() ?? "dark";

  return (
    <ThemedView style={[styles.container]}>
      <ThemedText type="large" style={{ paddingVertical: 10 }}>
        App Settings:
      </ThemedText>
      <SettingsLinks title="Contact Us" onPress={() => console.log("aaaaa")} />
      <SettingsLinks
        title="Contact Support"
        onPress={() => console.log("aaaaa")}
      />
      <SettingsLinks title="Feedback" onPress={() => console.log("aaaaa")} />
      <SettingsLinks title="Rate Us" onPress={() => console.log("aaaaa")} />
      <SettingsLinks
        title="Share an idea"
        onPress={() => console.log("aaaaa")}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 10,
    marginBottom: 8,
  },

  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
