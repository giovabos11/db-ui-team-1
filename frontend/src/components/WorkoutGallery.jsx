import { useState } from "react";
import { WorkoutCard } from "./WorkoutCard";

export const WorkoutGallery = () => {
  return (
    <div>
      <h1>Workout Gallery</h1>
      <div className="workout-grid">
        <WorkoutCard name="Bench Press" id ="1" bodyPart="Chest"/>
        <WorkoutCard name="Leg Press" id ="2" bodyPart="Leg"/>
        <WorkoutCard name="Chest Press" id ="3" bodyPart="Chest"/>
        <WorkoutCard name="Lat Pulldown" id ="4" bodyPart="Back"/>
      </div>
    </div>
  );
};
