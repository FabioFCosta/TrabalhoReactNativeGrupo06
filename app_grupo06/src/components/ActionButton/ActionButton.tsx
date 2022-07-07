import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ActionButton = (props) => {

   return (
      <TouchableOpacity onPress={props.onPress} style={styles.submitButton}>
         <Text style={styles.submitButtonText}>{props.text}</Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   submitButton: {
      backgroundColor: '#06C1FF',
      borderRadius: 50,
      width: 220,
      paddingHorizontal: 10,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: '#070D2D'
   },

   submitButtonText: {
      color: '#070D2D',
      fontSize: 24,
      fontWeight: 'bold'
   }
})