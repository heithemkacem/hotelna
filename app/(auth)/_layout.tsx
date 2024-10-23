import Loader from "@/components/loader/Loader";
import { useSession } from "@/context/ctx";
import { Redirect } from "expo-router";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function AuthLayout() {
  const colorScheme = useColorScheme();
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Loader />;
  }
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(tabs)/" />;
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
      <Stack.Screen name="scan-qr" />
    </Stack>
  );
}
