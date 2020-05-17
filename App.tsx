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
import Sidebar from './src/components/Sidebar.js';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ProductScreen from './src/screens/ProductScreen';

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

const Stack = createStackNavigator();

const AppContainer = createAppContainer(DrawerNavigation);

/* screenOptions={{ header: () => null }} */
const App = () => (
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
      </Stack.Navigator>
      {/*<AppContainer />*/}
    </NavigationContainer>
  </Provider>
);

export default App;
