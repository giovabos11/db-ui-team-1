import React, { useContext, useEffect, useState } from "react";
import { WorkoutCard } from "./WorkoutCard";
import { Header } from "../global/Header"
import { Link } from "react-router-dom";
import { add_workouts_to_list, get_workouts } from "../../api/allApi";
import { AppContext } from "../AppContext";
export const WorkoutGallery = ({ }) => {
  const [cartItems, setCartItems] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const appContext = useContext(AppContext);
  
  useEffect(() => {
    const fetch_workouts = async () => {
      get_workouts().then(response => setWorkouts(response));
    }

    fetch_workouts();

  }, [])

  const handleAdd = (id) =>{
    add_workouts_to_list(appContext.type, appContext.id, id)
  }

  return <>
    <div className="" style={{ backgroundColor: "#b7ccdf", minHeight: "100vh" }}>
      <div className="py-3">
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
      <h1 className="text-center">Workout Gallery</h1>
      <div className="m-3 text-center">
        <Link to="../gallery/workout" className="btn text-white m-2" style={{ backgroundColor: "#C8E2C0", outlineColor: "#A8BA9A" }}>Workouts</Link>
        <Link to="../gallery/exercise" className="btn text-white m-2" style={{ backgroundColor: "#A8BA9A", outlineColor: "#A8BA9A" }}>Exercises</Link>
      </div>

      <div className="container workout-grid">
        {

          workouts.map((workout, index) => {
            return<React.Fragment key={index}>
              <WorkoutCard
              
              id = {workout.workout_id}
              muscleGroup={workout.muscle_group}
              weekDay={workout.week_day}
              duration={workout.duration}
              description={workout.description}
              handleAdd={handleAdd}
              ></WorkoutCard>
            </React.Fragment>
          })

        }
      </div>
    </div>

  </>
};
