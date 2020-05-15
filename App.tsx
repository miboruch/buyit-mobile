import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import Sidebar from './src/components/Sidebar.js';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home'
      }
    },
    ProductScreen: {
      screen: ProductsScreen,
      navigationOptions: {
        title: 'Product'
      }
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login'
      }
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        title: 'Register'
      }
    }
  },
  {
    contentComponent: (props) => <Sidebar {...props} />,
    drawerPosition: 'right',
    drawerBackgroundColor: '#2d2d2d',
    drawerWidth: Dimensions.get('window').width * 0.85,
    hideStatusBar: true
  }
);

const AppContainer = createAppContainer(DrawerNavigation);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
