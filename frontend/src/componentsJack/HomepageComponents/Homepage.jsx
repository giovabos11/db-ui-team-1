import React from "react";
import { Header } from "../GlobalComponents/Header";

export const Homepage = () => {
  return (
    <>
      <Header />

      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary position-relative">
        <img
          src="https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Workout"
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div className="position-relative" >
          <h1 className="text-center text-white">The Best Workout App Ever Created</h1>
          <p className="text-center text-white">Create your perfect workout today.</p>
        </div>
      </div>
      <div className="py-2">
        <div className="container">
          <h2 className="text-center mb-4">What Our App Does</h2>
          <div className="d-flex justify-content-center">
            <div className="d-flex">
              <div className="flex-grow-1">
                <p className="text-center mx-5" style={{ maxWidth: "20rem" }}>Allows you to create, post, and view other people's workouts.</p>
              </div>
              <div className="flex-grow-1">
                <p className="text-center mx-5" style={{ maxWidth: "20rem" }}>Allows you to view body parts and names of exercises.</p>
              </div>
              <div className="flex-grow-1">
                <p className="text-center mx-5" style={{ maxWidth: "20rem" }}>Allows you to communicate with a coach to help you with your exercises and diet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};