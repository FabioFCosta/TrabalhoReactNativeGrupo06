import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CardProdutos from "../../components/Produtos/CardProdutos";
import { ProdutoContext } from "../../context/ProdutoContext";
import { SearchBar } from "../../components/Search";

const Categoria = (props) => {
  const { produto, filterProd, getDadosProduto } = useContext(ProdutoContext);
  const [produtoCat, setProdutoCat] = useState([]);

  useEffect(() => {
    getDadosProduto()
    setProdutoCat(produto.filter(item => item.nomeCategoria === props.categoria.nomeCategoria))
  }, [filterProd])

  return (
    <View style={styles.container}>
      <View style={styles.container_top}>
        <View style={styles.categoria}>
          <Text style={styles.categoria_title}>{props.categoria.nomeCategoria}</Text>
        </View>
        <SearchBar type="Categoria" />
      </View>
      {produtoCat?.length >= 1 ?
        <FlatList
          data={produtoCat}
          numColumns={2}
          keyExtractor={item => item.idProduto}
          renderItem={response =>
            <>
              <CardProdutos
                produto={response.item}
                navigation={props.navigation}
              />
            </>
          }
        />
        :
        <Text style={styles.text}>Não foi encontrado um jogo na busca</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070D2D'
  },
  container_top: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  categoria: {
    backgroundColor: '#FE5430',
    height: 60,
    width: '80%',
    borderRadius: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoria_title: {
    fontSize: 30,
    color: '#C4DFE8',
  },
  text: {
    color: '#C4DFE8',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

})

export default Categoria;