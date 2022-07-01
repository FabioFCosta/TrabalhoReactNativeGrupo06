import React, {useState} from "react";
import { StyleSheet, ScrollView } from "react-native";

import ScrollCategorias from "../../components/Categorias/ScrollCategorias";
import ScrollProdutos from "../../components/Produtos/ScrollProdutos";
import { SearchBar } from "../../components/Search";
import { Destaque } from "../../components/Destaque";

const Home = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <ScrollCategorias navigation={navigation}/>
      <ScrollProdutos navigation={navigation}/>
      <Destaque nome="Título 1" desc="Descrição 1" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    padding: 15,
    margin: 0
  },
})

export default Home;

