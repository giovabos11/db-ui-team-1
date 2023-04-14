import React, { useState } from "react";
import { Cart } from "../ExerciseComponents/Cart";
import { ProfileCard } from "../ProfileComponents/ProfileCard";

export const Header = ({ cartItems, setCartItems, inExercise, inWorkout }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const finalizeWorkout = () =>{
    setCartItems([]);
  }
  

  return (
    <div style={{  height:"4vh ", width:"100vh"}}>
    <div className="bg fixed-top" style ={{backgroundColor:"#D6E3F8"}} >
      <div className="d-flex justify-content-between py-1">
        <h5 className="m-3">Workout App</h5>
        <div className="d-flex mx-4 align-items-center">
          {isLoggedIn && inExercise && (
            <>
              <ProfileCard 
              firstName="Paul"
              />
              <div className="cart-container mx-5 m-3">
                <h5 className="text-center">My Workout</h5>
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              </div>
              <button className="btn btn-primary ml-3"
              onClick={() => {
                finalizeWorkout()

              }}
              >Finalize Workout</button>
              
            </>
            
          )}
          {isLoggedIn && inWorkout && (
            <>
          <ProfileCard 
              firstName="Paul"
              />
            </>
          )}
          {!isLoggedIn && (
            <>
              <a
                href="#"
                className="my-1 py-2 px-4"
                style={{ textDecoration: "none", color: "#003F7D", fontWeight: "bold" }}
              >
                Login
              </a>
              <a
                href="#"
                className="my-1 py-2 px-4 text-white rounded"
                style={{ backgroundColor: "orange", textDecoration: "none", fontWeight: "bold" }}
              >
                SIGN UP
              </a>
            </>
          )}
          
        </div>
      </div>
    </div>
    </div>
  );
};
