import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import ScrollCategorias from "../../components/Categorias/ScrollCategorias";
import ScrollProdutos from "../../components/Produtos/ScrollProdutos";
import { SearchBar } from "../../components/Search";
import { Destaque } from "../../components/Destaque";
import TitulosHome from "../../components/Titulos";

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TitulosHome titulo="Conheça os melhores jogos" />
      <ScrollCategorias navigation={navigation} />
      <SearchBar />
      <ScrollProdutos navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:15,
    margin: 0
  },
})

export default Home;

