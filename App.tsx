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

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import UVInfoScreen from "./screens/UVInfoScreen";

const BottomTab = createBottomTabNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "white" },
                    headerTintColor: "white",
                    tabBarStyle: {
                        backgroundColor: "white"
                    },
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "black",
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
                    name="Details"
                    component={UVInfoScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="list" color={color} size={size} />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}