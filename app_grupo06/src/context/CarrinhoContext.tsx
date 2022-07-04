import React, { createContext } from 'react';
import Realm from 'realm';
import { ProdutoType } from '../models/ProdutoType';

export const CarrinhoContext = createContext({});

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
  name: 'Produto',
  properties: {
    id_produto: 'int',
    sku: 'string',
    nome_produto: 'string',
    descricao_produto: 'string',
    preco_produto: 'double',
    imagem_produto: 'string',
    quantidade_produto: 'int'
  }
};

let realm_carrinho = new Realm({ schema: [ProdutoSchema], schemaVersion: 1 });

export function CarrinhoProvider({ children }) {
  const listarProdutos = () => {
    return realm_carrinho.objects('Produto')
  }

  const listarQtdProduto = (_id: number) => {
    const prod = realm_carrinho.objects<ProdutoType>('Produto').filter(item => item.id_produto == _id)[0]

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
    realm_carrinho.objects('Produto').map((item) => {
      quantidade += item.quantidade_produto;
    })
    return quantidade;
  }

  const totalizarCarrinho = ()=>{
    let total = 0;
    realm_carrinho.objects('Produto').map((item) => {
      total += (item.quantidade_produto*item.preco_produto);
    })
    return total;
  }

  const adicionarProduto = (produto) => {

    if (realm_carrinho.objects('Produto').filtered("id_produto == " + produto.idProduto).isEmpty()) {
      realm_carrinho.write(() => {
        realm_carrinho.create('Produto', {
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
      let prod = realm_carrinho.objects<ProdutoType>('Produto').filter(item => item.id_produto == produto.idProduto)[0];

      let qtdCarrinho = prod.quantidade_produto;

      realm_carrinho.write(() => {
        prod.quantidade_produto = qtdCarrinho + 1;
      })
    }
  }

  const removerItem = (_id: number) => {
    let prod = realm_carrinho.objects<ProdutoType>('Produto').filter(item => item.id_produto == _id)[0];
    let qtdCarrinho = prod.quantidade_produto;
    if(qtdCarrinho>1){
      realm_carrinho.write(() => {
        prod.quantidade_produto = qtdCarrinho - 1;
      })
    } else {
      deletarProduto(prod)
    }
  }

  const deletarProduto = (produto) => {
    realm_carrinho.write(() => {
      realm_carrinho.delete(produto)
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