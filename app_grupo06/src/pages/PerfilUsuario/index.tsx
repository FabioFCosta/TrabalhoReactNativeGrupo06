import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { Text, Image, Icon } from "react-native-elements";

const PerfilUsuario = ({ navigation }) => {
  const { usuario } = useContext(AutenticacaoContext)
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    usuarioHasImage();
  }, []);

  const usuarioHasImage = () => {
    console.log(usuario.imagem)
    usuario.imagem === undefined ? setHasImage(false) : setHasImage(true);
  }
  const handleClickLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
       {hasImage ? <Image style={styles.imagem_usuario} source={{uri:usuario.imagem}} />
            :
            <Icon name="user-circle" color="#dddddd" type="font-awesome" size={200} />
          }
      <Text style={styles.nome_usuario}>{usuario.name}</Text>
      <Text style={styles.email_usuario}>{usuario.email}</Text>
      <TouchableOpacity style={styles.submitButton} onPress={handleClickLogout}>
        <Text style={styles.submitButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070D2D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem_usuario: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 25,
  },
  nome_usuario: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#C4DFE8',
    marginBottom: 25,
  },
  email_usuario: {
    fontSize: 25,
    color: '#FE5430',
    marginBottom: 25,
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
    fontWeight: 'bold',
  },

})

export default PerfilUsuario;