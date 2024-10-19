import { StyleSheet } from "react-native";
import { MainContainer } from "@/components/containers/MainContainer";
import Title from "@/components/headers/Title";

export default function ResetPasswordScreen() {
  return (
    <MainContainer>
      <Title
        header="Login to join your hotel"
        text="Login to see all the services provided by your hotel."
      />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
  },
});
