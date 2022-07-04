import React, { useEffect, useContext } from "react";
import { FlatList } from "react-native";

import { LoadingContext } from "../../context/LoadingContext";

import CardProdutos from "./CardProdutos";
import { AppLoader } from "../AppLoader";
import { ProdutoContext } from "../../context/ProdutoContext";

const ScrollProdutos = ({ navigation }) => {
  const { filterProd, getDadosProduto } = useContext(ProdutoContext)
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    getDadosProduto();
  }, []);

  return (
    <>
      {loading ? <AppLoader /> :
        <FlatList
          data={filterProd}
          numColumns={2}
          keyExtractor={item => item.idProduto}
          // onEndReached={getDadosProduto()}
          // onEndReachedThreshold={0.1}
          // ListFooterComponent={loading ? <AppLoader /> : null}
          renderItem={response =>
            <>
              <CardProdutos
                produto={response.item}
                navigation={navigation}
              />
            </>
          }
        />
      }
    </>
  )
}

export default ScrollProdutos;