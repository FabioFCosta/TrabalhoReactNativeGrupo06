import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoadingProvider } from './context/LoadingContext';
import { CategoriaProvider } from './context/CategoriaContext';
import { CarrinhoProvider } from './context/CarrinhoContext';
import { ProdutoProvider } from './context/ProdutoContext';
import { FavoritosProvider } from './context/FavoritosContext';
import firebaseConfig from '../firebaseConfig';
import { initializeApp } from 'firebase/app'
import { ValidacaoProvider } from './context/ValidacaoContext';

initializeApp(firebaseConfig)

export default () => {

  return (
    <LoadingProvider>
      <AutenticacaoProvider>
        <CategoriaProvider>
          <ProdutoProvider>
            <CarrinhoProvider>
              <FavoritosProvider>
                <ValidacaoProvider>
                  <Routes />
                </ValidacaoProvider>
              </FavoritosProvider>
            </CarrinhoProvider>
          </ProdutoProvider>
        </CategoriaProvider>
      </AutenticacaoProvider>
    </LoadingProvider>
  );
}