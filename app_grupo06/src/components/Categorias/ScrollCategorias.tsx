import React, { useEffect, useContext } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import CardCategoria from "./CardCategorias";
import { AppLoader } from "../AppLoader";

import { LoadingContext } from "../../context/LoadingContext";
import { CategoriaContext } from "../../context/CategoriaContext";


const ScrollCategorias = ({ navigation }) => {

  const { categoria, setCategoria, getDadosCategoria } = useContext(CategoriaContext);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    getDadosCategoria();
  }, []);

  return (
    <View style={styles.scroll_categorias}>
      {loading ? <AppLoader /> :
        <FlatList
          horizontal={true}
          data={categoria}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.idCategoria}
          renderItem={response =>
            <CardCategoria
              categoria={response.item}
              navigation={navigation}
            />
          }
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  scroll_categorias: {
    padding: 0,
    marginBottom: 20,
  }
})

export default ScrollCategorias;