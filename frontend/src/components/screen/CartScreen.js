import React from 'react'

export default function CartScreen(props) {
    const productId=props.match.params.id;
    const quantity=props.location.search ? Number(props.location.search.split('=')[1]):1;
    return (
        <div>
            <h1>
                Cart Screen
            </h1>
            <p> Add to cart: ProductId:{productId}, Quantity: {quantity}</p>
        </div>
    )
}
