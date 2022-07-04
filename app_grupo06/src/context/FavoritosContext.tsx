// import React, { createContext } from 'react';
// import Realm from 'realm';

// export const FavoritosContext = createContext({});

// class ProdutoSchema extends Realm.Object { }
// ProdutoSchema.schema = {
//   name: 'Produto',
//   properties: {
//     id_produto: { type: 'int', default: 0 },
//     sku: 'string',
//     nome_produto: 'string',
//     descricao_produto: 'string',
//     preco_produto: 'double',
//     imagem_produto: 'string'
//   }
// };

// let realm_favoritos = new Realm({ schema: [ProdutoSchema], schemaVersion: 1 });

// export function FavoritosProvider({ children }) {
//   const listarProdutos = () => {
//     return realm_favoritos.objects('Produto')
//   }

//   const contarQtdProdutos = () => {
//     return realm_favoritos.objects('Produto').length;
//   }

//   const adicionarProduto = (_sku: string, _nome: string, _descricao: string, _preco: number, _imagem: string) => {

//     const ultimoProdutoCadastrado = realm_favoritos.objects('Produto').sorted('id_produto', true)[0];
//     const ultimoIdCadastrado = ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
//     const proximoId = ultimoIdCadastrado == null ? 1 : ultimoIdCadastrado + 1;

//     realm_favoritos.write(() => {
//       const produto = realm_favoritos.create('Produto', {
//         id_produto: proximoId,
//         sku: _sku,
//         nome_produto: _nome,
//         descricao_produto: _descricao,
//         preco_produto: _preco,
//         imagem_produto: _imagem,
//       });
//       console.log("Adicionando ao favoritos:")
//     });

//   }

//   const deletarProduto = (produto) => {
//     realm_favoritos.write(() => {
//       realm_favoritos.delete(produto)
//     })
//     console.log("Removido do favoritos")
//   }

//   return (
//     <FavoritosContext.Provider value={{
//       listarProdutos,
//       contarQtdProdutos,
//       adicionarProduto,
//       deletarProduto
//     }}>
//       {children}
//     </FavoritosContext.Provider>
//   )
// }