import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const RemoverCarrinho = (props) => {
  const { deletarProduto } = useContext(CarrinhoContext);
  
  const handleRemoverProduto =()=>{   
    console.log(props.produto.nome_produto+"dentro do remover produto") 
    deletarProduto(props.produto)
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="trash" color="#fe5430" type="font-awesome" size={30} onPress={ handleRemoverProduto} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
  },

});
export default RemoverCarrinho;