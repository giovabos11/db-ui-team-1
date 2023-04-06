import { useState } from "react";

export const WorkoutCard = ({ name, id, bodyPart, addToCart }) => {
  
  const handleAddToCart = () => {
    addToCart({ name, id, bodyPart });
  };

  return (
    <div className="workout-card">
      <h2>{name}</h2>
      <p>Body Part: {bodyPart}</p>
      <button id="add-cart-button" type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};