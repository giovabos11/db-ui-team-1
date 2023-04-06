import { useState } from "react";

export const WorkoutCard = ({ name, id, bodyPart, addToCart, img }) => {
  
  const handleAddToCart = () => {
    addToCart({ name, id, bodyPart });
  };

  return (
    <div className="workout-card">
      <h2>{name}</h2>
      <p>Body Part: {bodyPart}</p>
      <img id="workoutPic" src={img}></img>
      <div id="clear"></div>
      <button id="add-cart-button" type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};