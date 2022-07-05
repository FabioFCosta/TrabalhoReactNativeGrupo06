import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, withBadge } from "react-native-elements";
import Produto from "../pages/Produto";

import Login from "../pages/Login";
import Home from "../pages/Home";
import PerfilUsuario from "../pages/PerfilUsuario";
import Carrinho from "../pages/Carrinho";
import Favoritos from "../pages/Favoritos";
import { CadastroUsuario } from "../pages/CadastroUsuario";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { FavoritosContext } from "../context/FavoritosContext";
import { StatusBar } from "react-native";
import { RecuperacaoSenha } from "../pages/RecuperacaoSenha";

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {

  const { contarQtdProdutos } = useContext(CarrinhoContext);
  const { contarQtdFavorito } = useContext(FavoritosContext);

  const BadgeIcon = withBadge(contarQtdProdutos())(Icon);
  const BadgeIconFav = withBadge(contarQtdFavorito())(Icon);

  return (
    <TabNavigation.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      headerStyle: {
        backgroundColor: '#546ee5',
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#c4dfe8',
        fontSize: 30,
        fontWeight: '900'
      },
      tabBarStyle: {
        backgroundColor: '#546ee5',
        borderBottomWidth: 0,
        borderTopWidth: 0,
      },
    }}>
      <TabNavigation.Screen
        name='Foldbreakers Store'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (<Icon name="home" color="#c4dfe8" type="font-awesome" size={24} />)
        }}
        component={Home}
      />
      <TabNavigation.Screen
        name='Perfil'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (<Icon name="user" color="#c4dfe8" type="font-awesome" size={24} />)
        }}
        component={PerfilUsuario}
      />
      <TabNavigation.Screen
        name='Favoritos'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (<BadgeIconFav name="heart" color="#c4dfe8" type="font-awesome" size={24}/>)
        }}
        component={Favoritos}
      />
      <TabNavigation.Screen
        name='Carrinho'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <BadgeIcon name="shopping-cart" color="#c4dfe8" type="font-awesome" size={24} />)
        }}
        component={Carrinho}
      />
    </TabNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{
        headerShown: false
      }}>
        <StackNavigation.Screen
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          name='HomeScreen'
          component={BottomTabNavigator}
        />
        <StackNavigation.Screen
          name='ProdutoScreen'
          component={Produto}
        />
        <StackNavigation.Screen
          name='CarrinhoScreen'
          component={Carrinho}
        />
        <StackNavigation.Screen
          name='CadastroUsuario'
          component={CadastroUsuario}
        />
        <StackNavigation.Screen
          name='RecuperacaoSenha'
          component={RecuperacaoSenha}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export default Routes;