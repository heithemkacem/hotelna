import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { StyleSheet } from "react-native";

type TitleProps = {
  header: string;
  text?: string;
};
const Title = ({ header, text }: TitleProps) => {
  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{header}</ThemedText>
      </ThemedView>
      {text && <ThemedText>{text}</ThemedText>}
    </>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Title;
