import React, { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CardCarrinho from "../../components/Produtos/CardCarrinho";

const Carrinho = ({ navigation }) => {
  const { listarProdutos } = useContext(CarrinhoContext);
  console.log("Listar produtos no carrinho: " + listarProdutos)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Carrinho
      </Text>
      <FlatList
        data={listarProdutos()}
        keyExtractor={item => item.id_produto}
        renderItem={response =>
          <>
            <CardCarrinho
              produto={response.item}
              navigation={navigation}
            />
          </>
        }
      />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
  },  
  text: {
    color: '#000',
  },
});

export default Carrinho;