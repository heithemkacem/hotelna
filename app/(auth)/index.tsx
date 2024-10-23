import { StyleSheet, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";
import AuthContainer from "@/components/containers/AuthContainer";
import { Formik } from "formik";
import { useMemo } from "react";
import { LoginSchema } from "@/validation/auth/AuthValidation";
import TextInput from "@/components/inputs/TextInput";
import DefaultButton from "@/components/buttons/Default";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import SocialMediaLinks from "@/components/common/SocialMediaLinks";
import CheckBoxWithLink from "@/components/common/CheckBoxWithLink";
import TextWithLink from "@/components/common/TextWithLink";
import { useSession } from "@/context/ctx";
import { router } from "expo-router";

export default function SignInScreen() {
  const { signIn } = useSession();
  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
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
            signIn();
            setSubmitting(false);
            router.replace("/(auth)/scan-qr");
          }}
          //validationSchema={LoginSchema}
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
              <TextInput
                onChangeText={handleChange("password")}
                value={values.password}
                label="Password"
                placeholder="Enter your password"
                isPassword={true}
                error={touched.password && errors.password}
              />
              <CheckBoxWithLink
                text="Remember Me"
                link="Forgot Password?"
                href={"/(auth)/forget-password"}
              />
              <DefaultButton
                size="large"
                isSubmitting={false}
                onPress={handleSubmit}
                title="Login"
              />
              <SocialMediaLinks />
              <TextWithLink
                text="Don't have an account ?"
                link="Sign Up"
                href={"/(auth)/sign-up"}
              />
              <TextWithLink
                text="Don't have an account ?"
                link="Sign Up"
                href={"/(auth)/reset-password"}
              />
              <TextWithLink
                text="Don't have an account ?"
                link="Sign Up"
                href={"/(auth)/validate-phone"}
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
