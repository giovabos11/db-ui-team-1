import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Profile = () => {
  return (
    <div className="" style={{ overflow: "" }}>
      <div>
        <Header />
      </div>
      <div className="">
        <div className="">
          <div>
            <Sidebar />
          </div>
        </div>
        <div className="">
          <p className="" >Welcome to your profile. </p>
        </div>
      </div>
    </div>
  );
};
