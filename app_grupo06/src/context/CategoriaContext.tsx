import React, { createContext, useContext, useState } from "react";
import { CategoriaType } from "../models/CategoriaType";
import AxiosInstance from "../api/AxiosInstance";
import { AutenticacaoContext } from "./AutenticacaoContext";

export const CategoriaContext = createContext({});

export const CategoriaProvider = ({ children }) => {
  const [categoria, setCategoria] = useState<CategoriaType[]>([]);
  const {usuario}=useContext(AutenticacaoContext)

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

  return (
    <CategoriaContext.Provider value={{
      categoria,
      setCategoria,
      getDadosCategoria

    }}>
      {children}
    </CategoriaContext.Provider>
  )
}
