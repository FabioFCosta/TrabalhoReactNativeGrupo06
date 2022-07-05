import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { Image, } from "react-native-elements";

const UserImage = () => {
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

    <View style={styles.container_title_content_img}>
      {hasImage ? <Image style={styles.usuario_image} source={{ uri: usuario.imagem }} />
        :
        <Icon name="user-circle" color="#dddddd" type="font-awesome" size={70} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container_title_content_img: {
    justifyContent: 'center'
  },
  usuario_image: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
});

export default UserImage;