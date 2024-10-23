import { StyleSheet, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";
import AuthContainer from "@/components/containers/AuthContainer";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { ResetPasswordSchema } from "@/validation/auth/AuthValidation";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import DefaultButton from "@/components/buttons/Default";
import OTPInput from "@/components/inputs/OTPInput";
import { ThemedText } from "@/components/ThemedText";
import PasswordTextInput from "@/components/inputs/PasswordTextInput";
import ErrorBesideLabelInput from "@/components/inputs/ErrorBesideLabelInput";

export default function ResetPasswordScreen() {
  const [isOtpVisible, setIsOtpVisible] = useState(true);

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
        <AuthContainer title="Validate your phone number" />
        <Formik
          initialValues={{ otp: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log("OTP submitted:", values.otp);
          }}
        >
          {({ handleChange, handleSubmit, values }) => {
            useEffect(() => {
              if (values.otp.length === 4) {
                console.log("OTP is complete:", values.otp);
                setIsOtpVisible(false);
                console.log(isOtpVisible);
              } else {
                console.log("OTP is not complete:", values.otp);
              }
            }, [values.otp]);

            return (
              <>
                <ThemedView
                  style={[
                    {
                      opacity: !isOtpVisible ? 0.4 : 1,
                      paddingHorizontal: 20,
                    },
                  ]}
                >
                  <OTPInput
                    onOtpChange={handleChange("otp")}
                    editable={isOtpVisible}
                    otpValue={values.otp} // Pass current OTP value for controlled input
                  />
                  <ThemedText>
                    Didn't receive an OTP?{" "}
                    <ThemedText type="link">Resend</ThemedText>
                  </ThemedText>
                </ThemedView>
              </>
            );
          }}
        </Formik>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
          validationSchema={ResetPasswordSchema}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <ThemedView
              style={[
                {
                  opacity: isOtpVisible ? 0.4 : 1,
                  padding: 5,
                },
              ]}
            >
              <PasswordTextInput
                onChangeText={handleChange("password")}
                value={values.password}
                label="Password"
                placeholder="Enter your password"
                isPassword={true}
                error={touched.password && errors.password}
                editable={!isOtpVisible}
              />
              <ErrorBesideLabelInput
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
                label="Confirm Password"
                placeholder="Enter your password again"
                isPassword={true}
                error={touched.confirmPassword && errors.confirmPassword}
                editable={!isOtpVisible}
              />
              <DefaultButton
                size="large"
                isSubmitting={false}
                onPress={handleSubmit}
                title="Submit"
                disabled={isOtpVisible}
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
});
