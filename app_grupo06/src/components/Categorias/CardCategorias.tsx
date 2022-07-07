import React  from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const CardCategoria = (props) => {

 const handleClick = (props) => {
    props.navigation.navigate({
      name: 'CategoriaScreen', params: {
        categoria: props.categoria,
      }
    })
  }

  return (
    <TouchableOpacity
      onPress={() => handleClick(props)}
    >
      <View style={styles.container_categoria}>
        <Text style={styles.texto_nome_categoria}>{props.categoria.nomeCategoria}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container_categoria: {
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