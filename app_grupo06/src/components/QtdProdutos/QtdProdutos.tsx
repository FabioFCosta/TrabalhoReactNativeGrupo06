import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const QtdProdutos = () => {
  const [quantidade, setQuantidade] = useState(0);

  const handleAddProduto = () => {
    setQuantidade(quantidade + 1);
  }

  const handleSubProduto = () => {
    quantidade != 0 ? setQuantidade(quantidade - 1) : 0;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="minus-circle" color="#06C1FF" type="font-awesome" size={30} onPress={() => handleSubProduto()} />
      </TouchableOpacity>
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
    fontSize:20,
    color:'#06C1FF',
  }

})

export default QtdProdutos;