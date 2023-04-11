import React from "react";

export const Sidebar = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-start">
        <img src="path/to/image.jpg" alt="Profile Image" />
        <p>Hi, name</p>

        <button className="">Settings</button>
        <button className="">My Workouts</button>
        <button className="">My Coach</button>
        <button className="">My Food</button>
      </div>
    </>
  );
};
