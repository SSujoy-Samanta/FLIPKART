import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'; // Note the corrected import statement
import {thunk} from 'redux-thunk';
import { getProductsReducer ,getProductDetialsReducer} from './actions/reducers/productReducers';
import { cartReducer } from './actions/reducers/cartReducer';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetials:getProductDetialsReducer,
    cart:cartReducer,
});

const middleWire = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWire))
);

export default store;
