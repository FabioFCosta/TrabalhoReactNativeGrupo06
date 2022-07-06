import React, { createContext, useContext, useEffect, useState } from "react";
import { UsuarioType } from "../models/UsuarioType";
import { LoginService } from "../services/LoginService";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { LoadingContext } from "./LoadingContext";

export const AutenticacaoContext = createContext({});

export const AutenticacaoProvider = ({ children }) => {
  const [usuario, setUsuario] = useState<UsuarioType>();
  const [fotoPerfil, setFotoPerfil] = useState({ uri: 'https://northmemorial.com/wp-content/uploads/2016/10/PersonPlaceholder.png', type: 'image/jpeg', name: 'emptyProfilePhoto' })
  const { setLoading } = useContext(LoadingContext)

  const buscarFotoPerfil = async () => {
    const storage = getStorage()
    const reference = ref(storage, '/' + usuario?.name)
    setLoading(true)
    await getDownloadURL(reference).then(url => {
      setUsuario({
        id: usuario?.id,
        name: usuario?.name,
        email: usuario?.email,
        token: usuario?.token,
        imagem: url
      })
    })
    setLoading(false)
  }

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
        imagem: ''
        // imagem: 'https://yt3.ggpht.com/ytc/AKedOLQ6Ief26j8b1lgSA1OpXSCzJBlnlEEsWtQAfdwB=s900-c-k-c0x00ffffff-no-rj',
      });
      return true;
    }
  };

  return (
    <AutenticacaoContext.Provider value={{
      login,
      usuario,
      fotoPerfil,
      setFotoPerfil,
      buscarFotoPerfil
    }}>
      {children}
    </AutenticacaoContext.Provider>
  )
}

