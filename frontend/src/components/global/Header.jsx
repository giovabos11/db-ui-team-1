import React, { useContext, useState } from "react";
import { Cart } from "../exercise/Cart";
import { ProfileCard } from "../profile/ProfileCard";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AppContext } from "./AppContext";
import { add_workouts_from_exercises } from "../../api/allApi";
import { Logout } from "../account/Logout";
import { WorkoutForm } from "../forms/WorkoutForm";

export const Header = ({ cartItems, setCartItems }) => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const appContext = useContext(AppContext);




  return (


    <div style={{ height: "6.8vh ", width: "100vh" }}>

      <div className="bg fixed-top" style={{ backgroundColor: "#D6E3F8" }} >
        <div className="d-flex justify-content-between py-1">
          {showPopup && ( // if showPopup, hide rest of things under a opaque barrier
            <div
              className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50"
              style={{ zIndex: 999 }}
            ></div>
          )}
          <NavLink to="../" style={{ textDecoration: "none", color: "black" }}>
            <div className="d-flex">

              <h5 className="m-3">Pump Pal</h5>

              <img src="https://cdn.discordapp.com/attachments/498672158445404161/1100211795492352020/dumbellgood-removebg-preview-trimmed.png" alt="dumbell image"

                className="mt-3"
                style={{ maxWidth: "3rsem", maxHeight: "1.7rem" }}></img>
            </div>
          </NavLink>

          <div className="d-flex mx-4 align-items-center">
            {appContext.firstName !== "" && location.pathname === "/" && (
              <>


                <NavLink
                  to="../gallery/workout"
                  className="btn btn-primary mx-3"
                >
                  Back to Gallery
                </NavLink>
                <ProfileCard
                  firstName={appContext.firstName}
                />
              </>
            )}

            {location.pathname === "/profile" && (
              <>

                <NavLink
                  to="../gallery/workout"
                  className="btn btn-primary mx-3"
                >
                  Back to Gallery
                </NavLink>
              </>
            )}
            {location.pathname === "/gallery/exercise" && (
              <>
                <ProfileCard
                  firstName={appContext.firstName}
                />
                <div className="cart-container mx-4">
                  <h5 className="text-center">My Workout</h5>
                  <Cart cartItems={cartItems} setCartItems={setCartItems} />
                </div>
                <button className="btn btn-primary ml-3" onClick={() => {
                  if (cartItems.length > 0) {
                    setShowPopup(true);
                  }
                  else {
                    const error = "Cart is empty!"
                    alert(error);
                  }
                }}>
                  Finalize Workout
                </button>


              </>


            )}
            {location.pathname === "/gallery/workout" && (
              <>
                <ProfileCard
                  firstName={appContext.firstName}
                />
              </>
            )}

            {location.pathname === "/" && appContext.firstName === "" && (
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


            {
              appContext.firstName !== "" && (
                <NavLink className="mx-4" to="../" style={{ textDecoration: "none", color: "black" }}>

                  <Logout></Logout>
                </NavLink>
              )
            }

          </div>

        </div>

      </div>
      <div className="">
        <WorkoutForm
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          cartItems={cartItems}
          setCartItems={setCartItems} />
      </div>

    </div>


  );
};
