import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../tShirt/tShirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const tShirts = useLoaderData();
  // console.log(tShirts);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
   
    const exists = cart.find((ts) => ts._id === tShirt._id);
    
    if(exists){
       
        toast("You have already added this tShirt");
        return;
    } else {
        
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
