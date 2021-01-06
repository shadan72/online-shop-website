import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import { ProductItemReducer, productListReducer } from "./reducers/ProductReducers";

const initialState={};
const reducer=combineReducers({
    productList:productListReducer,
    ProductItem:ProductItemReducer
});

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;