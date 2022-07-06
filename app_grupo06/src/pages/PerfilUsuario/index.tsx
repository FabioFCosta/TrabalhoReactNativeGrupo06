import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { Text, Image, Icon } from "react-native-elements";
import { ActionButton } from "../../components/ActionButton/ActionButton";

const PerfilUsuario = ({ navigation }) => {
  const { usuario } = useContext(AutenticacaoContext)

  const handleClickLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerPerfil}>
        {usuario.imagem != '' ? <Image style={styles.imagem_usuario} source={{ uri: usuario.imagem }} />
          :
          <Icon name="user-circle" color="#dddddd" type="font-awesome" size={200} />
        }
        <Text style={styles.nome_usuario}>{usuario.name}</Text>
        <Text style={styles.email_usuario}>{usuario.email}</Text>
        <ActionButton
          text='Logout'
          onPress={handleClickLogout}
        />
      </View>
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

  containerPerfil: {
    backgroundColor: '#C4DFE8',
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    padding: 30
  },

  imagem_usuario: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#070d2d'
  },

  nome_usuario: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#070d2d',
    marginBottom: 25
  },

  email_usuario: {
    fontSize: 25,
    color: '#FE5430',
    marginBottom: 40,
    marginLeft: 10,
  }
})

export default PerfilUsuario;