import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Voltar = ({navigation}) => {
  
  const handleVoltar = () => {
    navigation.navigate('HomeScreen')
  }

  return (
    <TouchableOpacity style={styles.container}>
        <Icon name="chevron-circle-left" color="#eee" type="font-awesome" size={30} onPress={() => handleVoltar()} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
  },

});
export default Voltar;