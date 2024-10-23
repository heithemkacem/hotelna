import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome } from "@/components/icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { IoniconsIcon } from "@/components/icons/Ionicons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
        name="chats-screen"
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
