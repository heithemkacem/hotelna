import Ionicons from "@expo/vector-icons/Ionicons";
import { Settings, StyleSheet, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { SettingsLinks } from "./SettingsLinks";
import { SettingsToggleButton } from "./SettingsToggleButton";

export function NotificationAndAlerts() {
  const theme = useColorScheme() ?? "dark";

  return (
    <ThemedView style={[styles.container]}>
      <ThemedText type="large" style={{ paddingVertical: 10 }}>
        Notification And Alerts:
      </ThemedText>
      <SettingsToggleButton
        title="Notifications"
        onPress={() => console.log("aaaaa")}
      />
      <SettingsToggleButton
        title="Sounds"
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
