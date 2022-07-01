import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Produto = ({ route, navigation }) => {
  const { id_produto, sku, nome_produto, descricao_produto, imagem_produto, preco_produto } = route.params;
  const { adicionarProduto } = useContext(CarrinhoContext);
  console.log(imagem_produto)
  // _sku: string, _nome: string, _descricao: string, _preco: number, _imagem: string

  const handleAddProduto = () => {
    adicionarProduto(sku, nome_produto, descricao_produto, preco_produto, imagem_produto);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_imagem}>
        <Image source={{ uri: imagem_produto }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>Produto: {nome_produto}</Text>
        <Text style={styles.text}>Descrição: {descricao_produto}</Text>
        <View style={styles.container_buttons}>
          <TouchableOpacity style={styles.buttons} onPress={() => handleAddProduto()}>
            <Text>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} >
            <Text>Favoritar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Produto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1
  },
  container_imagem: {
    width: 300,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  container_produto: {
    width: '50%',
  },
  text: {
    color: '#000',
  }, 
  container_buttons:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginTop:10,
  },
  buttons: {
    width:100,
    height: 50,    
    backgroundColor:'#333',
    justifyContent:'center',
    alignItems:'center',
  }
});