import React, { createContext, useState } from "react";
import { UsuarioType } from "../models/UsuarioType";
import { LoginService } from "../services/LoginService";

export const AutenticacaoContext = createContext({});

export const AutenticacaoProvider = ({ children }) => {
  const [usuario, setUsuario] = useState<UsuarioType>();

  const login = async (email: string, senha: string) => {
    const respostaServiceLogin = await LoginService(email, senha);
    if (!respostaServiceLogin) {
      return false;
    } else {
      setUsuario({
        id: respostaServiceLogin?.id,
        name: respostaServiceLogin?.name,
        email: respostaServiceLogin?.email,
        token: respostaServiceLogin?.token, 
        // imagem:respostaServiceLogin?.imagem,
        imagem:'https://yt3.ggpht.com/ytc/AKedOLQ6Ief26j8b1lgSA1OpXSCzJBlnlEEsWtQAfdwB=s900-c-k-c0x00ffffff-no-rj',       
      });
      return true;
    }
  };

  return (
    <AutenticacaoContext.Provider value={{
      login,
      usuario
    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}

