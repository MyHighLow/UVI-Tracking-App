import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
} from "react-native";

import Colors from "../constants/colors";

export default function UVInfoScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View ></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});