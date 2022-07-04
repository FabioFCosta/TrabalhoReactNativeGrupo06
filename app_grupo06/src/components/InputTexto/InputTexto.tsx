import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

export const InputTexto = (props) => {

   return (
      <Input
         inputContainerStyle={styles.inputContainerStyle}
         inputStyle={styles.inputStyle}
         secureTextEntry={props.secureTextEntry}
         placeholder={props.placeholder}
         placeholderTextColor={'#070d2d5c'}
         onChangeText={props.onChangeText}
         value={props.value}
      />
   )
}

const styles = StyleSheet.create({
   inputContainerStyle: {
      backgroundColor: '#C4DFE8',
      borderRadius: 50,
      justifyContent: 'center',
      height: 60
   },

   inputStyle: {
      color: '#070D2D',
      textAlign: 'center',
      fontSize: 24,
   }
})