import { useState } from "react";
import { WorkoutCard } from "./WorkoutCard";
import { Cart } from "./Cart";
import { Header } from "./Header"
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
      <div className="py-3">
      <Header
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      </div>
      <div className="position-relative mt-5">
        <h1 className="text-center">Exercise Gallery</h1>
        <div className="container-fluid workout-grid">
          <WorkoutCard name="Bench Press" id="1" bodyPart="Chest" img="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg"
            addToCart={(workout) => addToCart(workout)}
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <WorkoutCard name="Leg Press" id="2" bodyPart="Leg" img="https://www.shutterstock.com/image-illustration/inclined-leg-press-3d-illustration-260nw-434632384.jpg"
            addToCart={(workout) => addToCart(workout)}
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <WorkoutCard name="Chest Press" id="3" bodyPart="Chest" img="https://www.inspireusafoundation.org/wp-content/uploads/2022/05/chest-press-vs-bench-press-1024x576.jpg"
            addToCart={(workout) => addToCart(workout)}
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <WorkoutCard name="Lat Pulldown" id="4" bodyPart="Back" img="https://www.shutterstock.com/image-illustration/reverse-grip-lat-pulldown-3d-260nw-430936258.jpg"
            addToCart={(workout) => addToCart(workout)}
            cartItems={cartItems}
            setCartItems={setCartItems} />
        </div>
      </div>
      
    </div>
  </>
};
