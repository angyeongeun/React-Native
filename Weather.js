import React from "react";
import { StyleSheet, Text, View } from "react-native";
import propTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';

export default function Weather({temp}){
    return( 
    <View style={styles.container}>
        <View style={styles.halfContainer}>
            <Ionicons name="ios-sunny" size={100} color="black" />
            <Text style={styles.text}>{temp}</Text>
        </View>
        <View style={styles.halfContainer}/>

    </View>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm", "Drizzle", "Rain", "Snow" , "Atmosphere", "Clear", "Cloud"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d0ac76"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30


    }
})
