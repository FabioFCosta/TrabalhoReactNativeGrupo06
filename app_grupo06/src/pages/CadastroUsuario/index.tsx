import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Image } from "react-native-elements";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { InputTexto } from "../../components/InputTexto/InputTexto";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";

export const CadastroUsuario = () => {
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmSenha, setConfirmSenha] = useState('')
   const { usuario } = useContext(AutenticacaoContext)

   const handleSubmit = () => {
      console.log('Submit')
      if (confirmSenha === senha) {
         return console.log('senha confirmada')
      } else {
         return console.log('senha incompatível')
      }

      // const usuario = {
      //    nome,
      //    email,
      //    senha
      // }
      // const formData = new FormData()
      // formData.append('usuario', new Blob([JSON.stringify(usuario)], { type: 'application/json' }))
      // formData.append('file', fotoPerfil)
      // try {
      //    await api.post('produto/com-foto', formData, {
      //       headers: {
      //          'accept': 'application/json',
      //          'Content-Type': 'multipart/form-data'
      //       }
      //    })
      //    alert('Produto cadastrado com sucesso!')
      // } catch (error) {
      //    console.log(error);
      //    alert(error.response.data.message + ' ' + error.response.data.details)
      // }
   }

   return (
      <ScrollView contentContainerStyle={styles.container}>
         <Text style={styles.title}>Cadastro</Text>
         <View>
            <Image
               style={styles.imageStyle}
               source={{ uri: 'https://northmemorial.com/wp-content/uploads/2016/10/PersonPlaceholder.png' }}
            />
         </View>
         <View style={styles.addPhotoButton}>
            <TouchableOpacity>
               <Icon name="camera" color="#fff" type="font-awesome" size={24} />
            </TouchableOpacity>
         </View>
         <InputTexto
            secureTextEntry={false}
            placeholder='Nome'
            onChangeText={setNome}
            value={nome}
         />
         <InputTexto
            secureTextEntry={false}
            placeholder='E-mail'
            onChangeText={setEmail}
            value={email}
         />
         <InputTexto
            secureTextEntry={true}
            placeholder='Senha'
            onChangeText={setSenha}
            value={senha}
         />
         <InputTexto
            secureTextEntry={true}
            placeholder='Confirme sua senha'
            onChangeText={setConfirmSenha}
            value={confirmSenha}
         />
         <ActionButton
            text='Cadastrar'
            onPress={handleSubmit}
         />
      </ScrollView >
   )
}

const styles = StyleSheet.create({
   container: {
      flexGrow: 1,
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
   }
})