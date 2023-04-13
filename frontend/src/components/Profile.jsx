import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import {Settings} from "./Settings";
export const Profile = () => {
  return (
    <div className="" style={{}}>
      <div>
        <Header />
      </div>
      <div className="d-flex flex-grow-0 justify-content-center align-items-center">
        <Sidebar />
        <div className="text-center flex-grow-1">
          <Settings></Settings>
        </div>
      </div>

    </div>
  );
};
