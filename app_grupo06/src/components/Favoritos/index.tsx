import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const Favoritar = ({ produto }) => {
  const [favorited, setFavorited] = useState(false);
  
  const handleAddFavorito = () => {
    setFavorited(!favorited);
  }

  return (
    <TouchableOpacity style={styles.container}>
      {favorited ?
        <Icon name="heart" color="#fe5430" type="font-awesome" size={30} onPress={() => handleAddFavorito()} />
        :
        <Icon name="heart" color="#eee" type="font-awesome" size={30} onPress={() => handleAddFavorito()} />
      }
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
  },

});
export default Favoritar;