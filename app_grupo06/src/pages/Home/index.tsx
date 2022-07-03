import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Image } from "react-native-elements";

import ScrollCategorias from "../../components/Categorias/ScrollCategorias";
import ScrollProdutos from "../../components/Produtos/ScrollProdutos";
import { SearchBar } from "../../components/Search";
import TitulosHome from "../../components/Titulos";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";

const Home = ({ navigation }) => {
  const { usuario } = useContext(AutenticacaoContext);
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    usuarioHasImage();
  }, []);

  const usuarioHasImage = () => {
    console.log(usuario.imagem)
    usuario.imagem === undefined ? setHasImage(false) : setHasImage(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_title}>
        <View style={styles.container_title_content_text}>
          <TitulosHome titulo="Conheça os melhores jogos" />
        </View>
        <View style={styles.container_title_content_img}>
          {hasImage ? <Image style={styles.usuario_image} source={{uri:usuario.imagem}} />
            :
            <Icon name="user-circle" color="#dddddd" type="font-awesome" size={70} />
          }
        </View>
      </View>
      <ScrollCategorias navigation={navigation} />
      <SearchBar titulo="Encontre seu jogo" type="Produto" />
      <ScrollProdutos navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    margin: 0,
    backgroundColor: '#070D2D'
  },
  container_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  container_title_content_text:{
    width:'50%',
  },
  container_title_content_img:{
    justifyContent:'center'
  },
  usuario_image: {
    width: 70,
    height: 70,
    borderRadius:35
  }
})

export default Home;

