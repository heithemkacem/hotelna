import React, { useCallback, useState } from "react";
import { ThemedView } from "../ThemedView";
import CheckBox from "../inputs/CheckBox";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

const CheckBoxWithLink = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckbox = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);
  return (
    <ThemedView style={styles.row}>
      <ThemedView style={styles.checkboxContainer}>
        <CheckBox checked={checked} setChecked={handleCheckbox} />
        <Pressable>
          <ThemedText style={styles.rememberMeText}>Remember Me</ThemedText>
        </Pressable>
      </ThemedView>
      <Link href="/forget-password" asChild>
        <Pressable>
          <ThemedText type="link">Forgot Password?</ThemedText>
        </Pressable>
      </Link>
    </ThemedView>
  );
};

export default CheckBoxWithLink;
const styles = StyleSheet.create({
  row: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    marginLeft: 8,
  },
});