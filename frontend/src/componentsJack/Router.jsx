import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WholeGallery } from "./WholeGallery";
import { Homepage } from "./HomepageComponents/Homepage";
import { Login } from "./Login";
import { NewAccount } from "./NewAccount";
import { Profile } from "./ProfileComponents/Profile";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} exact />
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<NewAccount/>}/>
      <Route path="gallery" element={<WholeGallery/>}/>
      <Route path="profile" element={<Profile/>}/>
      

    </Routes>
  </BrowserRouter>
);


