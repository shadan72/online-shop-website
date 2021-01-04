import React from "react";
import ProductScreen from "./components/screen/ProductScreen"
import HomeScreen from "./components/screen/HomeScreen"
import { BrowserRouter, Route } from "react-router-dom";
export default function homepage() {
  return (
    <BrowserRouter>
    <div>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Online Shop
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main> 
        <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          
         
        </main>
        <footer className="row row-center">All Rights Reserved</footer>
      </div>
    </div>
    </BrowserRouter>
  );
}
