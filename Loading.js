import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>I'm getting weather 🔆</Text>       
        </View>
    );
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 65,
        padding: 310,
        backgroundColor: "#8dc4bf"
    },
    text: {
        color: "#305c64",
        fontSize: 25


    }

});