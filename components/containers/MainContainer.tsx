import React from "react";
import { ScrollView, StyleSheet, SafeAreaView, Platform } from "react-native";
import { ThemedView } from "../ThemedView";
import { PropsWithChildren } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function MainContainer({ children }: PropsWithChildren) {
  const bgColor = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.background },
    "background"
  );
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={Platform.OS === "ios" ? 40 : 20} // More space for iOS to avoid overlap
        keyboardShouldPersistTaps="handled"
        scrollEnabled={true}
        enableAutomaticScroll={Platform.OS === "ios"} // Ensures smooth auto-scroll on iOS
        enableResetScrollToCoords={false} // Prevents jumpy behavior on iOS
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          contentInset={{ top: 20 }}
          showsVerticalScrollIndicator={false} // Hides the vertical scroll indicator
          showsHorizontalScrollIndicator={false} // Hides the horizontal scroll indicator (optional)
        >
          <ThemedView style={styles.container}>{children}</ThemedView>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 20,
  },
  container: {
    padding: 7,
  },
});
