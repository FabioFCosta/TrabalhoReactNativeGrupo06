import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const AddCarrinho = ({produto}) => {
  const { adicionarProduto } = useContext(CarrinhoContext);

  const handleAddProduto=()=>{    
    console.log(produto.sku)
    adicionarProduto(produto.sku,produto.nomeProduto,produto.descricaoProduto,produto.precoProduto,produto.imagemProduto)
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={require('../../assets/BotãoAddCarrinho.png')} onPress={() =>handleAddProduto()} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
});
export default AddCarrinho;