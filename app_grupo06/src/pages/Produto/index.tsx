import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Produto = ({ route, navigation }) => {
  const { produto } = route.params;
  const { adicionarProduto } = useContext(CarrinhoContext);
  const [favorited, setFavorited] = useState(false);

  const handleAddProduto = () => {
    adicionarProduto(produto.sku, produto.nomeProduto, produto.descricaoProduto, produto.precoProduto, produto.imagemProduto);
  }

  const handleFavoritar = () => {
    setFavorited(!favorited)
    // favoritar(produto)
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_imagem}>
        <Image source={{ uri: produto.imagemProduto }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>Produto: {produto.nomeProduto}</Text>
        <Text style={styles.text}>Descrição: {produto.descricaoProduto}</Text>
        <View style={styles.container_buttons}>
          <TouchableOpacity style={styles.buttons} onPress={() => handleAddProduto()}>
            <Text>Comprar</Text>
          </TouchableOpacity>
          {favorited ?
            <TouchableOpacity style={styles.buttons_favorited} onPress={() => handleFavoritar()} >
              <Text style={styles.text_desfavoritar}>Desfavoritar</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.buttons} onPress={() => handleFavoritar()} >
              <Text>Favorito</Text>
            </TouchableOpacity>
          }

        </View>
      </View>
    </View>
  );
}
export default Produto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1
  },
  container_imagem: {
    width: 300,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  container_produto: {
    width: '50%',
  },
  text: {
    color: '#000',
  },
  container_buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  buttons: {
    width: 100,
    height: 50, 
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons_favorited: {
    width: 100,
    height: 50,
    backgroundColor: '#f3e306',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_desfavoritar: {
    color: '#333',
  },
});