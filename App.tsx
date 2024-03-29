import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import Cart from './src/Screens/Cart';
import MyProfile from './src/Screens/MyProfile';
import ProductDetail from './src/Screens/ProductDetail';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="ProductDetail" component={ProductDetail} />
      <Tab.Screen name="My Profile" component={MyProfile} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
