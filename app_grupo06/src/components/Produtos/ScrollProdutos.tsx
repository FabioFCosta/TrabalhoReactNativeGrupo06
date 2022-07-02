import React, { useEffect, useState, useContext } from "react";
import { FlatList } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";

import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { LoadingContext } from "../../context/LoadingContext";

import CardProdutos from "./CardProdutos";
import { AppLoader } from "../AppLoader";
import { ProdutoContext } from "../../context/ProdutoContext";

const ScrollProdutos = ({ navigation }) => {
  const { usuario } = useContext(AutenticacaoContext);
  const {produto, setProduto} = useContext(ProdutoContext)
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    getDadosProduto();
  }, []);

  const getDadosProduto = async () => {
    setLoading(true);
    AxiosInstance.get(
      '/produto',
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      setProduto(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
    })
    setLoading(false);
  }

  return (
    <>
      {loading ? <AppLoader /> :
        <FlatList
          data={produto}
          numColumns={2}
          keyExtractor={item => item.idProduto}
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