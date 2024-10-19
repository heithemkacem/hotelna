import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

type TitleProps = {
  title: string;
};
const AuthContainer = ({ title }: TitleProps) => {
  const colorScheme = useColorScheme() ?? "dark";
  return (
    <>
      <ThemedView
        style={[
          styles.titleContainer,
          { backgroundColor: Colors[colorScheme ?? "dark"].link },
        ]}
      >
        <ThemedText
          style={[styles.title, { color: Colors[colorScheme ?? "dark"].white }]}
          type="subtitle"
        >
          {title}
        </ThemedText>
      </ThemedView>
    </>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 80,
  },
  title: {
    top: -17.5,
    fontSize: 14,
  },
});
