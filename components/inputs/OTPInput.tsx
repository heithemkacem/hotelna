import React from "react";
import { View, TextInput, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

interface OTPInputProps {
  onOtpChange?: (otp: string) => void; // Make it optional with `?`
  editable: boolean;
  otpValue: string; // New prop to track the OTP value
}

const OTPInput: React.FC<OTPInputProps> = ({
  onOtpChange,
  editable,
  otpValue,
}) => {
  const colorScheme = useColorScheme();

  const handleOtpChange = (index: number, value: string) => {
    if (onOtpChange) {
      const newOtpValue = otpValue.split(""); // Split current OTP value
      newOtpValue[index] = value; // Update the OTP at the specific index
      onOtpChange(newOtpValue.join("")); // Join back to string and update formik value
    }
  };

  return (
    <View style={styles.otpContainer}>
      {[0, 1, 2, 3].map((_, index) => (
        <TextInput
          key={index}
          style={[
            styles.otpInput,
            {
              borderColor: Colors[colorScheme ?? "dark"].inputBorder,
              backgroundColor: Colors[colorScheme ?? "dark"].inputBG,
              color: Colors[colorScheme ?? "dark"].inputPH,
            },
          ]}
          maxLength={1}
          keyboardType="number-pad"
          onChangeText={(value) => handleOtpChange(index, value)}
          value={otpValue[index] || ""} // Control input with current OTP value
          editable={editable}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
  },
});

export default OTPInput;
