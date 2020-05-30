import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { socket } from './src/utils/helpers';

import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ProductScreen from './src/screens/ProductScreen';
import AccountScreen from './src/screens/AccountScreen';
import OrderSummaryScreen from './src/screens/OrderSummaryScreen';
import CartScreen from './src/screens/CartScreen';
import UserProductsScreen from './src/screens/UserProductsScreen';
import {
  addToProducts,
  removeFromProducts,
  reserveProduct,
  unreserveProduct
} from './src/actions/productActions';
import { clearCart, loadCartItems, removeProduct } from './src/actions/cartActions';
import { isProductInAsyncStorage } from './src/utils/functions';
import { authenticationCheck } from './src/actions/authenticationActions';

const Stack = createStackNavigator();

/* screenOptions={{ header: () => null }} */
const App = ({
  isLoggedIn,
  authenticationCheck,
  loadCartItems,
  addToProducts,
  removeFromProducts,
  removeFromCart,
  reserveProduct,
  unreserveProduct,
  clearCart
}) => {
  useEffect(() => {
    !isLoggedIn && authenticationCheck();
    loadCartItems();
  }, []);

  useEffect(() => {
    socket.on('productAdded', ({ addedProduct }) => {
      addToProducts(addedProduct);
    });
  });

  useEffect(() => {
    socket.on('productRemoved', ({ removedProductId }) => {
      removeFromProducts(removedProductId);
    });

    socket.on('productReserved', ({ updatedProduct }) => {
      reserveProduct(updatedProduct._id);
    });

    socket.on('productUnreserved', ({ updatedProduct }) => {
      unreserveProduct(updatedProduct._id);
    });

    socket.on('productTimeout', async ({ expiredProduct }) => {
      const [isInStorage] = await isProductInAsyncStorage(expiredProduct);
      if (isInStorage) {
        removeFromCart(expiredProduct);
        unreserveProduct(expiredProduct._id);
      }
    });

    socket.on('productOrdered', ({ orderedProduct }) => {
      clearCart();
      orderedProduct.map((item) => {
        removeFromProducts(item._id);
      });
    });

    socket.on('resetCartFinish', ({ cart }) => {
      cart.map((item) => {
        unreserveProduct(item._id);
      });

      clearCart();
    });
  }, []);

  return (
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
        <Stack.Screen name={'UserProducts'} component={UserProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({ authenticationReducer: { isLoggedIn } }) => {
  return { isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticationCheck: () => dispatch(authenticationCheck()),
    loadCartItems: () => dispatch(loadCartItems()),
    addToProducts: (product) => dispatch(addToProducts(product)),
    removeFromProducts: (productID) => dispatch(removeFromProducts(productID)),
    removeFromCart: (product) => dispatch(removeProduct(product)),
    reserveProduct: (productId) => dispatch(reserveProduct(productId)),
    unreserveProduct: (productId) => dispatch(unreserveProduct(productId)),
    clearCart: () => dispatch(clearCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
