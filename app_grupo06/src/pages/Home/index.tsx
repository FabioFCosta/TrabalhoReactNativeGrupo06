import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

import ScrollCategorias from "../../components/Categorias/ScrollCategorias";
import ScrollProdutos from "../../components/Produtos/ScrollProdutos";
import { SearchBar } from "../../components/Search";
import TitulosHome from "../../components/Titulos";

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <TitulosHome titulo="Conheça os melhores jogos" />
        <Icon name="user-circle" color="#dddddd" type="font-awesome" size={70} />
      </View>
      <ScrollCategorias navigation={navigation} />
      <SearchBar titulo="Encontre seu jogo" />
      <ScrollProdutos navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    margin: 0,
    backgroundColor: '#070D2D'
  },
  container_title: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:15,
  },
})

export default Home;

