import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { InputTexto } from "../../components/InputTexto/InputTexto";

export const RecuperacaoSenha = () => {
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmSenha, setConfirmSenha] = useState('')

   const handleSubmit = async () => {
      console.log('Submit')
      if (confirmSenha === senha) {
         console.log('Senha confirmada')
         const usuario = {
            email,
            senha
         }
         try {
            await AxiosInstance.post('autenticacao/recuperar-senha', usuario)
            Alert.alert(
               'Sucesso:',
               'Senha redefinida com sucesso.',
               [
                  { text: 'OK' }
               ]
            )
         } catch (error) {
            console.log(error)
            Alert.alert(
               'Erro:',
               'Erro ao redefinir a senha.',
               [
                  { text: 'OK' }
               ]
            )
         }
      } else {
         console.log('Senha incompatível')
         Alert.alert(
            'Erro:',
            'Senha não confirmada.',
            [
               { text: 'OK' }
            ]
         )
      }
   }

   return (
      <ScrollView contentContainerStyle={styles.container}>
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