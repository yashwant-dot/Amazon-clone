import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZIMaihMMBxSe7WtA-GyAmcJnDxY0h7LFVSQ&usqp=CAU" alt="book"/>

      <button>Add To Basket</button>
    </div>
  )
}

export default Product;
