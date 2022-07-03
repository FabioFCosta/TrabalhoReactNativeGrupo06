import React, { useContext, useState } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { ProdutoContext } from "../../context/ProdutoContext";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";

const CardCategoria = (props) => {
  const { produto } = useContext(ProdutoContext);
  const { setFilterProd } = useContext(ProdutoContext);

  const handleClick = () => {
    setFilterProd(produto.filter(item => item.nomeCategoria === props.categoria.nomeCategoria))
  }

  return (
    <TouchableOpacity
      onPress={() => handleClick()}
    >
      <View style={styles.container_categoria}>
        <Text style={styles.texto_nome_categoria}>{props.categoria.nomeCategoria}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container_categoria: {
    width: 100,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#546EE5',
    alignContent: 'center',
    justifyContent: 'center',

  },
  texto_nome_categoria: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default CardCategoria;