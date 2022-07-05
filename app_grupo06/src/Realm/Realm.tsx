import Realm from 'realm';

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

class FavoritoSchema extends Realm.Object { }
FavoritoSchema.schema = {
  name: 'Favorito',
  properties: {
    id_produto: 'int',
    sku: 'string',
    nome_produto: 'string',
    descricao_produto: 'string',
    preco_produto: 'double',
    imagem_produto: 'string',
    nome_categoria: 'string'
  }
};

const RealmBD = new Realm({ schema: [ProdutoSchema,FavoritoSchema], schemaVersion: 3 });

export default RealmBD;