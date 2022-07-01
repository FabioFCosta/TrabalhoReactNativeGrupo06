import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SearchBar } from "../../components/Search";

import { IconCategoria } from "../../components/Categorias/IconCategorias";

import { CategoriaContext } from "../../context/CategoriaContext";

const Categorias = () => {

  const { categoria, setCategoria } = useContext(CategoriaContext);

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={categoria}
        keyExtractor={item => item.idCategoria}
        renderItem={response =>
          <IconCategoria categoria={response.item} />
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    margin: 0,
  },
  flatList: {
    alignSelf: 'center',
  }

})
export default Categorias;