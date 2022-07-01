import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const AddCarrinho = ({ produto }) => {
  const { adicionarProduto } = useContext(CarrinhoContext);

  const handleAddProduto = () => {
    console.log(produto.sku)
    adicionarProduto(produto.sku, produto.nomeProduto, produto.descricaoProduto, produto.precoProduto, produto.imagemProduto)
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="plus-circle" color="#fe5430" type="font-awesome" size={30} onPress={() => handleAddProduto()} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
  },

});
export default AddCarrinho;