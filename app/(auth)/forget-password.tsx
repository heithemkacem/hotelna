import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";

export default function ForgetPasswordScreen() {
  return (
    <MainContainer>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sign In</ThemedText>
      </ThemedView>
      <ThemedText>See all the services provided by your hotel.</ThemedText>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
  },
});
