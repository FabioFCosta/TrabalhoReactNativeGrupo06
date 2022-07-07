import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Voltar = ({ navigation, route, color, size }) => {

  const handleVoltar = () => {
    navigation.navigate(route)
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="chevron-circle-left" color={color} type="font-awesome" size={size} onPress={() => handleVoltar()} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',    
  },

});
export default Voltar;