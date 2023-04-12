import { useState } from "react";

export const Card = ({ name, id, bodyPart, img, setCartItems, cartItems }) => {


  const addToCart = () => {
    const itemPresent = cartItems.some(cartItems => cartItems.id === id);
    if (!itemPresent) {
      setCartItems([...cartItems, { name, id, bodyPart }]);
    }
  };

  return <>
    <div className="card" >
      <img className="card-img-top" style={{height:"12rem", width:"26.2rem"}} src={img}></img>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Body Part: {bodyPart}</p>
      </div>
      <button className="btn btn-outline-success btn-sm" type="button" onClick={addToCart}>
        Add to Workout
      </button>
    </div>

  </>
};