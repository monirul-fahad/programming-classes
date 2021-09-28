import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { name, price, seller, img, stock } = props.product;
  return (
    <div className="col-md-6">
      <div className="product-container">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h3 className="text-primary">Name: {name}</h3>
          <p>
            <small>Sells by: {seller}</small>
          </p>
          <h5>Price: {price}</h5>
          <p>
            <small>only {stock} left in stock - order soon</small>
          </p>
          <button
            onClick={() => props.handleAddToCart(props.product)}
            className="btn btn-warning "
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
