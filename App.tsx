import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ProductScreen from './src/screens/ProductScreen';
import AccountScreen from './src/screens/AccountScreen';
import OrderSummaryScreen from './src/screens/OrderSummaryScreen';
import CartScreen from './src/screens/CartScreen';

const Stack = createStackNavigator();

/* screenOptions={{ header: () => null }} */
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#040404',
              borderBottomWidth: 0
            },
            headerTintColor: '#f3f3f3',
            headerTitleStyle: {
              color: '#f3f3f3',
              fontFamily: 'Futura'
            }
          }}
        >
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Products'} component={ProductsScreen} />
          <Stack.Screen name={'Product'} component={ProductScreen} />
          <Stack.Screen name={'Login'} component={LoginScreen} />
          <Stack.Screen name={'Register'} component={RegisterScreen} />
          <Stack.Screen name={'Account'} component={AccountScreen} />
          <Stack.Screen name={'OrderSummary'} component={OrderSummaryScreen} />
          <Stack.Screen name={'Cart'} component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
