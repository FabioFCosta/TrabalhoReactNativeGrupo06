import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Favoritar = ({ produto }) => {
  const { adicionarProduto } = useContext(CarrinhoContext);

  const handleClick = () => {
    
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="heart" color="#fe5430" type="font-awesome" size={30} onPress={() => handleClick()} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    position:'absolute',
    alignSelf:'flex-end'
  },

});
export default Favoritar;