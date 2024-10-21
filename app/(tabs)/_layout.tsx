import { Redirect, Tabs } from "expo-router";
import React from "react";
import { FontAwesome } from "@/components/icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useSession } from "@/context/ctx";
import Loader from "@/components/loader/Loader";
import { IoniconsIcon } from "@/components/icons/Ionicons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { session, isLoading } = useSession();
  if (isLoading) {
    return <Loader />;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/(auth)/" />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "dark"].background,
        },
        headerShown: false,
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Your Hotel",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name={focused ? "hotel" : "hotel"}
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <IoniconsIcon
              name={focused ? "compass" : "compass-outline"}
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, focused }) => (
            <IoniconsIcon
              name={
                focused
                  ? "chatbubble-ellipses-sharp"
                  : "chatbubble-ellipses-outline"
              }
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <IoniconsIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={focused ? 24 : 20}
            />
          ),
        }}
      />
    </Tabs>
  );
}
