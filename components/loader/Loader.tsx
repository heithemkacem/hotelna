import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

export interface DefaultButtonColorProps {
  color?: string;
  size?: "large" | number | "small" | undefined;
}

const Loader: React.FC<DefaultButtonColorProps> = ({
  color = Colors.dark.primary,
  size = "large",
}) => {
  const height = Dimensions.get("window").height;
  return (
    <ThemedView style={[styles.container, { height }]}>
      <ThemedView style={styles.loaderWrapper}>
        <ActivityIndicator size={size} color={color} />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 2,
  },
  loaderWrapper: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
