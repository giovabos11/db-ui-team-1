import { useState } from "react";

import { Header } from "../GlobalComponents/Header"
export const WorkoutGallery = () => {
  const [cartItems, setCartItems] = useState([]);


  return <>
    <div className="" style={{backgroundColor:"#b7ccdf"}}>
      <div className="py-3">
        <Header
        />
      </div>

      <div className="">
        <h1 className="text-center">Workout Gallery</h1>
        <div className="m-3 text-center">
          <button className="btn text-white m-2" style={{backgroundColor:"#A8BA9A", outlineColor:"#A8BA9A"}}>Workouts</button>
          <button className="btn text-white m-2" style={{backgroundColor:"#A8BA9A", outlineColor:"#A8BA9A"}}>Exercises</button>
        </div>
        </div>
    </div>
  </>
};
