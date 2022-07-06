import React, { useContext, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { AppLoader } from "../../components/AppLoader";
import { InputTexto } from "../../components/InputTexto/InputTexto";
import Voltar from "../../components/Voltar";
import { LoadingContext } from "../../context/LoadingContext";

export const RecuperacaoSenha = ({ navigation }) => {
   const { loading, setLoading } = useContext(LoadingContext)

   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmSenha, setConfirmSenha] = useState('')

   const handleSubmit = async () => {
      if (confirmSenha === senha) {
         setLoading(true)
         const usuario = {
            email,
            senha
         }
         try {
            await AxiosInstance.post('autenticacao/recuperar-senha', usuario)
            setLoading(false)
            Alert.alert(
               'Sucesso:',
               'Senha redefinida com sucesso.',
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
               'Erro:',
               'Erro ao redefinir a senha.',
               [
                  { text: 'OK' }
               ]
            )
         }
      } else {
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
      <>
         <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.botaoVoltar}>
               <Voltar navigation={navigation} route='Login' />
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
      </>
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