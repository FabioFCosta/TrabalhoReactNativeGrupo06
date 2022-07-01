import React, { useEffect, useState, useContext } from "react";
import { FlatList } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";

import { ProdutoType } from "../../models/ProdutoType";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { LoadingContext } from "../../context/LoadingContext";

import CardProdutos from "./CardProdutos";
import TitulosHome from "../Home/Titulos";
import { AppLoader } from "../AppLoader";

const ScrollProdutos = ({navigation}) => {
  const { usuario } = useContext(AutenticacaoContext);
  const [produto, setProduto] = useState<ProdutoType[]>([]);
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
      <TitulosHome titulo="Recentes" />
      {loading ? <AppLoader /> :
        <FlatList
          horizontal={true}
          data={produto}
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