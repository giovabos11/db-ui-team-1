import React, { useContext, useState } from "react";
import { Cart } from "../exercise/Cart";
import { ProfileCard } from "../profile/ProfileCard";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../AppContext";
import { add_workouts_from_exercises } from "../../api/allApi";
import { Logout } from "../Logout";

export const Header = ({ cartItems, setCartItems }) => {

  const location = useLocation();
  const appContext = useContext(AppContext);
  
  const finalizeWorkout = () =>{
    if(cartItems.length !== 0){
      let exercisesIds = [];

      cartItems.forEach(item => {
        exercisesIds.push(item.id);
      });
      

      add_workouts_from_exercises(appContext.type, appContext.id, exercisesIds, "Arms", 12, "friday", "WOOOHOOOOOOOOOOOOOOO");
      setCartItems([]);
    }


    
  }
  

  return (
    <div style={{  height:"6.8vh ", width:"100vh"}}>
    <div className="bg fixed-top" style ={{backgroundColor:"#D6E3F8"}} >
      <div className="d-flex justify-content-between py-1">
      <NavLink to="../" style={{ textDecoration: "none", color: "black" }}>
        <div className="d-flex">
        <h5 className="m-3">Workout App</h5>
        
        <img src=""></img>
        </div>
      </NavLink>

        <div className="d-flex mx-4 align-items-center">
          {location.pathname==="/gallery/exercise" && (
            <>
              <ProfileCard 
              firstName={appContext.firstName}
              />
              <div className="cart-container mx-5">
                <h5 className="text-center">My Workout</h5>
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              </div>
              <button className="btn btn-primary ml-3"
              onClick={() => finalizeWorkout()}
              >Finalize Workout</button>
              
            </>
            
          )}
          { location.pathname==="/gallery/workout" && (
            <>
          <ProfileCard 
              firstName={appContext.firstName}
              />
            </>
          )}
          
          {location.pathname==="/" && appContext.firstName === "" && (
            <>
              <Link
                to="login"
                className="my-1 py-2 px-4"
                style={{ textDecoration: "none", color: "#003F7D", fontWeight: "bold" }}
              >
                Login
              </Link>
              <Link
                to="signup"
                className="my-1 py-2 px-4 text-white rounded"
                style={{ backgroundColor: "orange", textDecoration: "none", fontWeight: "bold" }}
              >
                SIGN UP
              </Link>
            </>
          )}

          {appContext.firstName !=="" && location.pathname==="/" && (
            <>
            
            
              <NavLink
                to="../gallery/workout"
                >
                  Back to Gallery
                </NavLink>
                <ProfileCard 
              firstName={appContext.firstName}
              />
            </>
          )}

          {location.pathname==="/profile" && (
            <>
            
              <NavLink
                to="../gallery/workout"
                >
                  Back to Gallery
                </NavLink>
            </>
          )}
          {
            appContext.firstName!=="" && (
              <NavLink to="../" style={{ textDecoration: "none", color: "black" }}>

              <Logout></Logout>
              </NavLink>
            )
          }
          
        </div>
      </div>
    </div>
    </div>
  );
};
