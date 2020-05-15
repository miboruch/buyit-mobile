import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';
import {productReducer} from './productReducer';

const rootReducer = combineReducers({ authenticationReducer, productReducer });

export default rootReducer;
