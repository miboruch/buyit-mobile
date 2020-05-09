import { combineReducers } from 'redux';
import { authenticationReducer } from './authenticationReducer';

const rootReducer = combineReducers({ authenticationReducer });

export default rootReducer;
