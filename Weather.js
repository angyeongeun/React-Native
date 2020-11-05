import React from "react";
import { StyleSheet, Text, View } from "react-native";
import propTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

const weatherOptions = {

    Thunderstorm: {
        iconName: "ios-thunderstorm",
        backgroundColor: "#6c6080",
        title: "천둥치는 날씨네요!⚡",
        sub: "벼락을 맞지않도록 조심하세요"
    },
    Clear: {
        iconName: "ios-sunny",
        backgroundColor: "#d2b41e",
        title: "화창한 날씨군요!😎",
        sub: "선크림을 챙겨바르세요"
    },
    Clouds: {
        iconName: "ios-cloud",
        backgroundColor: "#69695f",
        title: "☁ 구름낀 날씨군요 ☁",
        sub: "우산을 챙기시죠"
    },
    Rain: {
        iconName: "ios-rainy",
        backgroundColor: "#11457f",
        title: "비가 오는군요🌂",
        sub: "머리가 빠지지 않도록 조심하세요"
    },
    Snow: {
        iconName: "ios-snow",
        backgroundColor: "#d8e4f1",
        title: "눈이 오는군요!⛄",
        sub: "밖에 나가 눈사람을 만듭시다!"
    }


    

}


export default function Weather({temp, condition}){
    return( 
    <View backgroundColor={weatherOptions[condition].backgroundColor} style={styles.container}>
        <View style={styles.halfContainer}>
            <Ionicons name={weatherOptions[condition].iconName} size={100} color="black" />
            <Text style={styles.text}>{temp}°</Text>
        </View>
        <View style={styles.halfContainer}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.sub}>{weatherOptions[condition].sub}</Text>
            </View>
        
        </View>

   
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",  "Rain", "Snow" ,  "Clear", "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30
    },
    title: {
        fontSize: 36,
        fontWeight: "600"

    },
    sub: {
        fontSize: 17,
        fontWeight: "600"
    }

})
