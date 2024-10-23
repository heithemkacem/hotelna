import {
  StyleSheet,
  Image,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";
import AuthContainer from "@/components/containers/AuthContainer";
import { Formik } from "formik";
import { useMemo, useState } from "react";
import { CodeValidation } from "@/validation/auth/AuthValidation";
import TextInput from "@/components/inputs/TextInput";
import DefaultButton from "@/components/buttons/Default";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useSession } from "@/context/ctx";
import { router } from "expo-router";
import { FontAwesome } from "@/components/icons/FontAwesome";
import { Colors } from "@/constants/Colors";
import CodeScanner from "@/components/Camera/Camera";

export default function SignInScreen() {
  const { signIn } = useSession();
  const initialValues = useMemo(
    () => ({
      code: "",
    }),
    []
  );
  const [cameraVisible, setCameraVisible] = useState<boolean>(false);
  const colorScheme = useColorScheme();

  return (
    <>
      {cameraVisible ? (
        <ThemedView style={styles.fullScreen}>
          <CodeScanner onBackPress={() => setCameraVisible(false)} />
        </ThemedView>
      ) : (
        <MainContainer>
          <ParallaxScrollView
            headerBackgroundColor={{
              light: "#ECEDEE",
              dark: "#2C193A",
            }}
            headerImage={
              <ThemedView style={styles.flex}>
                <Image
                  source={require("@/assets/images/hotelna-logo-removebg.png")}
                  style={styles.hotelnaLogo}
                />
              </ThemedView>
            }
          >
            <AuthContainer title="You can either scan the QR or put the code directly" />

            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                signIn();
                setSubmitting(false);
                router.replace("/(tabs)/");
              }}
              validationSchema={CodeValidation}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <ThemedView>
                  <ThemedView
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <ThemedView
                      style={{
                        width: "85%",
                      }}
                    >
                      <TextInput
                        onChangeText={handleChange("code")}
                        value={values.code}
                        label="Hotel Code"
                        placeholder="Enter the hotel code"
                        error={touched.code && errors.code}
                      />
                    </ThemedView>
                    <TouchableOpacity
                      style={{
                        paddingVertical: 8,
                        paddingHorizontal: 10,
                        marginRight: 5,
                        marginTop: 8,
                        height: 50,
                      }}
                      onPress={() => setCameraVisible(true)}
                    >
                      <FontAwesome
                        name={"qrcode"}
                        size={40}
                        color={Colors[colorScheme ?? "dark"].inputPH}
                      />
                    </TouchableOpacity>
                  </ThemedView>
                  <DefaultButton
                    size="large"
                    isSubmitting={false}
                    onPress={handleSubmit}
                    title="Enter the hotel"
                  />
                </ThemedView>
              )}
            </Formik>
          </ParallaxScrollView>
        </MainContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  flex: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hotelnaLogo: {
    height: 178,
    width: 290,
  },
});
