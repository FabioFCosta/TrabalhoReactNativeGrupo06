import React, { createContext, useContext, useEffect, useState } from "react";
import { ProdutoType } from "../models/ProdutoType";
import AxiosInstance from "../api/AxiosInstance";
import { AutenticacaoContext } from "./AutenticacaoContext";

export const ProdutoContext = createContext({});

export const ProdutoProvider = ({ children }) => {
  const { usuario } = useContext(AutenticacaoContext)
  const [produto, setProduto] = useState<ProdutoType[]>([]);
  const [filterProd, setFilterProd] = useState<ProdutoType[]>([]);
  const [produtoCat, setProdutoCat] = useState<ProdutoType[]>([]);

  const [page, setPage] = useState(0)
  const perPage = 6

  const getDadosProduto = async () => {
    await AxiosInstance.get(
      '/produto',
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      setProduto(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
    })
  }
  const getDadosProdutoPaginacao = async () => {
    await AxiosInstance.get(
      `/produto?pagina=${page}&qtdRegistros=${perPage}`,
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      if (page == 0) {
        setFilterProd(result.data);
      } else {        
        setFilterProd([...filterProd, ...result.data]);
      }
      setPage(page + 1);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
    })
  }

  const PaginacaoInicio = async (page:number) => {
    await AxiosInstance.get(
      `/produto?pagina=${page}&qtdRegistros=${perPage}`,
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      setFilterProd(result.data);
      setPage(0);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
    })
  }

  return (
    <ProdutoContext.Provider value={{
      produto,
      setProduto,
      filterProd,
      setFilterProd,
      getDadosProduto,
      getDadosProdutoPaginacao,
      PaginacaoInicio,
      setPage,
      produtoCat,
      setProdutoCat
      // page,
    }}>
      {children}
    </ProdutoContext.Provider>
  )
}
