import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yelloView}></View>
      <View style={styles.blueView}></View>
      <Text>Hello buddy~</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yelloView: {
    flex: 0.4,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 2,
    backgroundColor: "blue"
  }
});
