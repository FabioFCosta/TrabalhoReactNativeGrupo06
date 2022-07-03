import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import Produto from "../pages/Produto";

import Login from "../pages/Login";
import Home from "../pages/Home";
import PerfilUsuario from "../pages/PerfilUsuario";
import Carrinho from "../pages/Carrinho";
import Favoritos from "../pages/Favoritos";

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator screenOptions={{
      tabBarHideOnKeyboard:true,
      headerShown: false,
      tabBarStyle: { backgroundColor: '#fff', borderBottomWidth: 0, },
    }}>
      <TabNavigation.Screen
        name='HomeTabScreen'
        options={{ tabBarShowLabel:false, tabBarIcon:({color,size})=>(<Icon name="home" color="#000" type="font-awesome" size={24} />)}}
        component={Home}  
         />
      <TabNavigation.Screen
        name='Perfil'
        options={{ tabBarShowLabel:false, tabBarIcon:({color,size})=>(<Icon name="user" color="#000" type="font-awesome" size={24} />)}}
        component={PerfilUsuario} 
        />
        <TabNavigation.Screen
        name='Carrinho'
        options={{ tabBarShowLabel:false, tabBarIcon:({color,size})=>(<Icon name="shopping-cart" color="#000" type="font-awesome" size={24} />)}}
        component={Carrinho} 
        />
        <TabNavigation.Screen
        name='Favoritos'
        options={{ tabBarShowLabel:false,tabBarIcon:({color,size})=>(<Icon name="heart" color="#000" type="font-awesome" size={24} />)}}
        component={Favoritos} 
        />
    </TabNavigation.Navigator>
  );
}
const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator>
      <DrawerNavigation.Screen
        name="TabNavigationScreen"
        options={{ title: 'Home' }}
        component={BottomTabNavigator} />
      <DrawerNavigation.Screen
        name="Perfil"
        options={{ title: 'Perfil' }}
        component={PerfilUsuario} />
    </DrawerNavigation.Navigator>
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
          component={NavigationDrawer}
        />
        <StackNavigation.Screen
          name='ProdutoScreen'
          component={Produto}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export default Routes;