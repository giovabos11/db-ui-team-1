import { useState } from "react";

export const WorkoutCard = ({ id, muscleGroup, weekDay, duration, description, handleAdd, handleDelete }) => {



  return <>
    <div className="card" >

      <div className="card-body rounded " style={{ backgroundColor: "#F5F5DC" }}>
        <p className="card-text">Muscle Group: {muscleGroup}</p>
        <p className="card-text">{weekDay}</p>
        <p className="card-text">{duration} minutes</p>
        <p className="card-text">{description}</p>
        {handleAdd && (

          <button className="btn  btn-sm" type="button" style={{ borderColor: "#905d5d", color: "white", backgroundColor: "#905d5d" }}
            onClick={() => handleAdd(id)}>
            Add to my list
          </button>

        )}
        {handleDelete && (
          <button className="btn  btn-sm" type="button" style={{ borderColor: "#905d5d", color: "white", backgroundColor: "#905d5d" }}
          onClick={() => handleDelete(id)}>
          Delete
        </button>


        )
        
        }
      </div>

    </div>

  </>
};