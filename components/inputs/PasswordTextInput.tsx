import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { ThemedText } from "../ThemedText";
import { MaterialIcon } from "../icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { IoniconsIcon } from "../icons/Ionicons";
import { ThemedView } from "../ThemedView";

interface TextInputProps {
  label?: string;
  error?: any;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  editable?: boolean;
  isPassword?: boolean;
}

const PasswordTextInput: React.FC<TextInputProps> = ({
  label,
  isPassword,
  error,
  value,
  placeholder,
  onChangeText,
  editable = true,
}) => {
  const colorScheme = useColorScheme();
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleFocus = () => {
    setIsFocused(true);
    setIsTouched(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsTouched(false);
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handlePasswordChange = (text: string) => {
    onChangeText && onChangeText(text);
    setIsTouched(true);
    setPasswordStrength(calculatePasswordStrength(text));
  };

  const getPasswordStrengthLabel = () => {
    switch (passwordStrength) {
      case 1:
        return (
          <ThemedText
            type="small"
            style={{ color: Colors[colorScheme ?? "dark"].red }}
          >
            Weak
          </ThemedText>
        );
      case 2:
        return (
          <ThemedText
            type="small"
            style={{ color: Colors[colorScheme ?? "dark"].orange }}
          >
            Fair
          </ThemedText>
        );
      case 3:
        return (
          <ThemedText
            type="small"
            style={{ color: Colors[colorScheme ?? "dark"].yellow }}
          >
            Good
          </ThemedText>
        );
      case 4:
        return (
          <ThemedText
            type="small"
            style={{ color: Colors[colorScheme ?? "dark"].green }}
          >
            Strong
          </ThemedText>
        );
      default:
        return "";
    }
  };
  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 1:
        return Colors[colorScheme ?? "dark"].red;
      case 2:
        return Colors[colorScheme ?? "dark"].orange;
      case 3:
        return Colors[colorScheme ?? "dark"].yellow;
      case 4:
        return Colors[colorScheme ?? "dark"].green;
      default:
        return Colors[colorScheme ?? "dark"].background;
    }
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
          borderColor: Colors[colorScheme ?? "dark"].primary,
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
          inputBorderColor(),
        ]}
        placeholder={placeholder}
        placeholderTextColor={Colors[colorScheme ?? "dark"].inputPH}
        secureTextEntry={isPassword && hidePassword}
        value={value}
        onChangeText={handlePasswordChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={editable}
      />
      {error && (
        <ThemedView style={[styles.errorContainer, { marginTop: 10 }]}>
          <ThemedText
            type="small"
            style={[{ color: Colors[colorScheme ?? "dark"].error }]}
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
            <IoniconsIcon name="eye-off" size={16} />
          ) : (
            <IoniconsIcon name="eye" size={16} />
          )}
        </Pressable>
      )}
      {isPassword && value && (
        <View style={styles.strengthIndicatorContainer}>
          <View
            style={[
              styles.strengthBar,
              {
                backgroundColor:
                  passwordStrength >= 1
                    ? getStrengthColor()
                    : Colors[colorScheme ?? "dark"].inputBorder,
              },
            ]}
          />
          <View
            style={[
              styles.strengthBar,
              {
                backgroundColor:
                  passwordStrength >= 2
                    ? getStrengthColor()
                    : Colors[colorScheme ?? "dark"].inputBorder,
              },
            ]}
          />
          <View
            style={[
              styles.strengthBar,
              {
                backgroundColor:
                  passwordStrength >= 3
                    ? getStrengthColor()
                    : Colors[colorScheme ?? "dark"].inputBorder,
              },
            ]}
          />
          <View
            style={[
              styles.strengthBar,
              {
                backgroundColor:
                  passwordStrength >= 4
                    ? getStrengthColor()
                    : Colors[colorScheme ?? "dark"].inputBorder,
              },
            ]}
          />
        </View>
      )}
      {isPassword && value && (
        <ThemedText type="small" style={styles.strengthText}>
          Password Strength: {getPasswordStrengthLabel()}
        </ThemedText>
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

  passwordToggle: {
    position: "absolute",
    top: 32,
    right: 16,
    zIndex: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  strengthIndicatorContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  strengthBar: {
    flex: 1,
    height: 5,
    marginHorizontal: 2,
    borderRadius: 4,
  },
  strengthText: {
    marginTop: 20,

    fontWeight: "bold",
  },
});

export default PasswordTextInput;
