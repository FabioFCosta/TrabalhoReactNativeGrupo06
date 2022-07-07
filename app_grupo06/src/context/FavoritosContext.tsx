import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import RealmBD from '../Realm/Realm'

export const FavoritosContext = createContext({});

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(RealmBD.objects('Favorito'))

  const listarFavoritos = () => {
    setFavoritos(RealmBD.objects('Favorito'))
  }

  const listarFavoritoId = (id: number) => {
    if (RealmBD.objects('Favorito').filtered("id_produto == " + id).isEmpty()) {
      return false;
    }
    return true;
  }

  const contarQtdFavorito = () => {
    return RealmBD.objects('Favorito').length;
  }

  const adicionarFavorito = (produto) => {

    if (RealmBD.objects('Favorito').filtered("id_produto == " + produto.idProduto).isEmpty()) {
      RealmBD.write(() => {
        RealmBD.create('Favorito', {
          id_produto: produto.idProduto,
          sku: produto.sku,
          nome_produto: produto.nomeProduto,
          descricao_produto: produto.descricaoProduto,
          preco_produto: produto.precoProduto,
          imagem_produto: produto.imagemProduto,
          nome_categoria: produto.nomeCategoria
        });
      })
      AlertAdicionado()
      listarFavoritos()
    } else {
      deletarFavorito(produto.idProduto)
    }
  }

  const deletarFavorito = (id: number) => {
    RealmBD.write(() =>
      RealmBD.delete(RealmBD.objects('Favorito').filtered("id_produto == " + id)),
    );
    AlertDeletado()
    listarFavoritos()
  }

  const resetFavoritos = () => {
    RealmBD.write(() => {
      RealmBD.deleteAll();
    })
  }
  const AlertAdicionado = () => {
    Alert.alert(
      'Excelente!',
      `Produto adicionado aos favoritos`,
      [
        {

        },
      ])
  }
  const AlertDeletado = () => {
    Alert.alert(
      'Muito triste!',
      `Item removido dos favoritos`,
      [
        {

        },
      ])
  }

  return (
    <FavoritosContext.Provider value={{
      contarQtdFavorito,
      deletarFavorito,
      resetFavoritos,
      listarFavoritos,
      adicionarFavorito,
      listarFavoritoId,
      favoritos
    }}>
      {children}
    </FavoritosContext.Provider>
  );
}