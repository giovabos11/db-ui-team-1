import { useState } from "react";
import { WorkoutCard } from "./WorkoutCard";
import { Cart } from "./Cart";
export const WorkoutGallery = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (workout) => {
    setCartItems([...cartItems, workout]);
  }
  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setCartItems(updatedCartItems);
  };

  return <>
    <div>
      <h1 className="text-center">Workout Gallery</h1>
      <div className="container-fluid workout-grid">
        <WorkoutCard name="Bench Press" id="1" bodyPart="Chest" img="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg"
          addToCart={(workout) => addToCart(workout)} 
          cartItems = {cartItems}
          setCartItems = {setCartItems}/>
        <WorkoutCard name="Leg Press" id="2" bodyPart="Leg" img="https://www.shutterstock.com/image-illustration/inclined-leg-press-3d-illustration-260nw-434632384.jpg"
          addToCart={(workout) => addToCart(workout)} 
          cartItems = {cartItems}
          setCartItems = {setCartItems}/>
        <WorkoutCard name="Chest Press" id="3" bodyPart="Chest" img="https://www.inspireusafoundation.org/wp-content/uploads/2022/05/chest-press-vs-bench-press-1024x576.jpg"
          addToCart={(workout) => addToCart(workout)} 
          cartItems = {cartItems}
          setCartItems = {setCartItems}/>
        <WorkoutCard name="Lat Pulldown" id="4" bodyPart="Back" img="https://www.shutterstock.com/image-illustration/reverse-grip-lat-pulldown-3d-260nw-430936258.jpg"
          addToCart={(workout) => addToCart(workout)}
          cartItems = {cartItems}
          setCartItems = {setCartItems} />
      </div>

      <div className="cart-container">
        <h3 className="text-center">My Workouts</h3>
        
        <Cart cartItems={cartItems}
        removeFromCart={removeFromCart}
        ></Cart>
      </div>
    </div>
  </>
};
