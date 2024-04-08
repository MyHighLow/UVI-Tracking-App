/** Make info more user friendly and easy to read add chart to display what numbers and colors mean 
 * maybe add info like burn time, protection methods and harm levels
 */

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

export default function UVInfoScreen() {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.UVView}>
                    <View style={styles.aboutView}>
                        <View style={[styles.indexView,{backgroundColor: "green"}]}>
                            <Text style={styles.aboutText}>
                                0-2
                            </Text>
                        </View>
                        <View style={styles.infoView}>
                                <Text style={styles.aboutText}>
                                Safe
                            </Text>
                        </View>
                    </View>
                    <View style={styles.aboutView}>
                        <View style={[styles.indexView,{backgroundColor: "yellow"}]}>
                            <Text style={styles.aboutText}>
                                3-5
                            </Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.aboutText}>
                                Moderate
                            </Text>
                        </View>
                    </View>
                    <View style={styles.aboutView}>
                        <View style={[styles.indexView,{backgroundColor: "orange"}]}>
                            <Text style={styles.aboutText}>
                                6-7
                            </Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.aboutText}>
                                High
                            </Text>
                        </View>
                    </View>
                    <View style={styles.aboutView}>
                        <View style={[styles.indexView,{backgroundColor: "red"}]}>
                            <Text style={styles.aboutText}>
                                8-10
                            </Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.aboutText}>
                                Very High
                            </Text>
                        </View>
                    </View>
                </View>
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
        fontSize: 20,
    },
});