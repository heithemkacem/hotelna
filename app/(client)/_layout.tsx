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
  if (isLoading) {
    return <Loader />;
  }

  if (!session) {
    return <Redirect href="/(auth)/" />;
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
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
