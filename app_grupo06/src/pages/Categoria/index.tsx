import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CardProdutos from "../../components/Produtos/CardProdutos";
import { ProdutoContext } from "../../context/ProdutoContext";
import { SearchBar } from "../../components/Search";
import UserImage from "../../components/UsersImage/UsersImage";
import Voltar from "../../components/Voltar";
import { AppLoader } from "../../components/AppLoader";

const Categoria = ({ route, navigation }) => {
  const { categoria } = route.params;
  const { produto, filterProd, getDadosProduto, produtoCat, setProdutoCat } = useContext(ProdutoContext);

  useEffect(() => {
    getDadosProduto()
    setProdutoCat(produto.filter(item => item.nomeCategoria === categoria.nomeCategoria))
  }, [filterProd])

  return (
    <View style={styles.container}>
      <View style={styles.container_top}>
        <View style={styles.categoria}>
          <Text style={styles.categoria_title}>{categoria.nomeCategoria}</Text>
          <UserImage />
        </View>
        <SearchBar type="Categoria" nome={categoria.nomeCategoria} />
      </View>
      {produtoCat?.length >= 1 ?
        <FlatList
          style={styles.flatList_container}
          showsVerticalScrollIndicator={false}
          data={produtoCat}
          numColumns={2}
          keyExtractor={item => item.idProduto}
          renderItem={response =>
            <>
              <CardProdutos
                produto={response.item}
                navigation={navigation}
              />
            </>
          }
        />
        :
        <Text style={styles.text}>Não foi encontrado um jogo na busca</Text>
      }
      <View style={styles.voltar}>
        <Voltar navigation={navigation} route='HomeScreen' color='#FE5430' size={50} />
      </View>
      {/* {produtoCat.length === 0 ? <AppLoader /> : null} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070D2D',
  },
  container_top: {
    height: 180,
    paddingVertical: 20,
    alignItems: 'center',
  },
  categoria: {
    flexDirection: 'row',
    width: '90%',
    marginBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  categoria_title: {
    fontSize: 30,
    color: '#546EE5',
  },
  text: {
    color: '#C4DFE8',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  flatList_container: {
    marginTop: 10,
    alignSelf: 'center',
    paddingLeft: 10,
  },
  voltar: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0
  }
})

export default Categoria;