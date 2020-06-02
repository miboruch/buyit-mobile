import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import {productReducer} from './productReducer';
import {cartReducer} from './cartReducer';
import {orderReducer} from './orderReducer';

const rootReducer = combineReducers({ authenticationReducer, productReducer, cartReducer, orderReducer });

export default rootReducer;
