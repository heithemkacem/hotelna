import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  Pressable,
  Modal,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";
import axios from "axios";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MaterialIcon } from "../icons/MaterialIcons";

interface PhoneInputProps {
  onPhoneChange?: (phone: string) => void;
  isOtpVisible: boolean;
  error: string | false | undefined;
}
interface CountryResult {
  name: string;
  flag: string;
  code: string;
  phoneCode: string;
}
const PhoneInput: React.FC<PhoneInputProps> = ({
  onPhoneChange,
  isOtpVisible,
  error,
}) => {
  const colorScheme = useColorScheme();
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryResult>({
    name: "",
    flag: "",
    code: "Select Country",
    phoneCode: "",
  });
  const [phone, setPhone] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [countryError, setCountryError] = useState(false);

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countries = response.data.map((country: any) => ({
        name: country.name.common,
        flag: country.flags.png,
        code: country.cca2,
        phoneCode:
          country.idd?.root +
          (country.idd?.suffixes ? country.idd.suffixes[0] : ""),
      }));
      setCountryList(countries);
    } catch (error) {
      console.error("Error fetching countries", error);
    }
  };

  const handleCountrySelect = (country: any) => {
    setSelectedCountry(country);
    setCountryError(false); // Reset error when a country is selected
    setIsModalVisible(false);
  };

  const handlePhoneChange = (text: string) => {
    setPhone(text);
    validateInput(selectedCountry.phoneCode, text);
  };

  const validateInput = (phoneCode: string, phoneNumber: string) => {
    if (!phoneCode) {
      setCountryError(true);
    } else {
      setCountryError(false);
    }

    // If both country code and phone are valid, trigger the onPhoneChange event
    if (phoneCode && phoneNumber) {
      onPhoneChange && onPhoneChange(`${phoneCode} ${phoneNumber}`);
    }
  };

  const renderCountryItem = ({ item }: any) => (
    <ThemedView style={{ padding: 5 }}>
      <TouchableOpacity
        onPress={() => handleCountrySelect(item)}
        style={{ flexDirection: "row", alignItems: "center" }} // Align children in a row and center them
      >
        <Image
          source={{ uri: item.flag }}
          style={{ height: 25, width: 40, marginRight: 10 }} // Add margin for spacing
        />
        <ThemedText style={{ fontWeight: "bold" }} type="meduim">
          {item.name}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={[
          styles.phoneInputContainer,
          { opacity: isOtpVisible ? 0.4 : 1 },
        ]}
      >
        <Pressable
          style={styles.countryPicker}
          onPress={() => {
            setIsModalVisible(true);
            fetchCountries();
          }}
          disabled={isOtpVisible}
        >
          {selectedCountry.flag !== "" && (
            <Image
              source={{ uri: selectedCountry.flag }}
              style={{ height: 25, width: 40, marginRight: 10 }} // Add margin for spacing
            />
          )}
          {<ThemedText type="small">{selectedCountry.code}</ThemedText>}
        </Pressable>
        <RNTextInput
          style={[
            styles.textInput,
            {
              backgroundColor: Colors[colorScheme ?? "dark"].inputBG,
              borderColor: Colors[colorScheme ?? "dark"].inputBorder,
              color: Colors[colorScheme ?? "dark"].text,
            },
          ]}
          placeholder="Enter Phone Number"
          placeholderTextColor={Colors[colorScheme ?? "dark"].inputPH}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={handlePhoneChange}
          editable={!isOtpVisible}
        />
      </ThemedView>

      {error && (
        <ThemedView style={[styles.errorContainer, { marginTop: 10 }]}>
          <ThemedText
            type="small"
            style={[{ color: Colors[colorScheme ?? "dark"].error }]}
          >
            Country selection is required.
          </ThemedText>
          <MaterialIcon
            name="error"
            size={13}
            color={Colors[colorScheme ?? "dark"].error}
          />
        </ThemedView>
      )}
      {countryError && (
        <ThemedView style={[styles.errorContainer, { marginTop: 10 }]}>
          <ThemedText
            type="small"
            style={[{ color: Colors[colorScheme ?? "dark"].error }]}
          >
            Country selection is required.
          </ThemedText>
          <MaterialIcon
            name="error"
            size={13}
            color={Colors[colorScheme ?? "dark"].error}
          />
        </ThemedView>
      )}

      <Modal visible={isModalVisible} animationType="slide">
        <ThemedView style={[styles.modalContainer]}>
          <Pressable
            onPress={() => setIsModalVisible(false)}
            style={styles.close}
          >
            <ThemedText type="meduim" style={{ fontWeight: "bold" }}>
              Close
            </ThemedText>
          </Pressable>
          <FlatList
            data={countryList}
            keyExtractor={(item: any) => item.name}
            renderItem={renderCountryItem}
          />
        </ThemedView>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryPicker: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    paddingVertical: 16,
  },
  textInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 14,
    height: 45,
    borderWidth: 1,
  },
  close: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  errorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default PhoneInput;
