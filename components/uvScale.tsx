import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UVScale = () => {
    return (
        <View style={styles.uvScale}>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "green",
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        borderLeftWidth: 2,
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>0</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "green",
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>1</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "green",
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>2</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "yellow",
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>3</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "yellow",
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>4</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "yellow",
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>5</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "orange",
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>6</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "orange",
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>7</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "red",
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>8</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "red",
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>9</Text>
            </View>
            <View
                style={[
                    styles.uvScaleSection,
                    {
                        backgroundColor: "red",
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                    },
                ]}
            >
                <Text style={styles.uvScaleText}>10+</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    uvScale: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        width: "75%",
        marginVertical: 20,
    },
    uvScaleSection: {
        height: 50,
        width: 35,
        borderColor: "black",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderEndWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    uvScaleText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
});
export default UVScale;
