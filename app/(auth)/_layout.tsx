import Loader from "@/components/loader/Loader";
import { useSession } from "@/context/ctx";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function AuthLayout() {
  const colorScheme = useColorScheme();
  const { isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "dark"].background,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="validate-phone" />
      <Stack.Screen name="forget-password" />
      <Stack.Screen name="reset-password" />
    </Stack>
  );
}
