import { useEffect, useReducer, useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import { Cart } from "./Cart";
import { Header } from "../global/Header"
import { Link } from "react-router-dom";
import { get_exercises } from "../../api/allApi";
export const ExerciseGallery = ({ setInExercise, setInWorkout }) => {
  const [chestExercises, setChestExercises] = useState([]);
  const [legExercises, setLegExercises] = useState([]);
  const [backExercises, setBackExercises] = useState([]);
  const [bicepExercises, setBicepExercises] = useState([]);
  const [tricepExercises, setTricepExercises] = useState([]);
  const [armExercises, setArmExercises] = useState([]);
  const [abExercises, setAbExercises] = useState([]);
  const [cardioExercises, setCardioExercises] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    
    get_exercises("chest").then(x=>setChestExercises(x));
    get_exercises("leg").then(x=>setLegExercises(x));
    get_exercises("back").then(x=>setBackExercises(x));
    get_exercises("bicep").then(x=>setBicepExercises(x));
    get_exercises("tricep").then(x=>setTricepExercises(x));
    get_exercises("arm").then(x=>setArmExercises(x));
    get_exercises("ab").then(x=>setAbExercises(x));
    get_exercises("cardio").then(x=>setCardioExercises(x));
    
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
