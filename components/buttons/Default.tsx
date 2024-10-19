import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  useColorScheme,
} from "react-native";
import Loader from "../loader/Loader";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";
export interface DefaultButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: any;
  isSubmitting?: boolean;
  color?: string;
  size?: number | "small" | "large" | undefined;
}
const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  title,
  disabled = false,
  style,
  isSubmitting,
  size = "small",
  color = Colors.dark.primary,
}) => {
  const colorScheme = useColorScheme() ?? "dark";
  const buttonStyle: ViewStyle[] = [
    styles.button,
    { backgroundColor: Colors[colorScheme ?? "dark"].primary },
    disabled ? styles.disabled : { backgroundColor: color }, // Use color prop when not disabled
    style, // Custom style from props
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled}>
      {isSubmitting ? (
        <Loader color="white" size={size} />
      ) : (
        <ThemedText style={styles.buttonText}>{title}</ThemedText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 52,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12, // mt-3 equivalent
  },
  disabled: {
    backgroundColor: "#dcdcdc", // Replace with your input placeholder color
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DefaultButton;
