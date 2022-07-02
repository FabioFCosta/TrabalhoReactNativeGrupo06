import React, { createContext } from 'react';
import Realm from 'realm';

export const FavoritoContext = createContext({});

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
  name: 'Produto',
  properties: {
    id_produto: { type: 'int', default: 0 },
    sku: 'string',
    nome_produto: 'string',
    descricao_produto: 'string',
    preco_produto: 'double',
    imagem_produto: 'string'
  }
};

let realm_favorito = new Realm({ schema: [ProdutoSchema], schemaVersion: 1 });

export function FavoritoProvider({ children }) {
  const listarFavoritos = () => {
    return realm_favorito.objects('Produto')
  }

  const contarQtdFavoritos = () => {
    return realm_favorito.objects('Produto').length;
  }

  const adicionarFavorito = (_sku: string, _nome: string, _descricao: string, _preco: number, _imagem: string) => {

    const ultimoProdutoCadastrado = realm_favorito.objects('Produto').sorted('id_produto', true)[0];
    const ultimoIdCadastrado = ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
    const proximoId = ultimoIdCadastrado == null ? 1 : ultimoIdCadastrado + 1;

    realm_favorito.write(() => {
      const produto = realm_favorito.create('Produto', {
        id_produto: proximoId,
        sku: _sku,
        nome_produto: _nome,
        descricao_produto: _descricao,
        preco_produto: _preco,
        imagem_produto: _imagem,
      });
    });
  }

  // const deletarProduto=()=>{

  //   realm_favorito.write(()=>{
  //     const produto = realm_favorito.delete('Produto',{

  //     })
  //   })
  // }

  return (
    <FavoritoContext.Provider value={{
      listarFavoritos,
      contarQtdFavoritos,
      adicionarFavorito,
    }}>
      {children}
    </FavoritoContext.Provider>
  )
}