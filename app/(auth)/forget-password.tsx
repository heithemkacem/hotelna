import { StyleSheet, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";
import AuthContainer from "@/components/containers/AuthContainer";
import { Formik } from "formik";
import { useMemo } from "react";
import { ForgetPasswordSchema } from "@/validation/auth/AuthValidation";
import TextInput from "@/components/inputs/TextInput";
import DefaultButton from "@/components/buttons/Default";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import TextWithLink from "@/components/common/TextWithLink";

export default function ForgetPasswordScreen() {
  const initialValues = useMemo(
    () => ({
      email: "",
    }),
    []
  );

  return (
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
        <AuthContainer title="Enter your email" />
        <ThemedView style={styles.inputContainer}></ThemedView>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
          validationSchema={ForgetPasswordSchema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <ThemedView style={{ top: -100 }}>
              <TextInput
                onChangeText={handleChange("email")}
                value={values.email}
                label="Email"
                placeholder="Enter your email"
                error={touched.email && errors.email}
              />

              <DefaultButton
                size="large"
                isSubmitting={false}
                onPress={handleSubmit}
                title="Submit"
              />
              <TextWithLink
                text="Don't have an account ?"
                link="Sign Up"
                href={"/(auth)/sign-up"}
              />
            </ThemedView>
          )}
        </Formik>
      </ParallaxScrollView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 50,
    top: -50,
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
  forgotPasswordText: {
    color: "#000",
    fontFamily: "mainBold",
  },
});
