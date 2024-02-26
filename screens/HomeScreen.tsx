import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import DeviceModal from "../components/DeviceConnectionsModal";
import useBLE from "../useBLE";
import UVScale from "../components/uvScale";


const App = () => {
    const {
        // destructure useBLE hook
        requestPermissions,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
        uvIndex,
        disconnectFromDevice,
    } = useBLE();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false); // state for modal
    // const [position, setPosition] = useState<number>(0); // state for uv index slider [0-10

    const scanForDevices = async () => {
        // scan for devices
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

    const getUvIndexColor = (indexStr: string): string => {
        // determine color based on uv index
        const indexNumber = Number(indexStr);
        const arrayOfColors = [
            "green",
            "green",
            "green",
            "yellow",
            "yellow",
            "yellow",
            "orange",
            "orange",
            "red",
            "red",
            "red",
        ];

        if (indexNumber > 10) {
            return "purple";
        }
        return arrayOfColors[indexNumber];
    };

    const getPosition = (indexStr: string): number => {
        if (indexStr === "10" || indexStr === "11" || indexStr === "12") {
            return 354;
        }

        return Number(indexStr) * 35 + 4;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#ffffff"
                barStyle="light-content"
            />
            <View style={styles.uvIndexTitleWrapper}>
                {connectedDevice ? (
                    <View style={styles.uvIndexView}>
                        <Text style={styles.uvIndexTitleText}>UV Index</Text>
                        <View
                            style={[
                                styles.uvIndexContainer,
                                { backgroundColor: getUvIndexColor(uvIndex) },
                            ]}
                        >
                            <Text style={styles.uvIndexText}>{uvIndex}</Text>
                        </View>
                        <UVScale />
                        <View
                            style={[
                                styles.arrowView,
                                { left: getPosition(uvIndex) },
                            ]}
                        >
                            <Ionicons name="triangle" size={25} color="black" />
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
        backgroundColor: "white",
    },
    uvIndexTitleWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    uvIndexView: {
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    uvIndexTitleText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 20,
        color: "black",
    },
    uvIndexContainer: {
        height: 90,
        width: 65,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
    },
    uvIndexText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    arrowView: {
        position: "absolute",
        top: 200,
    },
    ctaButton: {
        backgroundColor: Colors.primary200,
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
