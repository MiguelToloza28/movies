import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import Reducer from './Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    Reducer,
        /*preloadedState, */ composeEnhancers(applyMiddleware(promise)),
);

export default store;