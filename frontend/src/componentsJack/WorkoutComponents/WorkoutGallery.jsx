import { useState } from "react";
import { WorkoutCard } from "./WorkoutCard";
import { Header } from "../GlobalComponents/Header"
export const WorkoutGallery = ({setInExercise, setInWorkout, inExercise, inWorkout}) => {
  const [cartItems, setCartItems] = useState([]);


  return <>
    <div className="" style={{ backgroundColor: "#b7ccdf", minHeight:"100vh"}}>
    <div className="py-3">
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
          inExercise={inExercise}
          inWorkout={inWorkout}
        />
      </div>

      <div className="">
        <h1 className="text-center">Workout Gallery</h1>
        <div className="m-3 text-center">
          <button className="btn text-white m-2" style={{ backgroundColor: "#A8BA9A", outlineColor: "#A8BA9A" }}>Workouts</button>
          <button className="btn text-white m-2" style={{ backgroundColor: "#A8BA9A", outlineColor: "#A8BA9A" }}
          onClick={()=>{
            setInWorkout(false);
            setInExercise(true);
          }}
          >Exercises</button>
        </div>
      </div>
      <div className="container workout-grid">
        <WorkoutCard id="1" muscleGroup="Chest" weekDay="Friday" duration="50" description="Test test description 123"

        />
        <WorkoutCard  id="2" muscleGroup="Legs" weekDay="Saturday" duration="50" description="Test test description 123"
        />
        <WorkoutCard id="3" muscleGroup="Chest" weekDay="Sunday" duration="50" description="Test test description 123"

        />
        <WorkoutCard  id="4" muscleGroup="Chest" weekDay="Monday" duration="50" description="Test test description 123"
        />
        <WorkoutCard  id="5" muscleGroup="Back" weekDay="Tuesday" duration="50" description="Test test description 123"
        />
        <WorkoutCard  id="6" muscleGroup="Back" weekDay="Thursday" duration="50" description="Test test description 123"
        /> 
      </div>
    </div>
  </>
};