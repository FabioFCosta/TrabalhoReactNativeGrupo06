import React, { useEffect, useContext, useState } from "react";
import { FlatList } from "react-native";

import { LoadingContext } from "../../context/LoadingContext";

import CardProdutos from "./CardProdutos";
import { AppLoader } from "../AppLoader";
import { ProdutoContext } from "../../context/ProdutoContext";
import { FavoritosContext } from "../../context/FavoritosContext";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const ScrollProdutos = ({ navigation }) => {
  const { filterProd, getDadosProduto } = useContext(ProdutoContext)
  const { loading, setLoading } = useContext(LoadingContext);
  const { favoritos } = useContext(FavoritosContext)

  useEffect(() => {
    getDadosProduto();
  }, [favoritos]);

  return (
    <>
      {filterProd?.length>=1?
        <FlatList
          data={filterProd}
          numColumns={2}
          keyExtractor={item => item.idProduto}
          // onEndReached={getDadosProduto()}
          // onEndReachedThreshold={0.1}
          // ListFooterComponent={loading ? <AppLoader /> : null}
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
    </>
  )
}
const styles = StyleSheet.create({
  text: {
    color: '#C4DFE8',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
export default ScrollProdutos;