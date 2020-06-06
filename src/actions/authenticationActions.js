import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_REGISTER_FAILURE,
  AUTH_LOGOUT,
  GET_USER_INFO,
  GET_USER_INFO_ERROR,
  UPDATE_SUCCESS,
  UPDATE_FAILURE
} from '../reducers/authenticationReducer';
import { API_URL } from '../utils/helpers';
import { clearCart } from './cartActions';
import { fetchUserOrders } from './orderActions';
import { fetchAllUserProducts } from './productActions';

const setAuthItems = async (userID, token) => {
  try {
    await AsyncStorage.setItem('userID', userID);
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
};

const getAuthItems = async () => {
  try {
    const userID = await AsyncStorage.getItem('userID');
    const token = await AsyncStorage.getItem('token');

    return { userID, token };
  } catch (error) {
    console.log(error);
  }
};

const removeAuthItems = async () => {
  try {
    await AsyncStorage.removeItem('userID');
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log(error);
  }
};

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = (token, userID) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      token: token,
      userID: userID
    }
  };
};

const authLoginFailure = error => {
  return {
    type: AUTH_LOGIN_FAILURE,
    payload: {
      error: error
    }
  };
};

const authRegisterFailure = error => {
  return {
    type: AUTH_REGISTER_FAILURE,
    payload: {
      error: error
    }
  };
};

export const userInfoSuccess = userInfo => {
  return {
    type: GET_USER_INFO,
    payload: userInfo
  };
};

export const userInfoError = error => {
  return {
    type: GET_USER_INFO_ERROR,
    payload: error
  };
};

const updateSuccess = () => {
  return {
    type: UPDATE_SUCCESS
  };
};

const updateFailure = error => {
  return {
    type: UPDATE_FAILURE,
    payload: error
  };
};

export const getUserInfo = token => async dispatch => {
  dispatch(authStart());
  try {
    const { data } = await axios.get(`${API_URL}/user/information`, {
      headers: { 'auth-token': token }
    });

    dispatch(userInfoSuccess(data));
  } catch (error) {
    dispatch(userInfoError(error));
  }
};

const logout = () => {
  return {
    type: AUTH_LOGOUT
  };
};

export const authLogout = navigation => async dispatch => {
  dispatch(authStart());

  navigation.navigate('Home');
  await removeAuthItems();
  dispatch(clearCart());
  dispatch(logout());
};

export const userLogin = (email, password, navigation) => async dispatch => {
  dispatch(authStart());

  try {
    const { data } = await axios.post(`${API_URL}/user/login`, { email, password });
    navigation.navigate('Home');
    dispatch(authSuccess(data.token, data.id));
    dispatch(getUserInfo(data.token));
    // dispatch(fetchUserOrders(data.token));
    // dispatch(fetchAllUserProducts(data.token));
    await setAuthItems(data.id, data.token);
  } catch (error) {
    dispatch(authLoginFailure(error));
  }
};

export const userRegister = (
  email,
  password,
  name,
  lastName,
  city,
  address,
  country,
  navigation
) => async dispatch => {
  dispatch(authStart());

  try {
    const { data } = await axios.post(`${API_URL}/user/register`, {
      email,
      password,
      name,
      lastName,
      city,
      address,
      country
    });
    navigation.navigate('Home');
    await setAuthItems(data._doc._id, data.token);
    dispatch(authSuccess(data.token, data._doc._id));
    dispatch(getUserInfo(data.token));
  } catch (error) {
    dispatch(authRegisterFailure(error));
  }
};

export const authenticationCheck = () => async dispatch => {
  const { userID, token } = await getAuthItems();
  if (userID && token) {
    dispatch(authSuccess(token, userID));
    dispatch(getUserInfo(token));
    dispatch(fetchUserOrders(token));
    dispatch(fetchAllUserProducts(token));
  }
};

export const userUpdate = (name, lastName, city, address, country, token) => async dispatch => {
  dispatch(authStart());
  try {
    await axios.put(
      `${API_URL}/user/update`,
      { name, lastName, city, address, country },
      {
        headers: { 'auth-token': token }
      }
    );

    dispatch(updateSuccess());
    dispatch(getUserInfo(token));
  } catch (error) {
    dispatch(updateFailure(error));
  }
};
