import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

const TextWithLink = () => {
  return (
    <ThemedView style={styles.signupContainer}>
      <ThemedText>Don't have an account ?</ThemedText>
      <Link href="/sign-up" asChild>
        <Pressable>
          <ThemedText style={{ marginLeft: 5 }} type="link">
            Sign Up
          </ThemedText>
        </Pressable>
      </Link>
    </ThemedView>
  );
};

export default TextWithLink;
const styles = StyleSheet.create({
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },
});
