import React, { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";
import AxiosInstance from "../../api/AxiosInstance";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { CategoriaContext } from "../../context/CategoriaContext";
import { ProdutoContext } from "../../context/ProdutoContext";

export const SearchBar = (props) => {
  const [busca, setBusca] = useState('');
  const { usuario } = useContext(AutenticacaoContext);
  const { categoria, setCategoria } = useContext(CategoriaContext);
  const { produto, setProduto } = useContext(ProdutoContext);

  useEffect(() => {
    props.type==="Categoria"? buscarCategoria(busca):buscarProduto(busca)
  }, [busca])

  const getDadosCategoria = async () => {
    AxiosInstance.get(
      `/categoria`,
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      setCategoria(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));
    });
  }

  const getDadosProduto = async () => {
    AxiosInstance.get(
      '/produto',
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      setProduto(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
    })
  }

  const buscarCategoria = (busca: string) => {
    if (busca !== '') {
      setCategoria(
        categoria.filter
          (res => res.nomeCategoria.toLowerCase().includes(busca.toLowerCase())));
    } else {
      getDadosCategoria();
    }
  }
  const buscarProduto = (busca: string) => {
    if (busca !== '') {
      setProduto(
        produto.filter
          (res => res.nomeProduto.toLowerCase().includes(busca.toLowerCase())));
    } else {
      getDadosProduto();
    }
  }

  return (
    <Input
      placeholder={props.titulo}
      leftIcon={<Icon name="search" color="#00000080" type="font-awesome" size={24} />}
      onChangeText={setBusca}
      value={busca}
      inputContainerStyle={styles.input_container}
    />
  )
}

const styles = StyleSheet.create({
  input_container: {
    width: '100%',
    backgroundColor: '#C4DFE8',
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius:10,
  }
});
