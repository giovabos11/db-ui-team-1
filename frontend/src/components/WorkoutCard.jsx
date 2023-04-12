import { useState } from "react";

export const WorkoutCard = ({ name, id, bodyPart, img, setCartItems, cartItems }) => {


  const addToCart = () => {
    const itemPresent = cartItems.some(cartItems => cartItems.id === id);
    if (!itemPresent) {
      setCartItems([...cartItems, { name, id, bodyPart }]);
    }
  };

  return <>
    <div className="card" >
      <img className="card-img-top" id="workoutPic" style={{height:"6rem", width:"6rem"}} src={img}></img>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Body Part: {bodyPart}</p>
      </div>
      <button id="add-cart-button" type="button" onClick={addToCart}>
        Add to Workout
      </button>
    </div>

  </>
};