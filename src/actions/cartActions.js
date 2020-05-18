import { ADD_PRODUCT, REMOVE_PRODUCT, LOAD_CART_ITEMS, RESET_CART } from '../reducers/cartReducer';
import { socket } from '../utils/constants';

const addProduct = product => {
  let cart;
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    localStorage.removeItem('cart');
  } else {
    cart = [];
  }

  cart.push({ ...product, expire: new Date().getTime() + 15 * 60 * 1000 });
  localStorage.setItem('cart', JSON.stringify(cart));

  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

export const clearCart = () => {
  localStorage.setItem('cart', JSON.stringify([]));
  return {
    type: RESET_CART
  };
};

export const resetCart = () => {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  socket.emit('resetCart', { cart: currentCart });
};

export const removeProduct = product => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const updatedCart = cart.filter(item => item._id !== product._id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  return {
    type: REMOVE_PRODUCT,
    payload: product
  };
};

export const loadCartItems = () => {
  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

  return {
    type: LOAD_CART_ITEMS,
    payload: cart
  };
};

export const addProductToCart = product => dispatch => {
  socket.emit('productReservation', { productId: product._id });
  dispatch(addProduct(product));
};

export const removeProductFromCart = product => dispatch => {
  socket.emit('productDeleteReservation', { productId: product._id });
  dispatch(removeProduct(product));
};
