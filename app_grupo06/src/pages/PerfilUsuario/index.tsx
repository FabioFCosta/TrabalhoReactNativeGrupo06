import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { Text, Image } from "react-native-elements";

const PerfilUsuario = () => {
  const { usuario } = useContext(AutenticacaoContext)

  const handleClickLogout = () => {

  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: usuario.imagem }} style={styles.imagem_usuario} />
      <Text style={styles.nome_usuario}>{usuario.name}</Text>
      <Text style={styles.email_usuario}>{usuario.email}</Text>
      <TouchableOpacity style={styles.submitButton} onPress={() => handleClickLogout}>
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
    borderRadius:100,
    marginBottom:25,
  },
  nome_usuario: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#C4DFE8',
    marginBottom:25,
  },
  email_usuario: {
    fontSize: 25,
    color: '#FE5430',
    marginBottom:25,
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
    fontWeight:'bold',
  },

})

export default PerfilUsuario;