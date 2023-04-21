import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./homepage/Homepage";
import { Login } from "./Login";
import { NewAccount } from "./NewAccount";
import { Profile } from "./profile/Profile";
import { WorkoutGallery } from "./workout/WorkoutGallery";
import { ExerciseGallery } from "./exercise/ExerciseGallery";
import { Settings } from "./profile/Settings";

export const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<NewAccount />} />
        <Route path="gallery/workout" element={<WorkoutGallery />} />
        <Route path="gallery/exercise" element={<ExerciseGallery />} />
        <Route path="profile" element={ <Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
