import { WorkoutGallery } from "./WorkoutComponents/WorkoutGallery"
import { ExerciseGallery } from "./ExerciseComponents/ExerciseGallery"
import { useState } from "react"
import { Header } from "./GlobalComponents/Header"
export const WholeGallery = () => {
    const [inExercise, setInExercise] = useState(true);
    const [inWorkout, setInWorkout] = useState(false);
    
    return<>
    <div className="py-3">
        
      </div>
        {inExercise && 
        <ExerciseGallery
        setInExercise={setInExercise}
        setInWorkout={setInWorkout}
        inExercise={inExercise}
        inWorkout={inWorkout}
        />

        }
        {inWorkout &&
        <WorkoutGallery
        setInExercise={setInExercise}
        setInWorkout={setInWorkout}
        inExercise={inExercise}
        inWorkout={inWorkout}
        />}
        


    </>
}