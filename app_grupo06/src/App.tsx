import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoadingProvider } from './context/LoadingContext';
import { CategoriaProvider } from './context/CategoriaContext';
import { CarrinhoProvider } from './context/CarrinhoContext';
import { ProdutoProvider } from './context/ProdutoContext';
import { FavoritosProvider } from './context/FavoritosContext';

export default () => {

  return (
    <AutenticacaoProvider>
      <LoadingProvider>
        <CategoriaProvider>
          <ProdutoProvider>
            <CarrinhoProvider>
              <FavoritosProvider>
                <Routes />
              </FavoritosProvider>
            </CarrinhoProvider>
          </ProdutoProvider>
        </CategoriaProvider>
      </LoadingProvider>
    </AutenticacaoProvider>
  );
}