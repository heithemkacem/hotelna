import { StyleSheet, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";
import AuthContainer from "@/components/containers/AuthContainer";
import { Formik } from "formik";
import { useMemo } from "react";
import { SignupSchema } from "@/validation/auth/AuthValidation";
import TextInput from "@/components/inputs/TextInput";
import DefaultButton from "@/components/buttons/Default";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import SocialMediaLinks from "@/components/common/SocialMediaLinks";
import CheckBoxWithLink from "@/components/common/CheckBoxWithLink";
import TextWithLink from "@/components/common/TextWithLink";
import PasswordTextInput from "@/components/inputs/PasswordTextInput";
import ErrorBesideLabelInput from "@/components/inputs/ErrorBesideLabelInput";

export default function SignUpScreen() {
  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
      confirmPassword: "",
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
        <AuthContainer title="Login to your account" />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
          validationSchema={SignupSchema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <ThemedView>
              <TextInput
                onChangeText={handleChange("email")}
                value={values.email}
                label="Email"
                placeholder="Enter your email"
                error={touched.email && errors.email}
              />
              <PasswordTextInput
                onChangeText={handleChange("password")}
                value={values.password}
                label="Password"
                placeholder="Enter your password"
                isPassword={true}
                error={touched.password && errors.password}
              />
              <ErrorBesideLabelInput
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
                label="Confirm Password"
                placeholder="Enter your password again"
                isPassword={true}
                error={touched.confirmPassword && errors.confirmPassword}
              />
              <CheckBoxWithLink text="Accept the terms and conditions" />
              <DefaultButton
                size="large"
                isSubmitting={false}
                onPress={handleSubmit}
                title="Submit"
              />
              <SocialMediaLinks />
              <TextWithLink
                text="Aleardy have an account ?"
                link="Login"
                href={"/(auth)/"}
              />
            </ThemedView>
          )}
        </Formik>
      </ParallaxScrollView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
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
