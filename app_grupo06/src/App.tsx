import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoadingProvider } from './context/LoadingContext';
import { CategoriaProvider } from './context/CategoriaContext';
import { CarrinhoProvider } from './context/CarrinhoContext';
import { FavoritoProvider } from './context/FavoritosContext';

export default () => {

  return (
    <AutenticacaoProvider>
      <LoadingProvider>
        <CategoriaProvider>
          <CarrinhoProvider>
            <FavoritoProvider>
              <Routes />
            </FavoritoProvider>
          </CarrinhoProvider>
        </CategoriaProvider>
      </LoadingProvider>
    </AutenticacaoProvider>
  );
}