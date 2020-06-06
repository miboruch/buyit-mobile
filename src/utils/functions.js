import { AsyncStorage } from 'react-native';

export const isProductInAsyncStorage = async product => {
  const cart = JSON.parse(await AsyncStorage.getItem('cart'));
  return cart.map(item => product._id === item._id);
};
