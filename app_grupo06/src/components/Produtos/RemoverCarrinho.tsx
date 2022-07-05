import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const RemoverCarrinho = (props) => {
  const { deletarProduto } = useContext(CarrinhoContext);
  
  const handleRemoverProduto =()=>{   
    deletarProduto(props.produto)
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="trash" color="#546EE5" type="font-awesome" size={30} onPress={ handleRemoverProduto} />
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