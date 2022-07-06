import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoader } from "../../components/AppLoader";

import ScrollCategorias from "../../components/Categorias/ScrollCategorias";
import ScrollProdutos from "../../components/Produtos/ScrollProdutos";
import { SearchBar } from "../../components/Search";
import TitulosHome from "../../components/Titulos";
import UserImage from "../../components/UsersImage/UsersImage";

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <View style={styles.container_title_content_text}>
          <TitulosHome titulo="Conheça os melhores jogos" />
        </View>
        <UserImage />
      </View>
      <ScrollCategorias navigation={navigation} />
      <SearchBar type="Produto" />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  container_title_content_text: {
    width: '50%',
  },

})

export default Home;

