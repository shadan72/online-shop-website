import Axios from "axios";
import { CART_ADD_ITEM, CART_DELETE_ITEM } from "../constants/CartConstant";

export const addToCart = (productId, quantity) => async (
  dispatch,
  getState
) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countOnStock: data.countOnStock,
      product: data._id,
      quantity,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart=(productId)=>(dispatch,getState)=>{
  dispatch({
    type: CART_DELETE_ITEM,
  payload: productId })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}
