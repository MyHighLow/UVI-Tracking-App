import React, { useState } from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, ScrollView, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import UVInfoScreen from "./screens/UVInfoScreen";
import DebugScreen from "./screens/DebugScreen";

import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";

const BottomTab = createBottomTabNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <StatusBar
                animated={true}
                backgroundColor={Colors.primary100}
                barStyle="light-content"
            />
            <BottomTab.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.primary100 },
                    headerTitleAlign: "center",
                    headerTintColor: Colors.primary300,
                    tabBarStyle: {
                        backgroundColor: Colors.primary100
                    },
                    tabBarActiveTintColor: Colors.primary500,
                    tabBarInactiveTintColor: Colors.primary300,
                }}
            >
                <BottomTab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="About"
                    component={UVInfoScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="list" color={color} size={size} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Debug"
                    component={DebugScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="bug-outline" color={color} size={size} />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}