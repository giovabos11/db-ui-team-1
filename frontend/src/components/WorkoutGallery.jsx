import { useState } from "react";
import { WorkoutCard } from "./WorkoutCard";

export const WorkoutGallery = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (workout) => {
    setCartItems([...cartItems, workout]);
  }

  return (
    <div>
      <h1>Workout Gallery</h1>
      <div className="workout-grid">
        <WorkoutCard name="Bench Press" id ="1" bodyPart="Chest"
        addToCart={(workout) => addToCart(workout)}/>
        <WorkoutCard name="Leg Press" id ="2" bodyPart="Leg"
        addToCart={(workout) => addToCart(workout)}/>
        <WorkoutCard name="Chest Press" id ="3" bodyPart="Chest"
        addToCart={(workout) => addToCart(workout)}/>
        <WorkoutCard name="Lat Pulldown" id ="4" bodyPart="Back"
        addToCart={(workout) => addToCart(workout)}/>
      </div>

      <div className="cart-container">
      <h2>Cart</h2>
        <div className="cart-dropdown">
          
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
