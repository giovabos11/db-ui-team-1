import React, { useState } from "react";
import { Cart } from "./Cart";
import { ProfileCard } from "./ProfileCard";

export const Header = ({ cartItems, removeFromCart }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="bg-light fixed-top">
      <div className="d-flex justify-content-between py-1">
        <h5 className="m-3">Workout App</h5>
        <div className="d-flex mx-4 align-items-center">
          {isLoggedIn && (
            <>
              <ProfileCard />


              <div className="cart-container mx-5 m-3">
                <h5 className="text-center">My Workout</h5>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              </div>
              <button className="btn btn-primary ml-3">Finalize Workout</button>
              
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
  );
};
