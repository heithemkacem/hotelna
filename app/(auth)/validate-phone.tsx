import { StyleSheet, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { MainContainer } from "@/components/containers/MainContainer";
import AuthContainer from "@/components/containers/AuthContainer";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { ValidatePhone } from "@/validation/auth/AuthValidation";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import PhoneInput from "@/components/inputs/PhoneInput";
import DefaultButton from "@/components/buttons/Default";
import OTPInput from "@/components/inputs/OTPInput";
import { ThemedText } from "@/components/ThemedText";

export default function ValidatePhoneScreen() {
  const [isOtpVisible, setIsOtpVisible] = useState(false);

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
        <ThemedView style={styles.inputContainer}></ThemedView>
        <Formik
          initialValues={{ phone: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
            setIsOtpVisible(true);
          }}
          validationSchema={ValidatePhone}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <ThemedView style={{ top: -100 }}>
              <PhoneInput
                onPhoneChange={handleChange("phone")}
                isOtpVisible={isOtpVisible}
                error={touched.phone && errors.phone}
              />

              <DefaultButton
                onPress={handleSubmit}
                title="Send Code"
                disabled={isOtpVisible}
              />
            </ThemedView>
          )}
        </Formik>
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
                      top: -100,
                      padding: 5,
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
});
