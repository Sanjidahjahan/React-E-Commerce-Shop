import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, handleAddToCart, handleRemoveFromCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const topClearanceHeight = '1rem'; 

  return (
    <div className="container"> 

        <div style={{ height: topClearanceHeight }}></div>
        
        <div className="section-title" style={{ textAlign: 'center' }}>
          
          <h2 style={{ fontSize: '3rem', fontWeight: 500, paddingTop: '70px'}}>
            YOUR CART
          </h2> 
        </div>

        {cart.length === 0 ? (
          <span className="empty-cart">No items in cart.</span>
        ) : (
          <>
            <div className="shopping-cart" style={{ marginTop: '60px' }} >
                
                {cart.map(cartItem => (
                  <CartItem
                    key={cartItem.id}
                    item={cartItem}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                ))}

                <div className="total-container">
                  <span id="cart-total-label">Total:</span>
                  <span id="cart-total-dollar">$</span>
                  <span id="cart-total-amount">{totalPrice}</span>
                </div>

                <div className="purchase-btn-container">
                  <a href="#" className="proceed-to-checkout">Proceed to Checkout</a>
                </div>
            </div>
          </>
        )}
    </div> 
  );
}

export default Cart;