import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import {productReducer} from './productReducer';
import {cartReducer} from './cartReducer';

const rootReducer = combineReducers({ authenticationReducer, productReducer, cartReducer });

export default rootReducer;
