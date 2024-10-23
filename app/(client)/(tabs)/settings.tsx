import { StyleSheet } from "react-native";
import { MainContainer } from "@/components/containers/MainContainer";
import Title from "@/components/headers/Title";
import { Personalisation } from "@/components/settings/Personalisation";
import { NotificationAndAlerts } from "@/components/settings/NotificationAndAlerts";
import { AppPreferences } from "@/components/settings/AppPreferences";
import { AppSettings } from "@/components/settings/AppSettings";

export default function TabFourScreen() {
  return (
    <MainContainer>
      <Title header="Settings" text="Manage your profile and apps." />
      <Personalisation />
      <NotificationAndAlerts />
      <AppPreferences />
      <AppSettings />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
