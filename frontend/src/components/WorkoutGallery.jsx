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
        <WorkoutCard name="Bench Press" id ="1" bodyPart="Chest" img="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg"
        addToCart={(workout) => addToCart(workout)}/>
        <WorkoutCard name="Leg Press" id ="2" bodyPart="Leg" img="https://www.shutterstock.com/image-illustration/inclined-leg-press-3d-illustration-260nw-434632384.jpg"
        addToCart={(workout) => addToCart(workout)}/>
        <WorkoutCard name="Chest Press" id ="3" bodyPart="Chest" img="https://www.inspireusafoundation.org/wp-content/uploads/2022/05/chest-press-vs-bench-press-1024x576.jpg"
        addToCart={(workout) => addToCart(workout)}/>
        <WorkoutCard name="Lat Pulldown" id ="4" bodyPart="Back" img="https://www.shutterstock.com/image-illustration/reverse-grip-lat-pulldown-3d-260nw-430936258.jpg"
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
