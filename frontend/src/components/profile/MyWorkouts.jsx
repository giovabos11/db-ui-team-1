import React, { useContext, useEffect, useState } from "react";
import { delete_user_workout, delete_workout, get_user_workouts } from "../../api/allApi";
import { AppContext } from "../global/AppContext";
import { WorkoutCard } from "../workout/WorkoutCard";

export const MyWorkouts = () => {
  const [userWorkouts, setUserWorkouts] = useState([]);
  const appContext = useContext(AppContext);

  useEffect(() => {
    const fetch_user_workouts = async () => {
      get_user_workouts(appContext.id).then(response => setUserWorkouts(response));
    }

    fetch_user_workouts();

  }, [])
  const handleDelete = (workoutId) => {
    delete_user_workout(appContext.id, appContext.type, workoutId).then(() =>{
      
      setUserWorkouts(userWorkouts.filter(workout => workout.workout_id !== workoutId));
    })
    
  }

  return <>

    <div className=" p-3">
      <h1 className="text-center">My Workouts</h1>
      <div className="container workout-grid">

      {
        userWorkouts.map((workout, index) => {
          return <React.Fragment key={index}>
            <WorkoutCard

              id={workout.workout_id}
              muscleGroup={workout.muscle_group}
              weekDay={workout.week_day}
              duration={workout.duration}
              description={workout.description}
              handleDelete={handleDelete}
            ></WorkoutCard>
          </React.Fragment>
        })

      }
      </div>
    </div>
  </>
}