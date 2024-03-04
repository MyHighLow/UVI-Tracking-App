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
            <ScrollView style={styles.scrollView}>
                <Text style={styles.sectionText}>What is UV Index?</Text>
                <Text style={styles.paragraph}>
                    The UV Index is a measure of the strength of the sun's ultraviolet (UV) rays. It is a
                    scale primarily used in daily forecasts aimed at the general public. The UV Index scale
                    was developed by Canadian scientists in 1992, and then adopted and standardized by the
                    United Nations World Health Organization and World Meteorological Organization in 1994.
                </Text>
                <Text style={styles.paragraph}>
                    The UV Index is a useful tool for sun protection and is increasingly used to inform the public
                    about the daily UV levels. It is also used to inform the public about the need to use sun
                    protection and sunburn prevention measures, such as sunscreen, hats, protective clothing,
                    sunglasses, and shade.
                </Text>
                <Text style={styles.paragraph}>
                    The UV Index is a linear scale, with higher values representing a greater risk of harm from
                    unprotected sun exposure. A UV Index reading of 0 to 2 means low danger from the sun's UV rays
                    for the average person. A UV Index reading of 3 to 5 means moderate risk of harm from unprotected
                    sun exposure. A UV Index reading of 6 to 7 means high risk of harm from unprotected sun exposure.
                    A UV Index reading of 8 to 10 means very high risk of harm from unprotected sun exposure. A UV
                    Index reading of 11 or more means extreme risk of harm from unprotected sun exposure.
                </Text>
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
    scrollView: {
    },
    sectionText: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 20,
    },
    paragraph: {
        fontSize: 16,
        margin: 20,
    },
});