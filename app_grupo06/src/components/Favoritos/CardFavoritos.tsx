import React from "react";
import { Card, Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AddCarrinho from "../Produtos/AddCarrinho";
import Favoritar from ".";

const CardFavorito = (props) => {

  const produto = {
    idProduto: props.produto.id_produto,
    sku: props.produto.sku,
    imagemProduto: props.produto.imagem_produto,
    nomeProduto: props.produto.nome_produto,
    precoProduto: props.produto.preco_produto,
    descricaoProduto: props.produto.descricao_produto,
    nomeCategoria: props.produto.nome_categoria
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
      <Card containerStyle={styles.card_container} >
        <Card.Image
          source={{ uri: produto.imagemProduto }}
          style={styles.card_image}
        />
        <View style={styles.icon_fav}>
          <Favoritar produto={produto} />
        </View>
        <Text style={styles.card_title}>{produto.nomeProduto}</Text>
        <Text style={styles.card_subtitle}>{produto.nomeCategoria}</Text>
        <View style={styles.price_addCart}>
          <Text style={styles.card_price}>R$ {produto.precoProduto.toFixed(2)}</Text>
          <AddCarrinho produto={produto} />
        </View>
      </Card>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card_container: {
    width: 185,
    height: 250,
    borderRadius: 10,
    padding: 10,
    margin: 0,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#C4DFE8',
  },
  card_image: {
    width: 165,
    height: 140,
    marginBottom: 10,
    borderRadius: 10,
  },
  icon_fav: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  card_title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
  },
  card_subtitle: {
    textAlign: 'left',
    fontSize: 12,
  },
  card_price: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fe5430'

  },
  price_addCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default CardFavorito;
