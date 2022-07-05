import React, { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import CardCarrinho from "../../components/Produtos/CardCarrinho";

const Carrinho = ({ navigation }) => {
  const { listarProdutos, contarQtdProdutos, totalizarCarrinho } = useContext(CarrinhoContext);

  const HandleContinuarComprando = () => {
    navigation.navigate('Foldbreakers Store')
  }
  return (
    <View style={styles.container}>
      <View style={styles.container_flatList}>
        {listarProdutos().length >= 1 ?
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
          :
          <Text style={styles.text}>Porque seu carrinho ainda está vazio?</Text>
        }
      </View>
      <View style={styles.container_detalhes_compra}>
        <TouchableOpacity onPress={HandleContinuarComprando}>
          <Text style={styles.continuar_comprando}>Continuar comprando</Text>
        </TouchableOpacity>
        <View style={styles.detalhes_compra}>
          <Text style={styles.total_itens}>Total ({contarQtdProdutos()} itens):</Text>
          <Text style={styles.total_valor}>R$ {totalizarCarrinho().toFixed(2)}</Text>
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
    justifyContent:'center'
  },
  container_flatList: {
    marginBottom: 250,
  },
  container_detalhes_compra: {
    width: '100%',
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#070D2D',
    position: 'absolute',
    bottom: 0,
  },
  continuar_comprando: {
    textAlign: 'center',
    color: '#FE5430',
    fontSize: 24,
    marginBottom: 40,
    textDecorationLine: 'underline',
  },
  detalhes_compra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,

  },
  total_itens: {
    fontSize: 20,
    color: '#06C1FF'
  },
  total_valor: {
    fontSize: 20,
    color: '#FE5430'
  },
  submit: {
    padding: 10,
    backgroundColor: '#06C1FF',
    borderRadius: 50,
  },
  submit_text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#070D2D',
  },
  text: {
    color: '#C4DFE8',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Carrinho;