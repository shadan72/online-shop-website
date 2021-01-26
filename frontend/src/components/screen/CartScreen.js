import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../actions/cartAction';
export default function CartScreen(props) {
    const productId=props.match.params.id;
    const quantity=props.location.search ? Number(props.location.search.split('=')[1]):1;
   const  dispatch = useDispatch();
   
    useEffect(()=>{
     if(productId){
         dispatch(addToCart(productId,quantity))
     }

    },[dispatch, productId, quantity])
    return (
        <div>
            <h1>
                Cart Screen
            </h1>
            <p> Add to cart: ProductId:{productId}, Quantity: {quantity}</p>
        </div>
    )
}
