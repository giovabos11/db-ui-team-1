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
      <img className="card-img-top " style={{height:"12rem", width:"26.229rem"}} src={img}></img>
      <div className="card-body" style ={{backgroundColor:"#F5F5DC"}}>
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Body Part: {bodyPart}</p>
        <button className="btn  btn-sm" type="button" onClick={addToCart} style={{borderColor:"#905d5d" ,color:"white", backgroundColor: "#905d5d"}}>
        Add to Workout
      </button>
      </div>
      
    </div>

  </>
};