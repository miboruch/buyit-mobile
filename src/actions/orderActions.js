import axios from 'axios';
import {
  ORDER_START,
  ORDER_SUCCESS,
  ORDER_ERROR,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_ERROR,
  ORDER_SUCCESS_FINISH
} from '../reducers/orderReducer';
import { API_URL } from '../utils/constants';

const makeOrderStart = () => {
  return {
    type: ORDER_START
  };
};

const makeOrderSuccess = () => {
  return {
    type: ORDER_SUCCESS
  };
};

const makeOrderError = error => {
  return {
    type: ORDER_ERROR,
    payload: error
  };
};

const fetchOrdersStart = () => {
  return {
    type: FETCH_ORDERS_START
  };
};

const fetchOrdersSuccess = result => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    payload: result
  };
};

const fetchOrdersError = error => {
  return {
    type: FETCH_ORDERS_ERROR,
    payload: error
  };
};

export const orderSuccessFinish = () => {
  return {
    type: ORDER_SUCCESS_FINISH
  };
};

export const createOrderWithoutAccount = (
  cart,
  totalPrice,
  name,
  lastName,
  email,
  address,
  city,
  country
) => dispatch => {
  dispatch(makeOrderStart());
  try {
    axios.post(`${API_URL}/order/createOrder`, {
      cart,
      totalPrice,
      name,
      lastName,
      email,
      address,
      city,
      country
    });
    dispatch(makeOrderSuccess());
  } catch (error) {
    dispatch(makeOrderError(error));
  }
};

export const createOrderWithAccount = (
  cart,
  totalPrice,
  userID,
  address,
  city,
  country
) => dispatch => {
  dispatch(makeOrderStart());
  try {
    axios.post(`${API_URL}/order/createOrder`, {
      cart,
      totalPrice,
      userID,
      address,
      city,
      country
    });
    dispatch(makeOrderSuccess());
  } catch (error) {
    dispatch(makeOrderError(error));
  }
};

export const fetchUserOrders = token => async dispatch => {
  dispatch(fetchOrdersStart());
  try {
    const { data } = await axios.get(`${API_URL}/order/getUserOrders`, {
      headers: { 'auth-token': token }
    });
    dispatch(fetchOrdersSuccess(data.orders));
  } catch (error) {
    dispatch(fetchOrdersError(error));
  }
};
