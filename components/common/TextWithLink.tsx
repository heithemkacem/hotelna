import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Pressable, StyleSheet } from "react-native";
import { Href, Link } from "expo-router";
type TextWithLinkProp = {
  link: string;
  text: string;
  href: Href<string | object>;
};
const TextWithLink = ({ text, link, href }: TextWithLinkProp) => {
  return (
    <ThemedView style={styles.signupContainer}>
      <ThemedText>{text}</ThemedText>
      <Link href={href} asChild>
        <Pressable>
          <ThemedText style={{ marginLeft: 5 }} type="link">
            {link}
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
