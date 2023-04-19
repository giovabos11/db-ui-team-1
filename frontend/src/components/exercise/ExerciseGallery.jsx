import { useEffect, useReducer, useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import { Cart } from "./Cart";
import { Header } from "../global/Header"
import { Link } from "react-router-dom";
export const ExerciseGallery = ({ setInExercise, setInWorkout }) => {
  const [getChestExercises, setChestExercises] = useState([]);
  const [getLegExercises, setLegExercises] = useState([]);
  const [getBackExercises, setBackExercises] = useState([]);
  const [getBicepExercises, setBicepExercises] = useState([]);
  const [getTricepExercises, setTricepExercises] = useState([]);
  const [getArmExercises, setArmExercises] = useState([]);
  const [getAbExercises, setAbExercises] = useState([]);
  const [getCardioExercises, setCardioExercises] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    /*
    getChestExercises().then(x=>setChestExercises(x));
    getLegExercises().then(x=>setLegExercises(x));
    getBackExercises().then(x=>setBackExercises(x));
    getBicepExercises().then(x=>setBicepExercises(x));
    getTricepExercises().then(x=>setTricepExercises(x));
    getArmExercises().then(x=>setArmExercises(x));
    getAbExercises().then(x=>setAbExercises(x));
    getCardioExercises().then(x=>setCardioExercises(x));
    */
  }, [])

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
        </div>
        <h5 className="text-center">Legs</h5>
        <hr></hr>
        <div className=" workout-grid2">
          <ExerciseCard name="Bench Press" id="7"
            cartItems={cartItems}
            setCartItems={setCartItems} />
        </div>
        <h5 className="text-center">Back</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>

        <h5 className="text-center">Biceps</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Triceps</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Arms</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Abs</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


        <h5 className="text-center">Cardio</h5>
        <hr></hr>
        <div className=" workout-grid2 ">
        </div>


      </div>

    </div>
  </>
};
