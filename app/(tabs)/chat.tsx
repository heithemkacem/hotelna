import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";

export default function TabThreeScreen() {
  return (
    <MainContainer>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Chat</ThemedText>
      </ThemedView>
      <ThemedText>Here you can chat directly with your hotel</ThemedText>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
