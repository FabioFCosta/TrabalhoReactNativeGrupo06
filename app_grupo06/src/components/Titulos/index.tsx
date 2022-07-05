import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";

const TitulosHome = ({ titulo }) => {

  return (
    <Text style={styles.titulo}>{titulo}</Text>
  )
}

const styles = StyleSheet.create({
  titulo: {
    color: '#546EE5',
    fontWeight: 'bold',
    fontSize: 23,
  },
})

export default TitulosHome;