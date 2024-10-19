import React from "react";
import SocialMediaButton from "../buttons/SocialMedia";
import { ThemedView } from "../ThemedView";
import { IoniconsIcon } from "../icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { Platform, StyleSheet, useColorScheme } from "react-native";

const SocialMediaLinks = () => {
  const colorScheme = useColorScheme() ?? "dark";
  return (
    <ThemedView style={styles.socialMediaContainer}>
      <SocialMediaButton
        onPress={() => false}
        children={
          <IoniconsIcon
            name="logo-google"
            color={Colors[colorScheme ?? "dark"].error}
          />
        }
        bgColor="#F7F7F7"
      />
      <SocialMediaButton
        onPress={() => false}
        children={
          <IoniconsIcon
            name="logo-facebook"
            color={Colors[colorScheme ?? "dark"].white}
          />
        }
        bgColor="#167EE6"
      />
      {Platform.OS === "ios" && (
        <SocialMediaButton
          onPress={() => false}
          children={
            <IoniconsIcon
              name="logo-apple"
              color={Colors[colorScheme ?? "dark"].white}
            />
          }
          bgColor="#000"
        />
      )}
    </ThemedView>
  );
};

export default SocialMediaLinks;

const styles = StyleSheet.create({
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
});
