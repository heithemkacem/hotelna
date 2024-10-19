import React, { PropsWithChildren } from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
interface SocialMediaButtonProps {
  onPress: () => void;
  bgColor?: string;
}

const SocialMediaButton: React.FC<
  PropsWithChildren & SocialMediaButtonProps
> = ({
  onPress,
  bgColor = "#ffffff", // Default background color
  children,
}) => {
  const buttonStyle: ViewStyle[] = [
    styles.button,
    { backgroundColor: bgColor }, // Use bgColor prop for the background color
  ];

  return children ? (
    <Pressable onPress={onPress} style={buttonStyle}>
      {children}
    </Pressable>
  ) : null;
};

const styles = StyleSheet.create({
  button: {
    width: 101,
    height: 52,
    borderRadius: 26, // rounded-full equivalent in React Native
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default SocialMediaButton;
