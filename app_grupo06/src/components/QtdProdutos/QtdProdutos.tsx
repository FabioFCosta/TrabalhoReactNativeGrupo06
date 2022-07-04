import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const QtdProdutos = (props) => {
  const { adicionarProduto } = useContext(CarrinhoContext)

  const handleAddProduto = () => {
    adicionarProduto(props.produto)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="minus-circle" color="#06C1FF" type="font-awesome" size={30} />
      </TouchableOpacity>
      <Text style={styles.contador}>{props.quantidade}</Text>
      <TouchableOpacity>
        <Icon name="plus-circle" color="#06C1FF" type="font-awesome" size={30} onPress={()=>handleAddProduto()} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contador: {
    fontSize: 20,
    color: '#06C1FF',
  }

})

export default QtdProdutos;