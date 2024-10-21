import { Image, StyleSheet, Platform, Pressable } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";
import { useSession } from "@/context/ctx";

export default function HomeScreen() {
  const { signOut } = useSession();
  return (
    <MainContainer>
      <ParallaxScrollView
        headerBackgroundColor={{
          light: "#ECEDEE",
          dark: "#2C193A",
        }}
        headerImage={
          <Image
            source={require("@/assets/images/hotelna-logo-removebg.png")}
            style={styles.hotelnaLogo}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome !</ThemedText>
          <HelloWave />
        </ThemedView>
        <Pressable onPress={() => signOut()} style={styles.titleContainer}>
          <ThemedText type="title">Sign out !</ThemedText>
        </Pressable>
      </ParallaxScrollView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  hotelnaLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
