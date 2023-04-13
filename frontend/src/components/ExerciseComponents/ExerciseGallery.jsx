import { useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import { Cart } from "./Cart";
import { Header } from "../GlobalComponents/Header"
export const ExerciseGallery = () => {
  const [cartItems, setCartItems] = useState([]);


  return <>
    <div className="" style={{backgroundColor:"#b7ccdf"}}>
      <div className="py-3">
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
      <div className="">
        <h1 className="text-center">Exercise Gallery</h1>
        <div className="m-3 text-center">
          <button className="btn text-white m-2" style={{backgroundColor:"#A8BA9A", outlineColor:"#A8BA9A"}}>Workouts</button>
          <button className="btn text-white m-2" style={{backgroundColor:"#A8BA9A", outlineColor:"#A8BA9A"}}>Exercises</button>
        </div>
        <div className="input-group container pb-3">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" id="searchButton">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="container workout-grid">
          <ExerciseCard name="Bench Press" id="1" bodyPart="Chest" img="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Leg Press" id="2" bodyPart="Leg" img="https://www.shutterstock.com/image-illustration/inclined-leg-press-3d-illustration-260nw-434632384.jpg"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Chest Press" id="3" bodyPart="Chest" img="https://www.inspireusafoundation.org/wp-content/uploads/2022/05/chest-press-vs-bench-press-1024x576.jpg"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Lat Pulldown" id="4" bodyPart="Chest" img="https://www.shutterstock.com/image-illustration/reverse-grip-lat-pulldown-3d-260nw-430936258.jpg"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Something XYZ" id="5" bodyPart="Back" img="https://www.shutterstock.com/image-illustration/reverse-grip-lat-pulldown-3d-260nw-430936258.jpg"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Random" id="6" bodyPart="Back" img="https://www.shutterstock.com/image-illustration/reverse-grip-lat-pulldown-3d-260nw-430936258.jpg"
            cartItems={cartItems}
            setCartItems={setCartItems} />
        </div>
      </div>

    </div>
  </>
};
