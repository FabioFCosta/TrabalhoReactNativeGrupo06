import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Image } from "react-native-elements";
import AxiosInstance from "../../api/AxiosInstance";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { InputTexto } from "../../components/InputTexto/InputTexto";

export const CadastroUsuario = () => {
   const [nomeUsuario, setNomeUsuario] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmSenha, setConfirmSenha] = useState('')
   const [fotoPerfil, setFotoPerfil] = useState('')


   const handleSubmit = async () => {
      console.log('Submit')
      // if (confirmSenha === senha) {
      //    console.log('Senha confirmada')
      //    const usuario = {
      //       nomeUsuario,
      //       email,
      //       senha
      //    }
      //    const formData = new FormData()
      //    formData.append('usuario', new Blob([JSON.stringify(usuario)]))
      //    formData.append('file', fotoPerfil)
      //    try {
      //       await AxiosInstance.post('autenticacao/registro', formData, {
      //          headers: {
      //             'Content-Type': 'multipart/form-data'
      //          }
      //       })
      //       console.log('Usuário cadastrado com sucesso');

      //       // fazer alert
      //    } catch (error) {
      //       console.log(error)
      //       // fazer alert
      //    }
      // } else {
      //    console.log('Senha incompatível')
      // }

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
            onChangeText={setNomeUsuario}
            value={nomeUsuario}
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