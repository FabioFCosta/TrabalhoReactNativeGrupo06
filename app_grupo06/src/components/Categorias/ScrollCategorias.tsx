import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";
import CardCategoria from "./CardCategorias";
import { AppLoader } from "../AppLoader";

import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { LoadingContext} from "../../context/LoadingContext";
import { CategoriaType } from "../../models/CategoriaType";
import { CategoriaContext } from "../../context/CategoriaContext";


const ScrollCategorias = ({ navigation }) => {

  const { usuario } = useContext(AutenticacaoContext);
  const {categoria, setCategoria} = useContext(CategoriaContext);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    getDadosCategoria();
  }, []);

  const getDadosCategoria = async () => {
    AxiosInstance.get(
      '/categoria',
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      setCategoria(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));
    })
    { setLoading(false) }
  }

  return (
    <>
      {loading ? <AppLoader /> :
        <FlatList
          horizontal={true}
          data={categoria}
          keyExtractor={item => item.idCategoria}
          renderItem={response =>
            <CardCategoria
              categoria={response.item}
              navigation={navigation}
            />
          }
        />
      }
    </> 
  );
}

const styles = StyleSheet.create({
  scroll_categorias: {
    padding: 0,
    margin: 0
  }
})

export default ScrollCategorias;