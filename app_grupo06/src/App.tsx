import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoadingProvider } from './context/LoadingContext';
import { CategoriaProvider } from './context/CategoriaContext';
import { CarrinhoProvider } from './context/CarrinhoContext';

export default () => {

  return (
    <AutenticacaoProvider>
      <LoadingProvider>
        <CategoriaProvider>
          <CarrinhoProvider>
            <Routes />
          </CarrinhoProvider>
        </CategoriaProvider>
      </LoadingProvider>
    </AutenticacaoProvider>
  );
}