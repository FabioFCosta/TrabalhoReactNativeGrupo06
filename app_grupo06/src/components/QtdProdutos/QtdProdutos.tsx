import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const QtdProdutos = (props) => {
  const { adicionarProduto, removerItem } = useContext(CarrinhoContext)
  const[quantidade,setQuantidade]=useState(0)

  useEffect(()=>{
    setQuantidade(props.quantidade)
  },[])

  const handleAddProduto = () => {
    adicionarProduto(props.produto)
    setQuantidade(quantidade+1)
    
  }

  const handleRemoveProduto = () => {
    removerItem(props.produto.idProduto)
    setQuantidade(quantidade-1)
  }

  return (
    <View style={styles.container}>
      {quantidade!=0?
      <TouchableOpacity>
        <Icon name="minus-circle" color="#06C1FF" type="font-awesome" size={30} onPress={() => handleRemoveProduto()} />
      </TouchableOpacity>
      :
      <TouchableOpacity>
        <Icon name="minus-circle" color="#C4DFE8" type="font-awesome" size={30} />
      </TouchableOpacity>
      }
      <Text style={styles.contador}>{quantidade}</Text>
      <TouchableOpacity>
        <Icon name="plus-circle" color="#06C1FF" type="font-awesome" size={30} onPress={() => handleAddProduto()} />
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