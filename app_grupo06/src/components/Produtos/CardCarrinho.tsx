import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

const CardCarrinho = (props) => {

  const handleClick = (props) => {
    console.log(`O produto ${props.produto.nome_produto} foi clicado no carrinho`)
    props.navigation.navigate({
      name: 'ProdutoScreen', params: {
        produto: {
          idProduto: props.produto.id_produto,
          sku: props.produto.sku,
          imagemProduto: props.produto.imagem_produto,
          nomeProduto: props.produto.nome_produto,
          descricaoProduto: props.produto.descricao_produto
        }
      }
    })
  }

  return (
    <TouchableOpacity
      onPress={() => handleClick(props)}
    >
      <View style={styles.card_container} >
        <Image
          source={{ uri: props.produto.imagem_produto }}
          style={styles.card_image}
        />
        <View>
          <Text style={styles.card_nome}>{props.produto.nome_produto}</Text>
          <Text style={styles.card_desc}>{props.produto.descricao_produto}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card_container: {
    flexDirection:'row',
    width: '90%',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor:'#eeeeee'
  },
  card_image: {
    width: '50%',
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card_nome: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontWeight:'bold',
    color:'#978413',
    paddingHorizontal: 10,
    backgroundColor:'#333'
  },
  card_desc: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingVertical: 0,
    margin: 0,
    paddingHorizontal: 10,
  }
});

export default CardCarrinho;
