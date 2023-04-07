import React from 'react'
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
  // console.log(cart);

  let message;
  if(cart.length === 0){
    message = <p>Please add some products</p>
  }
  else{
    message = <div>
      <h3>Boroloxxx</h3>
      <p><small>THanks fr giving your money</small></p>
    </div>
  }

  return (
    <div>
      
      <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
      <p className={`bold ${cart.ength === 3 ? 'yellow' : 'purple'}`}>something</p>
      {
        cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>Fokira</span>
      }
      {message}
      {
        cart.map(tShirt => <p key={tShirt._id}>{tShirt.name}
        <button onClick={()=> handleRemoveFromCart(tShirt._id)}>X</button></p> )
      }
      {
        cart.length === 2 && <p>Double bonanza!!!</p>
      }
      {
        cart.length === 3 || <h3>3 pis to hoi nai...</h3>
      }
    </div>
  )
}

export default Cart


/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * 
 * */ 

/**
 * CONDITIONAL CSS Class
 * 1. use ternary 
 * 2. ternary inside template string
 * */ 