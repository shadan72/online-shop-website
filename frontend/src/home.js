import React from "react";
import ProductScreen from "./components/screen/ProductScreen";
import HomeScreen from "./components/screen/HomeScreen";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./components/screen/CartScreen";
import { useSelector } from "react-redux";
export default function Homepage() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">
                Online Shop
              </Link>
            </div>
            <div>
              <Link to="/cart">
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
                Cart
              </Link>
              <Link to="/signin">Sign In</Link>
            </div>
          </header>
          <main>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
          </main>
          <footer className="row row-center">All Rights Reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}
