import React, { createContext } from 'react';
import RealmBD from '../Realm/Realm'
import { ProdutoType } from '../models/ProdutoType';

export const CarrinhoContext = createContext({});

export function CarrinhoProvider({ children }) {
  const listarProdutos = () => {
    return RealmBD.objects('Produto')
  }

  const listarQtdProduto = (_id: number) => {
    const prod = RealmBD.objects<ProdutoType>('Produto').filter(item => item.id_produto == _id)[0]

    if (prod != undefined) {
      console.log(prod + " dentro do listar Qtd PRoduto != undefined")
      return prod.quantidade_produto;
    } else {
      console.log(prod + " dentro do listar Qtd PRoduto == undefined")
      return 0;
    }
  }

  const contarQtdProdutos = () => {
    let quantidade = 0;
    RealmBD.objects('Produto').map((item) => {
      quantidade += item.quantidade_produto;
    })
    return quantidade;
  }

  const totalizarCarrinho = () => {
    let total = 0;
    RealmBD.objects('Produto').map((item) => {
      total += (item.quantidade_produto * item.preco_produto);
    })
    return total;
  }

  const adicionarProduto = (produto) => {

    if (RealmBD.objects('Produto').filtered("id_produto == " + produto.idProduto).isEmpty()) {
      RealmBD.write(() => {
        RealmBD.create('Produto', {
          id_produto: produto.idProduto,
          sku: produto.sku,
          nome_produto: produto.nomeProduto,
          descricao_produto: produto.descricaoProduto,
          preco_produto: produto.precoProduto,
          imagem_produto: produto.imagemProduto,
          quantidade_produto: 1
        });
      })
    } else {
      let prod = RealmBD.objects<ProdutoType>('Produto').filter(item => item.id_produto == produto.idProduto)[0];

      let qtdCarrinho = prod.quantidade_produto;

      RealmBD.write(() => {
        prod.quantidade_produto = qtdCarrinho + 1;
      })
    }
  }

  const removerItem = (_id: number) => {
    let prod = RealmBD.objects<ProdutoType>('Produto').filter(item => item.id_produto == _id)[0];
    let qtdCarrinho = prod.quantidade_produto;
    if (qtdCarrinho > 1) {
      RealmBD.write(() => {
        prod.quantidade_produto = qtdCarrinho - 1;
      })
    } else {
      deletarProduto(prod)
    }
  }

  const deletarProduto = (produto) => {
    RealmBD.write(() => {
      RealmBD.delete(produto)
    })
  }

  return (
    <CarrinhoContext.Provider value={{
      listarProdutos,
      contarQtdProdutos,
      adicionarProduto,
      deletarProduto,
      listarQtdProduto,
      removerItem,
      totalizarCarrinho
    }}>
      {children}
    </CarrinhoContext.Provider>
  )
}