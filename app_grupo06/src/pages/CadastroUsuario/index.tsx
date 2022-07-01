import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Image, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

export const CadastroUsuario = () => {
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [senhaConfirm, setSenhaConfirm] = useState('')


   return (
      <View style={styles.container}>
         <Text style={styles.title}>Cadastro</Text>
         <View>
            <Image
               style={styles.imageStyle}
               source={{ uri: 'https://northmemorial.com/wp-content/uploads/2016/10/PersonPlaceholder.png' }}
            />
         </View>
         <View style={styles.addPhotoButton}>
            <TouchableOpacity >
               <View><Icon name="camera" color="#fff" type="font-awesome" size={24} /></View>
            </TouchableOpacity>
         </View>
         <Input
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Nome"
            placeholderTextColor={'#070D2D'}
            onChangeText={setNome}
            value={nome}
         />
         <Input
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Email"
            placeholderTextColor={'#070D2D'}
            onChangeText={setEmail}
            value={email}
         />
         <Input
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Senha"
            placeholderTextColor={'#070D2D'}
            onChangeText={setSenha}
            value={senha}
         />
         <Input
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Confirme sua Senha"
            placeholderTextColor={'#070D2D'}
            onChangeText={setSenhaConfirm}
            value={senhaConfirm}
         />
         <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Cadastrar</Text>
         </TouchableOpacity>
      </View >
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#070D2D',
      padding: 16,
      alignItems: 'center'
   },

   title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#FE5430',
      textAlign: 'center',
      marginTop: 40,
      marginBottom: 20
   },

   imageStyle: {
      width: 200,
      height: 200,
      borderRadius: 200,
      marginBottom: 20
   },

   addPhotoButton: {
      backgroundColor: '#FE5430',
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      marginTop: -70,
      marginLeft: 150,
      marginBottom: 30
   },

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
   },

   submitButton: {
      backgroundColor: '#06C1FF',
      borderRadius: 50,
      width: 200,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center'
   },

   submitButtonText: {
      fontSize: 24
   }
})