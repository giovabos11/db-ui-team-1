import { useState } from "react";

export const WorkoutCard = ({ name, id, bodyPart, img, setCartItems, cartItems }) => {
 

  const addToCart = () => {
    const itemPresent = cartItems.some(cartItems => cartItems.id === id);
    if(!itemPresent){
      setCartItems([...cartItems, {name, id, bodyPart}]);
    }
  };

  return <>
    <div className="workout-card text-left rounded">
      <img id="workoutPic" src={img}></img>
      <h2>{name}</h2>
      <p>Body Part: {bodyPart}</p>
      <div id="clear"></div>
      <button id="add-cart-button" type="button" onClick={addToCart}>
        Add to Workout
      </button>
    </div>
  </>
};