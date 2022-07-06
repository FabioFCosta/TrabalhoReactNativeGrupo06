import React, { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import CardCarrinho from "../../components/Produtos/CardCarrinho";
import { ActionButton } from "../../components/ActionButton/ActionButton";

const Carrinho = ({ navigation }) => {
  const { carrinho, contarQtdProdutos, totalizarCarrinho, resetCarrinho } = useContext(CarrinhoContext);

  const HandleContinuarComprando = () => {
    navigation.navigate('Foldbreakers Store')
  }

  const HandleFinalizarPedido = () => {
    resetCarrinho();
    navigation.navigate('Foldbreakers Store')
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_flatList}>
        {carrinho.length >= 1 ?
          <FlatList
            data={carrinho}
            keyExtractor={item => item.id_produto}
            renderItem={response =>
              <>
                <CardCarrinho
                  produto={response.item}
                  navigation={navigation}
                />
              </>
            }
            showsVerticalScrollIndicator={false}
          />
          :
          <Text style={styles.text}>Por que seu carrinho ainda está vazio?</Text>
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
        <View style={styles.submit}>
          <ActionButton text='Finalizar Pedido' onPress={HandleFinalizarPedido} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#070D2D',
    justifyContent: 'center'
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
    alignItems: 'center',
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