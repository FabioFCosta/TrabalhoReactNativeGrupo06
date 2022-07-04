import React, { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import CardCarrinho from "../../components/Produtos/CardCarrinho";

const Carrinho = ({ navigation }) => {
  const { listarProdutos, contarQtdProdutos } = useContext(CarrinhoContext);
  console.log("Listar produtos no carrinho: " + listarProdutos)

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.container_flatList}
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
      <View style={styles.container_detalhes_compra}>
        <Text style={styles.continuar_comprando}>Continuar comprando</Text>
        <View style={styles.detalhes_compra}>
          <Text style={styles.total_itens}>Total ({contarQtdProdutos()} itens):</Text>
          <Text style={styles.total_valor}>R$ x.xxx,xx</Text>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.submit_text}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#070D2D',
  },
  container_flatList: {
    height: '80%',
    margin:0,
    backgroundColor: '#333',
  },
  container_detalhes_compra: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#333',

  },
  continuar_comprando: {
    textAlign: 'center',
    color: '#FE5430',
    fontSize: 24,
    marginBottom: 20,
  },
  detalhes_compra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,

  },
  total_itens: {

  },
  total_valor: {
    color: '#FE5430'

  },
  submit: {
    padding: 20,
    backgroundColor: '#06C1FF',
    borderRadius:50,

  },
  submit_text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight:'bold',
    color: '#070D2D',
  },
});

export default Carrinho;