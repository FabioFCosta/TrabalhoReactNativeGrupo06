import React, { useContext } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CardCarrinho from "../../components/Produtos/CardCarrinho";
import { FavoritosContext } from "../../context/FavoritosContext";

const Favoritos = ({navigation}) => {
  const{listarProdutos}=useContext(FavoritosContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Favoritos
      </Text>
      <FlatList
        data={listarProdutos()}
        keyExtractor={item => item.id_produto}
        renderItem={response =>
          <>
            <CardCarrinho
              produto={response.item}
              navigation={navigation}
            />
          </>
        }
      />
      
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexGrow: 1,
  },
  text:{
    color:'#000',
  },
  });

export default Favoritos;