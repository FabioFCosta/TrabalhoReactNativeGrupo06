import React from "react";
import { View, StyleSheet } from "react-native";

import LottieView from 'lottie-react-native';

export const AppLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView source={require('../../assets/blocks-loader.json')} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: '#000000bd',
  },
});
