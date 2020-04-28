import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import Sidebar from './src/components/Sidebar.js';

const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen
  },
  {
    contentComponent: (props) => <Sidebar {...props} />,
    drawerPosition: 'right'
  }
);

export default createAppContainer(DrawerNavigation);
