import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon, Image, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";

export const CadastroUsuario = () => {
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmSenha, setConfirmSenha] = useState('')
   const { usuario, setUsuario } = useContext(AutenticacaoContext)

   const confirmarSenha = (senha: string) => {
      setConfirmSenha(confirmSenha)
      console.log('Senha: ' + senha)
      console.log('Senha confirm: ' + confirmSenha)
      if (confirmSenha === senha) {
         return console.log('senha confirmada')
      } else {
         return console.log('senha incompatível')
      }
   }

   const handleSubmit = () => {
      console.log('Submit')
   }

   return (
      <ScrollView
         style={styles.container}
         contentContainerStyle={styles.contentContainer}
      >
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
            placeholder='Nome'
            placeholderTextColor={'#070d2d5c'}
            onChangeText={setNome}
            value={nome}
         />
         <Input
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Email"
            placeholderTextColor={'#070d2d5c'}
            onChangeText={setEmail}
            value={email}
         />
         <Input
            // secureTextEntry={true}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Senha"
            placeholderTextColor={'#070d2d5c'}
            onChangeText={setSenha}
            value={senha}
         />
         <Input
            // secureTextEntry={true}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder="Confirme sua senha"
            placeholderTextColor={'#070d2d5c'}
            onChangeText={confirmarSenha}
            value={confirmSenha}
         />
         <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText} onPress={handleSubmit}>Cadastrar</Text>
         </TouchableOpacity>
      </ScrollView >
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#070D2D',
      padding: 16
   },

   contentContainer: {
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
      fontSize: 24,
      fontWeight: 'bold'
   }
})