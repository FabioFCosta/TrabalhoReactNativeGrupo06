import React, { createContext } from 'react';
import RealmBD from '../Realm/Realm'

export const FavoritosContext = createContext({});

export function FavoritosProvider({ children }) {

  const listarFavoritos = () => {
    return RealmBD.objects('Favorito');
  }

  const listarFavoritoId = (id: number) => {
    if (RealmBD.objects('Favorito').filtered("id_produto == " + id).isEmpty()) {
      return true;
    }
    return false;
  }

  const contarQtdFavorito = () => {
    return RealmBD.objects('Produto').length;
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
    } else {
      deletarFavorito(produto.idProduto)
    }
  }

  const deletarFavorito = (id: number) => {
    RealmBD.write(() =>
      RealmBD.delete(RealmBD.objects('Favorito').filtered("id_produto == " + id)),
    );
  }

  const resetFavoritos = () => {
    RealmBD.write(() => {
      RealmBD.deleteAll();
    })
  }

  return (
    <FavoritosContext.Provider value={{
      contarQtdFavorito,
      deletarFavorito,
      resetFavoritos,
      listarFavoritos,
      adicionarFavorito,
      listarFavoritoId
    }}>
      {children}
    </FavoritosContext.Provider>
  );
}