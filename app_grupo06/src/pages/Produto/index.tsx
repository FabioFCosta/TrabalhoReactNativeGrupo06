import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Produto = ({ route, navigation }) => {
  const{id_produto,sku,nome_produto,descricao_produto,imagem_produto,preco_produto}=route.params;
  const { adicionarProduto } = useContext(CarrinhoContext);

  // _sku: string, _nome: string, _descricao: string, _preco: number, _imagem: string

  const handleAddProduto = () => {
    adicionarProduto(sku, nome_produto, descricao_produto, preco_produto, imagem_produto);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_imagem}>
        <Text style={styles.text}>Imagem</Text>
      </View>
      <View>
        <Text>{ }</Text>
        <Text>{ }</Text>
        <TouchableOpacity onPress={()=> handleAddProduto()}>
          <Text style={styles.text}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Favoritar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Produto;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    padding:16,
    alignItems:'stretch',
    justifyContent:'space-between',
    flexGrow:1
  },
  container_imagem:{
    width:'50%',
  },
  container_produto:{
    width:'50%',
  },

  text : {
    color:'#000',
  }
});