import { Link, Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export default function NotFoundScreen() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Stack.Screen
        options={{
          title: "Oops!",
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? "dark"].background,
          },
        }}
      />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
