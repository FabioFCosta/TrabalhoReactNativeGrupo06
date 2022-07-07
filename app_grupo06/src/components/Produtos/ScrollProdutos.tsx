import React, { useEffect, useContext, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import CardProdutos from "./CardProdutos";
import { ProdutoContext } from "../../context/ProdutoContext";
import { FavoritosContext } from "../../context/FavoritosContext";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const ScrollProdutos = ({ navigation }) => {
  const { filterProd, getDadosProdutoPaginacao} = useContext(ProdutoContext)
  const [loading, setLoading] = useState(false);
  const { favoritos } = useContext(FavoritosContext)
  const [produto, setProduto] = useState([])
  const [state, setState] = useState(true)

  useEffect(() => {
    getDadosProdutoPaginacao(0)
    setProduto(filterProd)
  }, []);

  useEffect(() => {
    setProduto([])
    setState(!state)
  }, [favoritos])

  useEffect(() => {
    setProduto(filterProd)
  }, [state])

  useEffect(() => {
    setProduto(filterProd)
  }, [filterProd])

  async function getProdutos() {
    if (loading) return;
    setLoading(true);
    await getDadosProdutoPaginacao()
    setLoading(false);
  }

  function appLoader() {
    if (!loading) return null;
    return (
      <View style={styles.container}>
        <ActivityIndicator size={30} color="#fd6005" />
      </View>
    );
  };

  return (
    <>
      {filterProd?.length >= 1 ?
        <FlatList
          data={produto}
          numColumns={2}
          keyExtractor={item => item.idProduto}
          showsVerticalScrollIndicator={false}
          onEndReached={filterProd?.length>=6?getProdutos:null}
          onEndReachedThreshold={0.1}
          ListFooterComponent={appLoader()}
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