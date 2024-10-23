import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  useColorScheme,
} from "react-native";
import { ThemedText } from "../ThemedText";
import DefaultButton from "../buttons/Default";
import { IoniconsIcon } from "../icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "../icons/FontAwesome";

interface CodeScannerProps {
  onBackPress: () => void; // Prop to handle back button press
}

export default function CodeScanner({ onBackPress }: CodeScannerProps) {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false); // State to track if scanned
  const colorScheme = useColorScheme() ?? "dark";

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
  };

  const handleRescan = () => {
    setScanned(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <IoniconsIcon
          name="close-circle"
          size={35}
          color={Colors[colorScheme ?? "dark"].primary}
        />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <FontAwesome
            name={"camera-rotate"}
            size={40}
            color={Colors[colorScheme ?? "dark"].primary}
          />
        </TouchableOpacity>
      </View>
      {!scanned ? (
        <CameraView
          style={styles.camera}
          facing={facing}
          onBarcodeScanned={handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        >
          <View style={styles.overlayX}>
            <View style={styles.overlay}>
              <View style={styles.scannerFrame}>
                <View style={styles.cornerTopLeft} />
                <View style={styles.cornerTopLeftDownToBottom} />
                <View style={styles.cornerTopRight} />
                <View style={styles.cornerTopRightToBottom} />
                <View style={styles.cornerBottomLeft} />
                <View style={styles.cornerBottomLeftToTop} />
                <View style={styles.cornerBottomRight} />
                <View style={styles.cornerBottomRightToTop} />
              </View>
              <Text style={styles.scanText}>Scan QR Code</Text>
            </View>
          </View>
        </CameraView>
      ) : (
        <View style={styles.rescanContainer}>
          <ThemedText type={"meduim"} style={styles.scannedMessage}>
            QR Code Scanned!
          </ThemedText>
          <DefaultButton title="Re-scan" onPress={handleRescan} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    borderRadius: 5,
    zIndex: 5,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    right: 20,
    padding: 10,
    borderRadius: 5,
    zIndex: 5,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  overlay: {
    height: 320,
    width: 320,
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  overlayX: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  scannerFrame: {
    width: 250, // Width of the QR code scanner frame
    height: 250, // Height of the QR code scanner frame
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },

  cornerTopLeft: {
    width: 77,
    height: 30,
    backgroundColor: "white",
    position: "absolute",
    top: -15,
    left: -15,
    borderTopLeftRadius: 15,
  },
  cornerTopLeftDownToBottom: {
    width: 30,
    height: 77,
    backgroundColor: "white",
    position: "absolute",
    top: -15,
    left: -15,
    borderBottomLeftRadius: 15,
  },
  cornerTopRight: {
    width: 77,
    height: 30,
    backgroundColor: "white",
    position: "absolute",
    top: -15,
    right: -15,
    borderTopRightRadius: 15,
  },
  cornerTopRightToBottom: {
    width: 30,
    height: 77,
    backgroundColor: "white",
    position: "absolute",
    top: -15,
    right: -15,
    borderBottomRightRadius: 15,
  },
  cornerBottomLeft: {
    width: 77,
    height: 30,
    backgroundColor: "white",
    position: "absolute",
    bottom: -15,
    left: -15,
    borderBottomLeftRadius: 15,
  },
  cornerBottomLeftToTop: {
    width: 30,
    height: 77,
    backgroundColor: "white",
    position: "absolute",
    bottom: -15,
    left: -15,
    borderTopLeftRadius: 15,
  },
  cornerBottomRight: {
    width: 100,
    height: 30,
    backgroundColor: "white",
    position: "absolute",
    bottom: -15,
    right: -15,
    borderBottomRightRadius: 15,
  },
  cornerBottomRightToTop: {
    width: 30,
    height: 77,
    backgroundColor: "white",
    position: "absolute",
    bottom: -15,
    right: -15,
    borderTopRightRadius: 15,
  },
  scanText: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  rescanContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scannedMessage: {
    fontSize: 20,
    marginBottom: 20,
  },
});
