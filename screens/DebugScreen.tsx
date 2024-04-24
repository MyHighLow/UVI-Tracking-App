import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, AsyncStorage} from "react-native"; 
import  Svg, { Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Image, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask, } from 'react-native-svg';
import Colors from "../constants/colors";
import BarGraph from '../components/BarGraph';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AsyncStorage} from "@react-native-async-storage/async-storage";


export default function DebugScreen() {
    let dataArray1 = [
      {value: 3, legend: "Su"},
      {value: 2, legend: "Mo"},
      {value: 2, legend: "Tu"},
      {value: 3, legend: "We"},
      {value: 2, legend: "Th"},
      {value: 5, legend: "Fr"},
      {value: 0, legend: "Sa"}];

    // if (getObject("year") === null) {
    //     storeTestData();
    // };

    // dataArray1 = getObject("week").data;

    // console.log(getObject("week"));
    // let weekdata =  AsyncStorage.getItem("week");
    // console.log(weekdata);

    return (
        // <SafeAreaView style={{borderWidth:1, borderColor:"black", borderStyle:"solid"}}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>Exposure History</Text>
            <View style={styles.graphContainer}>
              <BarGraph dataArray={dataArray1}/>
            </View>
        </SafeAreaView>
    );
}


const getObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch(e) {
    // read error
    console.log("ERROR running getMyObject");
  }
};

const setObject = async (key:string, obj: object) => {
  try {
    const jsonValue = JSON.stringify(obj)
    await AsyncStorage.setItem(key, jsonValue)
  } catch(e) {
    console.log('ERROR running storeObject.')
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    alert('Storage successfully cleared!');
  } catch (e) {
    alert('Failed to clear the async storage.');
  }
};

let storeTestData = function() {
  clearStorage();

  let yearObj = {
    year : 2024,
    data : [
      {value: 1, legend:"Ja"},
      {value: 4, legend:"Fe"},
      {value: 3, legend:"Mr"},
      {value: 0, legend:"Ap"},
      {value: 0, legend:"My"},
      {value: 0, legend:"Jn"},
      {value: 0, legend:"Jl"},
      {value: 0, legend:"Au"},
      {value: 0, legend:"Se"},
      {value: 0, legend:"Oc"},
      {value: 0, legend:"Nv"},
      {value: 0, legend:"De"}]
  };

  let monthObj = {
    month : 4,
    daysInMonth : 30,
    data : [
      {value: 3, legend: ""},
      {value: 4, legend: ""},
      {value: 3, legend: ""},
      {value: 2, legend: ""},
      {value: 3, legend: ""},
      {value: 4, legend: ""},
      {value: 3, legend: ""},
      {value: 2, legend: ""},
      {value: 2, legend: ""},
      {value: 2, legend: ""},
      {value: 3, legend: ""},
      {value: 5, legend: ""},
      {value: 1, legend: ""},
      {value: 3, legend: ""},
      {value: 2, legend: ""},
      {value: 2, legend: ""},
      {value: 3, legend: ""},
      {value: 2, legend: ""},
      {value: 5, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""}]
  };

  let weekObj = {
    weekDate : "4/14/24",
    data : [
      {value: 3, legend: "Su"},
      {value: 2, legend: "Mo"},
      {value: 2, legend: "Tu"},
      {value: 3, legend: "We"},
      {value: 2, legend: "Th"},
      {value: 5, legend: "Fr"},
      {value: 0, legend: "Sa"}]
  };

  let dayObj = {
    day : 19,
    data : [
      {value: 0, legend: ""},
      {value: 4, legend: ""},
      {value: 4, legend: ""},
      {value: 4, legend: ""},
      {value: 4, legend: ""},
      {value: 3, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 5, legend: ""},
      {value: 5, legend: ""},
      {value: 3, legend: ""},
      {value: 0, legend: ""},
      {value: 5, legend: ""},
      {value: 5, legend: ""},
      {value: 2, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""},
      {value: 0, legend: ""}]
  };

  setObject("year", yearObj);
  setObject("month", monthObj);
  setObject("week", weekObj);
  setObject("day", dayObj);

};

let getDataArray = function(scope : string) {
  let jsd = getObject(scope);
  return jsd.data;
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary300,
    },
    graphContainer: {
        width: '90%', // Set the width of the container to 50% of its parent's width
        height: "50%", // Set a fixed height for the container
        alignSelf: "center",
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        backgroundColor: "white",
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 40,
        alignSelf: "center",
    },

});