import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_CART_ITEMS, RESET_CART } from '../reducers/cartReducer';
import { socket } from '../utils/helpers';
import { AsyncStorage } from 'react-native';

const addProductSuccess = product => {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

const removeProductSuccess = product => {
  return {
    type: REMOVE_PRODUCT,
    payload: product
  };
};

const loadCartItemsSuccess = cart => {
  return {
    type: LOAD_CART_ITEMS,
    payload: cart
  };
};

const resetCartSuccess = () => {
  return {
    type: RESET_CART
  };
};

const addProduct = product => async dispatch => {
  let cart;
  try {
    const result = await AsyncStorage.getItem('cart');
    const time = new Date().getTime() + 15 * 60 * 1000;
    if (result) {
      cart = JSON.parse(result);
      await AsyncStorage.removeItem('cart');
      cart.push({ ...product, expire: time });
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    }

    dispatch(addProductSuccess({ ...product, expire: time }));
  } catch (error) {
    console.log(error);
  }
};

export const clearCart = () => async dispatch => {
  await AsyncStorage.setItem('cart', JSON.stringify([]));
  dispatch(resetCartSuccess());
  console.log(await AsyncStorage.getItem('cart'));
};

export const resetCart = async () => {
  const currentCart = JSON.parse(await AsyncStorage.getItem('cart'));
  socket.emit('resetCart', { cart: currentCart });
};

export const removeProduct = product => async dispatch => {
  const currentCart = await AsyncStorage.getItem('cart');
  const cart = JSON.parse(currentCart);
  const updatedCart = cart.filter(item => item._id !== product._id);
  await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));

  dispatch(removeProductSuccess(product));
};

export const loadCartItems = () => async dispatch => {
  const currentCart = await AsyncStorage.getItem('cart');
  const cart = currentCart ? JSON.parse(currentCart) : [];

  dispatch(loadCartItemsSuccess(cart));
};

export const addProductToCart = product => dispatch => {
  socket.emit('productReservation', { productId: product._id });
  dispatch(addProduct(product));
};

export const removeProductFromCart = product => dispatch => {
  socket.emit('productDeleteReservation', { productId: product._id });
  dispatch(removeProduct(product));
};
