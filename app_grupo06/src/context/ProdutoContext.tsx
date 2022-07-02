import React, { createContext, useState } from "react";
import { ProdutoType } from "../models/ProdutoType";

export const ProdutoContext = createContext({});

export const ProdutoProvider = ({ children }) => {
  const [produto, setProduto] = useState<ProdutoType[]>([]);

  return (
    <ProdutoContext.Provider value={{
      produto,
      setProduto
    }}>
      {children}
    </ProdutoContext.Provider>
  )
}
