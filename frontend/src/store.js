import {createStore} from "redux"
import data from "./data"

const initialState={};
const reducer=(state, action)=>{
    return { product: data.products}
};

const store=createStore(reducer, initialState);
export default store;