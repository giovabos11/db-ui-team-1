import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./HomepageComponents/Homepage";
import { Login } from "./Login";
import { NewAccount } from "./NewAccount";
import { Profile } from "./ProfileComponents/Profile";
import { WorkoutGallery } from "./WorkoutComponents/WorkoutGallery";
import { ExerciseGallery } from "./ExerciseComponents/ExerciseGallery";
import { ErrorPage } from "./errorPage";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} exact />
      <Route path="login" element={<Login/>} exact/>
      <Route path="signup" element={<NewAccount/>} exact/>
      <Route path="workout" element={<WorkoutGallery/>} exact/>
      <Route path="exercise" element={<ExerciseGallery/>} exact/>
      <Route path="profile" element={<Profile/>} exact/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>
);


