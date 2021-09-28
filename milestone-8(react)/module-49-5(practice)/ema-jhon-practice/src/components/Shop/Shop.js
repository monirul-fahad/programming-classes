import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //event handler
  const handleAddToCart = (product) => {
    console.log(product);
  };
  return (
    <div className="row mt-4">
      <div className="col-md-9 px-5 products-container">
        <div className="row mx-auto">
          {products.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="col-md-3">
        <h3>Order summary </h3>
        <h3>Item orderd: </h3>
      </div>
    </div>
  );
};

export default Shop;
