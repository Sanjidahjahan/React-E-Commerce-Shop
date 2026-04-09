import React from "react";

function CartItem({ item, handleAddToCart, handleRemoveFromCart }) {
  return (
    <div className="cart-item">
      
      <div className="delete-btn-container">
        <span
          className="delete-btn" 
          onClick={() => handleRemoveFromCart(item, true)} 
        ></span>
      </div>

      <div className="image"> 
        <img src={require(`./${item.thumbnail_image}`)} alt={item.name} />
      </div>

      <div className="description">
        <span>{item.name}</span>
      </div>

      <div className="quantity">
        <button
          className="minus-btn"
          type="button"
          onClick={() => handleRemoveFromCart(item, false, 1)}

          style={{ marginRight: '4px' }}
        >
          <img src={require("./images/minus.svg").default} alt="minus" />
        </button>

        <input type="text" value={item.quantity} readOnly />

        <button
          className="plus-btn"
          type="button"
          onClick={() => handleAddToCart(item, 1)}
          
          style={{ marginLeft: '4px' }}
        >
          <img src={require("./images/plus.svg").default} alt="plus" />
        </button>
      </div>

      <div className="cart-item-price">
        $<span className="price-amount">{item.price * item.quantity}</span>
      </div>
      
    </div>
  );
}

export default CartItem;