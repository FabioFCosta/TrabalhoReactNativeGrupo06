import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CardProdutos from "../../components/Produtos/CardProdutos";

const Favoritos = ({navigation}) => {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Favoritos
      </Text>
      {/* <FlatList
        data={}
        keyExtractor={item => item.id_produto}
        renderItem={response =>
          <>
            <CardProdutos
              produto={response.item}
              navigation={navigation}
            />
          </>
        }
      /> */}
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