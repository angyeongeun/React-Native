import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const KEY = "a90fdfaca98889b4006a20dcf7698513";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (lat,lon) => {
    // console.log("lalng :" + lat);
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
      );
     this.setState({isLoading: false,
     condition: "Clear",
      temp: data.main.temp});

  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: {latitude, longitude} 
        } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
      console.log(latitude,longitude);

    } catch (error) {
      Alert.alert("nope!");
    }

  };

  componentDidMount(){
    this.getLocation();
    

  }

  render() {
    const { isLoading, temp , condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

