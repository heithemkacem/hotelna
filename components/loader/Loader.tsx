import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";

export interface DefaultButtonColorProps {
  color?: string;
  size?: "large" | number | "small" | undefined;
}

const Loader: React.FC<DefaultButtonColorProps> = ({
  color = "#31CF77",
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
