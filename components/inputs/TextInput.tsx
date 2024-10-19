import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  Pressable,
  Platform,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { MaterialIcon } from "../icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { IoniconsIcon } from "../icons/Ionicons";
import { ThemedView } from "../ThemedView";

interface TextInputProps {
  label?: string;
  error?: any;
  placeholderTextColor?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  editable?: boolean;
  isPassword?: boolean;
  disabled?: boolean;
  countryCode?: string;
  setCountryCode?: any;
  countryCodeError?: any;
  setCountryError?: any;
  dob?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  isPassword,
  error,
  placeholderTextColor = "rgba(0, 0, 0, 0.8)",
  value,
  placeholder,
  onChangeText,
  editable = true,
}) => {
  const colorScheme = useColorScheme();
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setIsTouched(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsTouched(false);
  };

  const inputBorderColor = () => {
    if (error) {
      return [
        styles.borderError,
        {
          backgroundColor: Colors[colorScheme ?? "dark"].error,
        },
      ];
    }
    if (isFocused || (isTouched && !error)) {
      return [
        styles.borderFocused,
        {
          borderColor: Colors[colorScheme ?? "dark"].link,
        },
      ];
    }
    return [
      styles.borderDefault,
      {
        backgroundColor: Colors[colorScheme ?? "dark"].inputBG,
        borderColor: Colors[colorScheme ?? "dark"].inputBorder,
      },
    ];
  };

  return (
    <ThemedView style={styles.container}>
      {label && <ThemedText type="small">{label}</ThemedText>}
      <RNTextInput
        style={[
          styles.textInput,
          { backgroundColor: Colors[colorScheme ?? "dark"].inputBG },

          Platform.OS === "ios" && styles.textInputIOS,
          inputBorderColor(),
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={isPassword && hidePassword}
        value={value}
        onChangeText={(text) => {
          onChangeText && onChangeText(text);
          setIsTouched(true);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={editable}
      />
      {error && (
        <ThemedView style={styles.errorContainer}>
          <ThemedText
            style={[
              styles.errorText,
              { color: Colors[colorScheme ?? "dark"].error },
            ]}
          >
            {error}
          </ThemedText>
          <MaterialIcon
            name="error"
            size={13}
            color={Colors[colorScheme ?? "dark"].error}
          />
        </ThemedView>
      )}
      {isPassword && (
        <Pressable
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.passwordToggle}
        >
          {hidePassword ? (
            <IoniconsIcon name="eye" size={16} />
          ) : (
            <IoniconsIcon name="eye-off" size={16} />
          )}
        </Pressable>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 8,
    fontSize: 12,
  },
  textInputIOS: {
    height: 50,
  },
  borderDefault: {
    borderWidth: 1,
  },
  borderFocused: {
    borderWidth: 2,
  },
  borderError: {
    borderWidth: 2,
  },

  errorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  errorText: {
    fontSize: 12,
  },
  passwordToggle: {
    position: "absolute",
    top: 32,
    right: 16,
    zIndex: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});

export default TextInput;