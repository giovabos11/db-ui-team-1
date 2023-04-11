import { useState } from "react";

export const WorkoutCard = ({ name, id, bodyPart, addToCart, img, setCartItems, cartItems }) => {

  const handleAddToCart = () => {
    const itemPresent = cartItems.some(cartItems => cartItems.id === id);
    if(!itemPresent){
    addToCart({ name, id, bodyPart });
    }
  };

  return <>
    <div className="workout-card text-left rounded">
      <img id="workoutPic" src={img}></img>
      <h2>{name}</h2>
      <p>Body Part: {bodyPart}</p>
      <div id="clear"></div>
      <button id="add-cart-button" type="button" onClick={handleAddToCart}>
        Add to Workout
      </button>
    </div>
  </>
};