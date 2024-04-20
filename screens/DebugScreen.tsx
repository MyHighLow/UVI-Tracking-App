import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar,} from "react-native"; 
import  Svg, { Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';
import Colors from "../constants/colors";
import BarGraph from '../components/BarGraph';

export default function DebugScreen() {
    const dataArray1 = [
        {value: 200, legend: '', },
        {value: 300, legend: '', },
        {value: 700, legend: '', },
        {value: 500, legend: '', },
      ];
    return (
        <SafeAreaView>
                <Text style={styles.aboutText}>DEBUG</Text>
                <View style={{
                    width: "75%",
                    height: "50%",
                }}>
                    <BarGraph dataArray={dataArray1}/>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%', // Set the width of the container to 50% of its parent's width
        height: 200, // Set a fixed height for the container
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
    },
    aboutText: {
        fontWeight: "bold",
        fontSize: 40,
    },

});