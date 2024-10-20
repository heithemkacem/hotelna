import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "small"
    | "large"
    | "meduim"
    | "xl";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const colorForLink = useThemeColor(
    { light: lightColor, dark: darkColor },
    "link"
  );
  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "small" ? styles.small : undefined,
        type === "meduim" ? styles.meduim : undefined,
        type === "large" ? styles.large : undefined,
        type === "xl" ? styles.xl : undefined,
        type === "link" ? [styles.link, { color: colorForLink }] : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "bold",
  },
  small: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "bold",
  },
  meduim: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
  },
  xl: {
    fontSize: 28,
  },
});
