import React, { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";
import { ProdutoContext } from "../../context/ProdutoContext";

export const SearchBar = (props) => {
  const [busca, setBusca] = useState('');
  const { produto, setFilterProd, getDadosProduto, PaginacaoInicio, setProdutoCat} = useContext(ProdutoContext)

useEffect(()=>{
  getDadosProduto();
},[])

  useEffect(() => {
    props.type === "Categoria" ? buscarCategoria(busca) : buscarProduto(busca)
  }, [busca])

  const buscarCategoria = (busca: string) => {
    if (busca !== '') {
      setProdutoCat(
        produto.filter
          (res => res.nomeCategoria==props.nome && res.nomeProduto.toLowerCase().includes(busca.toLowerCase())));
    } else {
      setProdutoCat(
        produto.filter
          (res => res.nomeCategoria==props.nome));
    }
  }
  const buscarProduto = (busca: string) => {
    if (busca !== '') {
      setFilterProd(
        produto.filter
          (res => res.nomeProduto.toLowerCase().includes(busca.toLowerCase())));
    } else {
      console.log("entrou no else")
      PaginacaoInicio(0);
    }
  }

  return (
    <Input
      placeholder="Encontre o seu jogo"
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
    borderRadius: 10,
  }
});
