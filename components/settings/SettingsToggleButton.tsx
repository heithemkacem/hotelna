import Ionicons from "@expo/vector-icons/Ionicons";
import { PropsWithChildren, useState } from "react";
import {
  StyleSheet,
  Switch,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

export function SettingsToggleButton({
  onPress,
  title,
}: {
  title: string;
  onPress: () => void;
}) {
  const theme = useColorScheme() ?? "dark";
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        { borderColor: Colors[theme ?? "dark"].inputBorder },
      ]}
    >
      <ThemedText type="large" style={{ fontWeight: "bold" }}>
        {title}
      </ThemedText>
      <Switch
        trackColor={{
          false: Colors[theme ?? "dark"].inputPH,
          true: Colors[theme ?? "dark"].primary,
        }}
        thumbColor={
          isEnabled
            ? Colors[theme ?? "dark"].white
            : Colors[theme ?? "dark"].inputPH
        }
        ios_backgroundColor={Colors[theme ?? "dark"].inputPH}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 48,
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 8,
  },

  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
