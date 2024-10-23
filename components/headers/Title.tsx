import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { StyleSheet } from "react-native";
import { MainContainer } from "../containers/MainContainer";

type TitleProps = {
  header: string;
  text?: string;
};
const Title = ({ header, text }: TitleProps) => {
  return (
    <MainContainer>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{header}</ThemedText>
      </ThemedView>
      {text && <ThemedText>{text}</ThemedText>}
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

export default Title;
