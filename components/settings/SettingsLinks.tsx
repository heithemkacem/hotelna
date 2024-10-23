import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export function SettingsLinks({
  onPress,
  title,
}: {
  title: string;
  onPress: () => void;
}) {
  const theme = useColorScheme() ?? "dark";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        { borderColor: Colors[theme ?? "dark"].inputBorder },
      ]}
    >
      <ThemedText type="large" style={{ fontWeight: "bold" }}>
        {title}
      </ThemedText>
      <Ionicons
        name="chevron-forward-outline"
        size={24}
        color={Colors[theme ?? "dark"].icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 48,
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 8,
  },

  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
