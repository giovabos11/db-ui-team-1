import { useState } from "react";

export const WorkoutCard = ({ name, id, bodyPart, img}) => {
  const [cart, setCart] = useState([]);

  const addToCart = () =>{
    setCart([...cart, { id }]);
  }
  return (
    <div className="workout-card">
      <h2>{name}</h2>
      <p>Body Part: {bodyPart}</p>
      <button id="add-cart-button" type="button" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};