import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const enhancer = compose(applyMiddleware(thunk));

export default createStore(rootReducer, enhancer);
