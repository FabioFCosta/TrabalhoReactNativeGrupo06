import React, { useContext, useState} from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { ProdutoContext } from "../../context/ProdutoContext";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";

const CardCategoria = (props) => {
  const { usuario } = useContext(AutenticacaoContext)
  const { produto, setProduto } = useContext(ProdutoContext);
  const { filterProd, setFilterProd } = useContext(ProdutoContext);
  const [pressed, setPressed] = useState(false)


  const handleClick = () => {
    setPressed(true)
    setFilterProd(produto.filter(item => item.nomeCategoria === props.categoria.nomeCategoria))
  }

  return (
    <TouchableOpacity
      onPress={() => handleClick()}
    >
      {pressed ?
        <View style={styles.container_categoria_pressed}>
          <Text style={styles.texto_nome_categoria}>{props.categoria.nomeCategoria}</Text>
        </View>
        :
        <View style={styles.container_categoria_no_pressed}>
          <Text style={styles.texto_nome_categoria}>{props.categoria.nomeCategoria}</Text>
        </View>
      }
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container_categoria_pressed: {
    width: 100,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#fe5430',
    alignContent: 'center',
    justifyContent: 'center',

  },
  container_categoria_no_pressed: {
    width: 100,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#546EE5',
    alignContent: 'center',
    justifyContent: 'center',

  },
  texto_nome_categoria: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default CardCategoria;