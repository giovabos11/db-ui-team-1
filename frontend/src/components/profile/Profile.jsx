import React, { useContext } from "react";
import { Header } from "../global/Header";
import { Sidebar } from "./Sidebar";
import {Settings} from "./Settings";
import { FoodDetails } from "./FoodDetails";
import { useState } from "react";
import { CoachInfo } from "./CoachInfo";
import { MyWorkouts } from "./MyWorkouts";
import { AppContext } from "../global/AppContext";
export const Profile = (profileId) => {
  const [inSettings, setInSettings] = useState(true);
  const [inFood, setInFood] = useState(false);
  const [inCoach, setInCoach] = useState(false);
  const [inWorkouts, setInWorkouts] = useState(false);

    //const appContext = useContext(AppContext);
  return <>
      <div>
        <Header />
      </div>
      
      <div className="d-flex flex-grow-0 " style={{backgroundColor:"#b7ccdf", minHeight: "93.2vh"  }}>
      <Sidebar 
        //firstName={appContext.firstName}
        setInSettings={setInSettings}
        setInFood={setInFood}
        setInCoach={setInCoach}
        setInWorkouts={setInWorkouts}
        />
        <div className="text-center flex-grow-1 ">
        <div className="container border rounded " style ={{backgroundColor:"#F5F5DC"}}>
          {inFood && <FoodDetails/>}
          {inSettings && <Settings/>}
          {inCoach && <CoachInfo/>}
          {inWorkouts && <MyWorkouts/>}
          </div>
        </div>
    </div>
    </>
};
