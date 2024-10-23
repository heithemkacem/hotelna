import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/Colors";

type TitleProps = {
  title: string;
};
const AuthContainer = ({ title }: TitleProps) => {
  const colorScheme = useColorScheme() ?? "dark";
  return (
    <View>
      <ThemedView
        style={[
          styles.titleContainer,
          { backgroundColor: Colors[colorScheme ?? "dark"].primary },
        ]}
      >
        <ThemedText
          style={[styles.title, { color: Colors[colorScheme ?? "dark"].white }]}
          type="meduim"
        >
          {title}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputContainer}></ThemedView>
    </View>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 80,
  },
  inputContainer: {
    position: "absolute",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 50,
    top: 50,
    width: "100%",
  },
  title: {
    top: -17.5,
    fontWeight: "bold",
  },
});
