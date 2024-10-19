import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";

export default function TabFourScreen() {
  return (
    <MainContainer>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Setting</ThemedText>
      </ThemedView>
      <ThemedText>Here you can configuire you profile and settings</ThemedText>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
