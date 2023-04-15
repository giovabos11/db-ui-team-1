import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./HomepageComponents/Homepage";
import { Login } from "./Login";
import { NewAccount } from "./NewAccount";
import { Profile } from "./ProfileComponents/Profile";
import { WorkoutGallery } from "./WorkoutComponents/WorkoutGallery";
import { ExerciseGallery } from "./ExerciseComponents/ExerciseGallery";

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


