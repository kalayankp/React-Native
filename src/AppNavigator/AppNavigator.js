// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import Cart from './src/Screens/Cart';
import Products from './src/Screens/Products';
import MyProfile from './src/Screens/MyProfile';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
