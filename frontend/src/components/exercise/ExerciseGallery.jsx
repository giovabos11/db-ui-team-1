import React, { useEffect, useReducer, useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import { Cart } from "./Cart";
import { Header } from "../global/Header"
import { Link, useAsyncError } from "react-router-dom";
import { get_exercises } from "../../api/allApi";
import { ExerciseHead } from "./ExerciseHead";
export const ExerciseGallery = ({ setInExercise, setInWorkout }) => {
  const [chestExercises, setChestExercises] = useState([]);
  const [legExercises, setLegExercises] = useState([]);
  const [backExercises, setBackExercises] = useState([]);
  const [bicepExercises, setBicepExercises] = useState([]);
  const [tricepExercises, setTricepExercises] = useState([]);
  const [armExercises, setArmExercises] = useState([]);
  const [abExercises, setAbExercises] = useState([]);
  const [cardioExercises, setCardioExercises] = useState([]);
  
  const [exercises, setExercises] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetch_exercises = async () => {
      get_exercises().then(response => setExercises(response));
    }
    
    fetch_exercises();
      
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
        <Link to="../gallery/workout" className="btn text-white m-2" style={{ backgroundColor: "#A8BA9A", outlineColor: "#A8BA9A" }}>Workouts</Link>
        <Link to="../gallery/exercise" className="btn text-white m-2" style={{ backgroundColor: "#C8E2C0", outlineColor: "#A8BA9A" }}>Exercises</Link>
      </div>
      <div className="container text-center">
        
        {
          
        exercises.map((exercise_group, index) => {
            return <React.Fragment key={index}>
              <ExerciseHead
              key = {index}
              muscleGroup={exercise_group.muscle_group}
              
              ></ExerciseHead>
              <div className=" workout-grid2">
              {
                exercise_group.exercises.map((exercise, index) =>{
                  return<React.Fragment key={index}>
                  <ExerciseCard
                    key={exercise.exercise_id}
                    name={exercise.name}
                    id={exercise.exercise_id}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    
                  ></ExerciseCard>
                  </React.Fragment>
                }) 
              }
              </div>
            </React.Fragment>
          })
        }
      </div>

    </div>
  </>
};
