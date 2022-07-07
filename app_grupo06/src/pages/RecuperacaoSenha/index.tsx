import React, { useContext, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";

import { ActionButton } from "../../components/ActionButton/ActionButton";
import { AppLoader } from "../../components/AppLoader";
import { InputTexto } from "../../components/InputTexto/InputTexto";
import Voltar from "../../components/Voltar";

import { LoadingContext } from "../../context/LoadingContext";
import { ValidacaoContext } from "../../context/ValidacaoContext";

export const RecuperacaoSenha = ({ navigation }) => {
   const { loading, setLoading } = useContext(LoadingContext)
   const { confirmarSenha, validarSenha } = useContext(ValidacaoContext)

   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmSenha, setConfirmSenha] = useState('')

   const handleSubmit = async () => {
      if (
         !confirmarSenha(senha, confirmSenha) ||
         !validarSenha(senha)
      ) {
         return
      }

      setLoading(true)

      const usuario = {
         email,
         senha
      }

      try {
         await AxiosInstance.post('autenticacao/recuperar-senha', usuario)
         setLoading(false)
         Alert.alert(
            'Resolvido!',
            'Sua senha foi redefinida com sucesso.',
            [
               {
                  text: 'OK',
                  onPress: () => { navigation.navigate('Login') }
               }
            ]
         )
      } catch (error) {
         console.log(error)
         setLoading(false)
         Alert.alert(
            'Ops...',
            'Não foi possível redefinir a senha.',
            [
               { text: 'OK' }
            ]
         )
      }
   }

   return (
      <ScrollView contentContainerStyle={styles.container}>
         <Image source={{ uri: 'https://i0.wp.com/blog.credo.com/wp-content/uploads/2021/03/credo_tip_password_manager_email_950x483.png' }} style={styles.imagem} />
         <View style={styles.botaoVoltar}>
            <Voltar navigation={navigation} route='Login' color='#C4DFE8' size={32} />
         </View>
         <Text style={styles.title}>Recuperação de Senha</Text>
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
            text='Confirmar'
            onPress={handleSubmit}
         />
         {loading ? <AppLoader /> : null}
      </ScrollView >
   )
}

const styles = StyleSheet.create({
   container: {
      flexGrow: 1,
      backgroundColor: '#070D2D',
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center'
   },

   imagem: {
      width: 300,
      height: 200,
      borderRadius: 50
   },

   botaoVoltar: {
      position: 'absolute',
      top: 10,
      left: 10
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
      marginBottom: 40,
      width: '60%'
   }
})