import { useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import { Cart } from "./Cart";
import { Header } from "../global/Header"
import { Link } from "react-router-dom";
export const ExerciseGallery = ({ setInExercise, setInWorkout }) => {
  const [cartItems, setCartItems] = useState([]);


  return <>
    <div className="" style={{ backgroundColor: "#b7ccdf", minHeight: "100vh" }}>
      <div className="py-3">
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
      <h1 className="text-center">Exercise Gallery</h1>
      <div className="m-3 text-center">
        <Link to="../workout" className="btn text-white m-2" style={{ backgroundColor: "#A8BA9A", outlineColor: "#A8BA9A" }}>Workouts</Link>
        <Link to="../exercise" className="btn text-white m-2" style={{ backgroundColor: "#C8E2C0", outlineColor: "#A8BA9A" }}>Exercises</Link>
      </div>
      <div className="container">
        <h5 className="text-center">Chest</h5>
        <hr></hr>
        <div className=" workout-grid2">
          <ExerciseCard name="Bench Press" id="1"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Leg Press" id="2"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Chest Press" id="3"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Lat Pulldown" id="4"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Something XYZ" id="5"
            cartItems={cartItems}
            setCartItems={setCartItems} />
          <ExerciseCard name="Random" id="6"
            cartItems={cartItems}
            setCartItems={setCartItems} />
        </div>
        <h5 className="text-center">Legs</h5>
        <hr></hr>
        <div className=" workout-grid2">
          <ExerciseCard name="Bench Press" id="7"
            cartItems={cartItems}
            setCartItems={setCartItems} />
        </div>
        <h5 className="text-center">Arms</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>

        <h5 className="text-center">Test</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Test</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Test</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Test</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Test</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Test</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Test</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Test</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>
      </div>

    </div>
  </>
};
