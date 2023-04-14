import { useState } from "react";

export const WorkoutCard = ({ id, muscleGroup, weekDay, duration, description}) => {



  return <>
    <div className="card" >
      
      <div className="card-body" style ={{backgroundColor:"#F5F5DC"}}>
        <h2 className="card-title">Workout #({id})</h2>
        <p className="card-text">Muscle Group: {muscleGroup}</p>
        <p className="card-text">{weekDay}</p>
        <p className="card-text">{duration} minutes</p>
        <p className="card-text">{description}</p>
        
        <button className="btn  btn-sm" type="button" onClick style={{borderColor:"#905d5d" ,color:"white", backgroundColor: "#905d5d"}}>
        Add to my list
      </button>
      </div>
      
    </div>

  </>
};