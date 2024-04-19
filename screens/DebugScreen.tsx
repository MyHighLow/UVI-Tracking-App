import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
} from "react-native";

import Colors from "../constants/colors";
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
// import {LineChart} from 'react-native-charts-wrapper';

export default function DebugScreen() {
    const data=[ {value:50}, {value:80}, {value:90}, {value:70} ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.aboutText}>DEBUG</Text>
                <View style={{flex: 1}}>
                    <View style={styles.container}>
                    {/* <LineChart data={{dataSets:[{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}} /> */}
                    <BarChart data = {data} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary300,
        alignItems: "center",
        justifyContent: "center",
    },
    UVView: {
        flex: 1,
        width: "90%",
        paddingVertical: "5%",
        alignItems: "center",
        justifyContent: "center",
    },
    aboutView: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    indexView: {
        flex: 1,
        width:"50%",
        height: "50%",
        borderColor: "black",
        borderWidth: 2,
        
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    infoView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "50%",
        marginLeft: "2%",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
    },
    aboutText: {
        fontWeight: "bold",
        fontSize: 40,
    },
});