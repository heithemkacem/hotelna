import React from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { ThemedView } from "../ThemedView";
import { PropsWithChildren } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export function MainContainer({ children }: PropsWithChildren) {
  const bgColor = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.background },
    "background"
  );
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        contentInset={{ top: 20 }} // Adding space to the top
      >
        <ThemedView style={styles.container}>{children}</ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 20,
  },
  container: {
    padding: 20,
  },
});
