/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#AB6AEC";
const tintColorDark = "#D398F9";

export const Colors = {
  light: {
    disabled: "rgba(0, 0, 0, 0.2)",
    text: "#2C193A",
    link: "#AB6AEC",
    background: "#ECEDEE",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    error: "#FD515F",
    white: "#ECEDEE",
    primary: "#AB6AEC",
    inputPH: "rgba(0, 0, 0, 0.48)",
    inputBG: "rgba(0, 0, 0, 0.02)",
    inputBorder: "rgba(0, 0, 0, 0.08)",
    yellow: "#FFA500",
    green: "#00873C",
    red: "#F65C3B",
    orange: "#FD8551",
  },
  dark: {
    disabled: "rgba(255, 255, 255, 0.05)",
    text: "#ECEDEE",
    background: "#2C193A",
    link: "#AB6AEC",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    error: "#FD515F",
    white: "#ECEDEE",
    primary: "#AB6AEC",
    inputPH: "#ECEDEE",
    inputBG: "rgba(255, 255, 255, 0.2)",
    inputBorder: "rgba(255, 255, 255, 0.5)",
    yellow: "#FFA500",
    green: "#00873C",
    red: "#F65C3B",
    orange: "#FD8551",
  },
};
