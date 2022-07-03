import React, { createContext, useContext, useState } from "react";
import { ProdutoType } from "../models/ProdutoType";
import { LoadingContext } from "./LoadingContext";
import AxiosInstance from "../api/AxiosInstance";
import { AutenticacaoContext } from "./AutenticacaoContext";

export const ProdutoContext = createContext({});

export const ProdutoProvider = ({ children }) => {
  const{usuario}=useContext(AutenticacaoContext)
  const {loading, setLoading}=useContext(LoadingContext)
  const [produto, setProduto] = useState<ProdutoType[]>([]);
  const [filterProd, setFilterProd] = useState<ProdutoType[]>([]);

  const getDadosProduto = async () => {
    setLoading(true);
    AxiosInstance.get(
      '/produto',
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      setProduto(result.data);
      setFilterProd(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
    })
    setLoading(false);
  }

  return (
    <ProdutoContext.Provider value={{
      produto,
      setProduto,
      filterProd,
      setFilterProd,
      getDadosProduto
    }}>
      {children}
    </ProdutoContext.Provider>
  )
}
