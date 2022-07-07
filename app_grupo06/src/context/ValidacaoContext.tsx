import React, { createContext } from "react";
import { Alert } from "react-native";

export const ValidacaoContext = createContext({});

export const ValidacaoProvider = ({ children }) => {
   const confirmarSenha = (senha, confirmSenha) => {
      if (senha != confirmSenha) {
         Alert.alert(
            'Ops...',
            'Senha não confirmada.',
            [
               { text: 'OK' }
            ]
         )
         return false
      } else {
         return true
      }
   }

   const validarSenha = (senha) => {
      if (senha.length < 6) {
         Alert.alert(
            'Ops...',
            'Senha deve conter pelo menos 6 caracteres.',
            [
               { text: 'OK' }
            ]
         )
         return false
      } else {
         return true
      }
   }

   const validarNomeUsuario = (nomeUsuario) => {
      if (nomeUsuario.length === 0) {
         Alert.alert(
            'Ops...',
            'O nome do usuário não pode ficar vazio.',
            [
               { text: 'OK' }
            ]
         )
         return false
      } else {
         return true
      }
   }

   const validarEmail = (email) => {
      if (email.length === 0 || !email.includes('@') || !email.includes('.')) {
         Alert.alert(
            'Ops...',
            'Confira o e-mail inserido.',
            [
               { text: 'OK' }
            ]
         )
         return false
      } else {
         return true
      }
   }

   return (
      <ValidacaoContext.Provider value={{
         confirmarSenha,
         validarSenha,
         validarNomeUsuario,
         validarEmail
      }}>
         {children}
      </ValidacaoContext.Provider>
   )
}