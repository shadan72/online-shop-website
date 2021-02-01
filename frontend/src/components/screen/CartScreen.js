import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../actions/cartAction";
export default function CartScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const removeFromCartHandlet = () => {
    //Delete item
  };
  const checkOutHandler = () => {
    props.history.push("signin?redirect=shipping");
  };
  return (
    <div>
      <h1>Cart Screen</h1>
      {cartItems.length === 0 ? (
        <messagebox>
          Your cart is empty <Link to="/">Home</Link>
        </messagebox>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product}>
              <div>
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="80px"
                    height="100px"
                  />
                </div>
                <div>
                  <Link to={`/product/${item.product}`}>{item.name} </Link>
                </div>
                <div>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countOnStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>${item.price}</div>
                <div>
                  <button
                    type="button"
                    onClick={removeFromCartHandlet(item.product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
          <div>
            Total Price: ({cartItems.reduce((a, c) => a + c.quantity, 0)},
            items) : ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
          </div>
          <div>
            <button
              type="button"
              onClick={checkOutHandler}
              disabled={cartItems.length === 0}
            >
              Check Out
            </button>
          </div>
        </ul>
      )}
      <p>
        {" "}
        Add to cart: ProductId:{productId}, Quantity: {quantity}
      </p>
    </div>
  );
}
