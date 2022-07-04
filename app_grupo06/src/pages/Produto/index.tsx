import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CarrinhoContext } from "../../context/CarrinhoContext";
import Favoritar from "../../components/Favoritos";
import Voltar from "../../components/Voltar";
import QtdProdutos from "../../components/QtdProdutos/QtdProdutos";

const Produto = ({ route, navigation }) => {
  const { produto } = route.params;
  const { listarQtdProduto } = useContext(CarrinhoContext)

  useEffect(() => {
    localizarNoCarrinho();
  }, [])

  const localizarNoCarrinho = () => {
    listarQtdProduto(produto.idProduto)
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.imagemProduto }} style={styles.image} />
      <View style={styles.buttons_top}>
        <Voltar navigation={navigation} />
        <Favoritar produto={produto} />
      </View>
      <View style={styles.container_produto}>
        <Text style={styles.nome_produto}>{produto.nomeProduto}</Text>
        <Text style={styles.desc_produto}>{produto.descricaoProduto}</Text>
        <View style={styles.container_price_qtd}>
          <Text style={styles.price}>R$ {produto.precoProduto.toFixed(2)}</Text>
          <QtdProdutos quantidade={listarQtdProduto(produto.idProduto)} produto={produto} />
        </View>
      </View>
    </View>
  );
}
export default Produto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070D2D',
    padding: 0,
    alignItems: 'stretch',
    flexGrow: 1
  },
  image: {
    width: '100%',
    height: '40%',
  },
  buttons_top: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20
  },
  container_produto: {
    paddingHorizontal: 20,

  },
  nome_produto: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#06C1FF',
    marginBottom: 40,
  },
  desc_produto: {
    height: 200,
    fontSize: 20,
    color: '#C4DFE8',
  },
  container_price_qtd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#FE5430',
    fontSize: 30,
  },
  container_buttons: {
    width: 100,
    height: 30,
    backgroundColor: '#06C1FF',
    justifyContent: 'center',
    alignItems: 'center',
  },


});