import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Icon, Image } from "react-native-elements";
import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from "react-native-image-picker";
import AxiosInstance from "../../api/AxiosInstance";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { InputTexto } from "../../components/InputTexto/InputTexto";
import Voltar from "../../components/Voltar";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { getStorage, ref, uploadBytes } from 'firebase/storage'


export const CadastroUsuario = ({ navigation }) => {
   const [nomeUsuario, setNomeUsuario] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmSenha, setConfirmSenha] = useState('')
   // const [fotoPerfil, setFotoPerfil] = useState('https://northmemorial.com/wp-content/uploads/2016/10/PersonPlaceholder.png')
   const { fotoPerfil, setFotoPerfil } = useContext(AutenticacaoContext)
   // const [fotoPerfil, setFotoPerfil] = useState({ uri: 'https://northmemorial.com/wp-content/uploads/2016/10/PersonPlaceholder.png', type: 'image/jpeg', name: 'emptyProfilePhoto' })
   // const [resultadoFoto, setResultadoFoto] = useState({})

   const handleFotoPerfil = () => {
      Alert.alert('Selecione', 'Informe como você deseja obter a foto:',
         [
            {
               text: 'Galeria',
               onPress: () => pickImageFromGallery(),
               style: 'default'
            },
            {
               text: 'Câmera',
               onPress: () => pickImageFromCamera(),
               style: 'default'
            },
            {
               text: 'Cancelar'
               // cancelable: true,
               // onDismiss: () => console.log('tratar depois')
            }
         ])
   }

   const pickImageFromGallery = async () => {
      const options: ImageLibraryOptions = {
         mediaType: 'photo'
      }

      const result = await launchImageLibrary(options)
      console.log('TESTE: ' + JSON.stringify(result));

      if (result?.assets) {
         // setFotoPerfil(result.assets[0].uri!)
         setFotoPerfil({ uri: result.assets[0].uri!, type: result.assets[0].type!, name: result.assets[0].fileName! })
         // setResultadoFoto(result.assets[0])
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
         // setFotoPerfil(result.assets[0].uri!)
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
      console.log('Submit')
      if (confirmSenha === senha) {
         console.log('Senha confirmada')
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
            Alert.alert(
               'Sucesso:',
               'Usuário cadastrado com sucesso.',
               [
                  {
                     text: 'OK',
                     onPress: () => { navigation.navigate('Login') }
                  }
               ]
            )
         } catch (error) {
            console.log(error)
            Alert.alert(
               'Erro:',
               'Não foi possível cadastrar o usuário.',
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
      <ScrollView contentContainerStyle={styles.container}>
         <View style={styles.botaoVoltar}>
            <Voltar navigation={navigation} route='Login' />
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