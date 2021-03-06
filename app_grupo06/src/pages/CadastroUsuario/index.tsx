import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Icon, Image } from "react-native-elements";
import AxiosInstance from "../../api/AxiosInstance";

import Voltar from "../../components/Voltar";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { InputTexto } from "../../components/InputTexto/InputTexto";
import { AppLoader } from "../../components/AppLoader";

import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { LoadingContext } from "../../context/LoadingContext";
import { ValidacaoContext } from "../../context/ValidacaoContext";

import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from "react-native-image-picker";
import { getStorage, ref, uploadBytes } from 'firebase/storage'

export const CadastroUsuario = ({ navigation }) => {
   const { fotoPerfil, setFotoPerfil } = useContext(AutenticacaoContext)
   const { loading, setLoading } = useContext(LoadingContext)
   const { confirmarSenha, validarSenha, validarNomeUsuario, validarEmail } = useContext(ValidacaoContext)

   const [nomeUsuario, setNomeUsuario] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmSenha, setConfirmSenha] = useState('')

   const handleFotoPerfil = () => {
      Alert.alert(
         'Fique bem na foto! ;)',
         'Informe como deseja obter a foto:',
         [
            {
               text: 'Cancelar',
               style: 'cancel'
               // cancelable: true,
               // onDismiss: () => console.log('tratar depois')
            },
            {
               text: 'Galeria',
               onPress: () => pickImageFromGallery(),
               style: 'default'
            },
            {
               text: 'Câmera',
               onPress: () => pickImageFromCamera(),
               style: 'destructive'
            }
         ])
   }

   const pickImageFromGallery = async () => {
      const options: ImageLibraryOptions = {
         mediaType: 'photo'
      }
      const result = await launchImageLibrary(options)
      if (result?.assets) {
         setFotoPerfil({ uri: result.assets[0].uri!, type: result.assets[0].type!, name: result.assets[0].fileName! })
      }
   }

   const pickImageFromCamera = async () => {
      const options: CameraOptions = {
         mediaType: 'photo',
         saveToPhotos: false,
         cameraType: 'front',
         quality: 1
      }
      const result = await launchCamera(options)
      if (result?.assets) {
         setFotoPerfil({ uri: result.assets[0].uri!, type: result.assets[0].type!, name: result.assets[0].fileName! })
      }
   }

   const handleUploadImage = async () => {
      const storage = getStorage()
      const reference = ref(storage, nomeUsuario)

      const img = await fetch(fotoPerfil.uri)
      const bytes = await img.blob()

      await uploadBytes(reference, bytes)
   }

   const handleSubmit = async () => {
      if (
         !validarNomeUsuario(nomeUsuario) ||
         !validarEmail(email) ||
         !validarSenha(senha) ||
         !confirmarSenha(senha, confirmSenha)
      ) {
         return
      }

      setLoading(true)

      const usuario = {
         nomeUsuario,
         email,
         senha
      }

      const formData = new FormData()
      formData.append('usuario', JSON.stringify(usuario))
      formData.append('file', { uri: fotoPerfil.uri, type: fotoPerfil.type, name: fotoPerfil.name })

      try {
         await AxiosInstance.post('autenticacao/registro', formData, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         })
         handleUploadImage()
         setLoading(false)
         Alert.alert(
            'Obrigado!',
            'Seu cadastro foi um sucesso.',
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
            'Não foi possível realizar o cadastro.',
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
               <Voltar navigation={navigation} route='Login' color='#C4DFE8' size={32} />
            </View>
            <Text style={styles.title}>Cadastro</Text>
            <View>
               <Image
                  style={styles.imageStyle}
                  source={{ uri: fotoPerfil.uri }}
               />
            </View>
            <View style={styles.addPhotoButton}>
               <TouchableOpacity onPress={handleFotoPerfil}>
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
         {loading ? <AppLoader /> : null}
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

   title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#FE5430',
      textAlign: 'center',
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