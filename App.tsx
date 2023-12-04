import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DeviceModal from "./DeviceConnectionsModal";
import useBLE from "./useBLE";

const App = () => {
  const { // destructure useBLE hook
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    uvIndex,
    disconnectFromDevice,
  } = useBLE();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false); // state for modal

  const scanForDevices = async () => { // scan for devices
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

  const getUvIndexColor = (indexStr: string): string => { // determine color based on uv index
    const indexNumber = Number(indexStr);
    if (indexNumber >= 0 && indexNumber <= 2) { 
      return 'green';
    } else if (indexNumber >= 3 && indexNumber <= 5) {
      return 'yellow';
    } else if (indexNumber >= 6 && indexNumber <= 7) {
      return 'orange';
    } else if (indexNumber >= 8 && indexNumber <= 10) {
      return 'red';
    } else {
      return 'purple';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.uvIndexTitleWrapper}>
        {connectedDevice ? (
          <View style={styles.uvIndexView}>
            <Text style={styles.uvIndexTitleText}>UV Index</Text>
            <View style={[styles.uvIndexContainer, {backgroundColor: getUvIndexColor(uvIndex)}]}>
              <Text style={styles.uvIndexText}>
                {uvIndex}
              </Text>
            </View>
          </View>
        ) : (
          <Text style={styles.uvIndexTitleText}>
            Please connect to a device
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={connectedDevice ? disconnectFromDevice : openModal}
        style={styles.ctaButton}
      >
        <Text style={styles.ctaButtonText}>
          {connectedDevice ? "Disconnect" : "Connect"}
        </Text>
      </TouchableOpacity>
      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  uvIndexTitleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uvIndexView: {
    borderRadius: 8,
  },
  uvIndexTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    color: "black",
  },
  uvIndexContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  uvIndexText: {
    fontSize: 25,
    marginTop: 15,
  },
  ctaButton: {
    backgroundColor: "#005b96",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default App;