import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import RemoverCarrinho from "./RemoverCarrinho";
import QtdProdutos from "../QtdProdutos/QtdProdutos";


const CardCarrinho = (props) => {

  const produto = {
    idProduto: props.produto.id_produto,
    sku: props.produto.sku,
    imagemProduto: props.produto.imagem_produto,
    nomeProduto: props.produto.nome_produto,
    precoProduto: props.produto.preco_produto,
    descricaoProduto: props.produto.descricao_produto,
    quantidadeProduto: props.produto.quantidade_produto
  }

  const handleClick = (props) => {
    props.navigation.navigate({
      name: 'ProdutoScreen', params: {
        produto: {
          idProduto: props.produto.id_produto,
          sku: props.produto.sku,
          imagemProduto: props.produto.imagem_produto,
          nomeProduto: props.produto.nome_produto,
          precoProduto: props.produto.preco_produto,
          descricaoProduto: props.produto.descricao_produto,
          nomeCategoria: props.produto.nome_categoria
        }
      }
    })
  }

  return (
    <TouchableOpacity
      onPress={() => handleClick(props)}
    >
      <View style={styles.card_container} >
        <View style={styles.remover_icon}>
          <RemoverCarrinho produto={props.produto} />
        </View>
        <Image
          source={{ uri: props.produto.imagem_produto }}
          style={styles.card_image}
        />
        <View style={styles.prod_detalhes}>
          <Text style={styles.card_nome}>{props.produto.nome_produto}</Text>
          <Text style={styles.card_desc}>Ver descrição</Text>
          <View style={styles.prod_preco_qtd}>
            <Text style={styles.prod_preco}>R$ {props.produto.preco_produto.toFixed(2)} un.</Text>
          </View>
        </View>
        <View style={styles.qtd_produto}>
          <QtdProdutos quantidade={props.produto.quantidade_produto} produto={produto} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card_container: {
    flexDirection: 'row',
    width: '95%',
    height: 120,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: '#C4DFE8'
  },
  remover_icon: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  card_image: {
    width: '30%',
    height: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#070D2D'
  },
  prod_detalhes: {
    width: '50%',
    paddingLeft: 10
  },
  prod_preco_qtd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10

  },
  prod_preco: {
    color: '#FE5430',
    fontSize: 18,
  },
  card_nome: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#070D2D',
  },
  card_desc: {
    textAlign: 'left',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#546EE5',
  },
  qtd_produto: {
    borderRadius: 20,
    padding: 2,
    backgroundColor: '#fff',
  },
});

export default CardCarrinho;
