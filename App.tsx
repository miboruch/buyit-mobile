import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import Sidebar from './src/components/Sidebar.js';

const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home'
      }
    },
    ProductScreen: {
      screen: ProductScreen,
      navigationOptions: {
        title: 'Product'
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

export default createAppContainer(DrawerNavigation);
