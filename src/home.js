import React from "react";
import data from "./data";
import Product from "./components/Product";
export default function homepage() {
  return (
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
          <div className="row center">
            {data.products.map((product) => (
              <div>
              <Product key="product._id" product={product} />
              
              </div>
            ))}
 
          </div>
        </main>
        <footer className="row row-center">All Rights Reserved</footer>
      </div>
   
    </div>
  );
}
