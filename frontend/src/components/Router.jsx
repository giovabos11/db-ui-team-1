import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./homepage/Homepage";
import { Login } from "./Login";
import { NewAccount } from "./NewAccount";
import { Profile } from "./profile/Profile";
import { WorkoutGallery } from "./workout/WorkoutGallery";
import { ExerciseGallery } from "./exercise/ExerciseGallery";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} exact />
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<NewAccount/>}/>
      <Route path="workout" element={<WorkoutGallery/>}/>
      <Route path="exercise" element={<ExerciseGallery/>}/>
      <Route path="profile" element={<Profile/>}/>
      

    </Routes>
  </BrowserRouter>
);


