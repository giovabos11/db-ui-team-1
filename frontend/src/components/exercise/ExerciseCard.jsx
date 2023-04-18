import { useState } from "react";

export const ExerciseCard = ({ name, id, bodyPart, img, setCartItems, cartItems }) => {


  const addToCart = () => {
    const itemPresent = cartItems.some(cartItems => cartItems.id === id);
    if (!itemPresent) {
      setCartItems([...cartItems, { name, id, bodyPart }]);
    }
  };

  return <>
    <div className="card" >
      
        <button className="btn  btn-sm" type="button" onClick={addToCart} style={{borderColor:"#905d5d" ,color:"white", backgroundColor: "#905d5d"}}>
        {name}
      </button>
      
    </div>

  </>
};