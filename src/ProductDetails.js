import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./App.css";

function ProductDetails({ productsData, handleAddToCart }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = productsData.find(p => p.id.toString() === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Product not found</p>;

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    handleAddToCart(product, Number(quantity)); 
    navigate("/cart"); 
  };

  return (

  <section className="section product-detail">
      <div className="container"> 
        
        <div className="details">
          
          <div className="left">

            <div className="main"> 
              <img 
                src={require(`./${product.thumbnail_image}`)} 
                alt={product.name} 
               />
             </div>
         </div>

          <div className="right">
            
            <span>Home / New Arrivals</span>
            
              <h1 style={{ paddingTop: '10px' }}>{product.name}</h1>            

            <div className="price">${product.price}</div>

            <form className="form">
              <input
                type="text"
                min="1" 
                value={quantity}
                onChange={e => setQuantity(Math.max(0, Number(e.target.value)))} 

                style={{ height: '35px', padding: '5px 5px', width: '35px' }}
              />
              
              <a 
                href="#" 
                className="addCart" 
                onClick={handleAddToCartClick}
                style={{ marginLeft: '4px' }} 
              >
                Add To Cart
              </a>
            </form>
            
            <h3 className="product-details">Product Details</h3>
            
            <p>{product.description}</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;