import React from "react";
import { Card, Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AddCarrinho from "./AddCarrinho";
import Favoritar from "../Favoritos";

const CardFavoritos = (props) => {

  const handleClick = () => {
    props.navigation.navigate({
      name: 'ProdutoScreen', params: {
        produto: {
          sku: props.produto.sku,
          nomeProduto:props.produto.nome_produto,
          descricaoProduto:props.produto.descricao_produto,
          imagemProduto:props.produto.imagem_produto,
          precoProduto:props.produto.preco_produto
        },
      }
    })
  }

  return (
    <TouchableOpacity
      onPress={() => handleClick()}
    >
      <Card containerStyle={styles.card_container} >
        <Card.Image
          source={{ uri: props.produto.imagem_produto }}
          style={styles.card_image}
        />
        <Text style={styles.card_title}>{props.produto.nome_produto}</Text>
        <Text style={styles.card_subtitle}>{props.produto.descricao_produto}</Text>
        <View style={styles.price_addCart}>
          <Text style={styles.card_price}>R$ {props.produto.preco_produto}</Text>
          <AddCarrinho produto={props.produto} />
        </View>
        <Favoritar produto={props.produto}/>
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
    color:'#fe5430'

  },
  price_addCart: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
  },
});

export default CardFavoritos;
