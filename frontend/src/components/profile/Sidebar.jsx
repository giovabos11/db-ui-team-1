import React, { useContext } from "react";
import { AppContext } from "../global/AppContext";

export const Sidebar = ({setInSettings, setInFood, setInCoach, setInWorkouts, firstName}) => {
  const appContext = useContext(AppContext);
    const changeTabs = (openTab) => {
        // Update state variables based on the selected tab
        switch (openTab) {
          case "settings":
            setInSettings(true);
            setInFood(false);
            setInCoach(false);
            setInWorkouts(false);
            break;
          case "food":
            setInSettings(false);
            setInFood(true);
            setInCoach(false);
            setInWorkouts(false);
            break;
          case "coach":
            setInSettings(false);
            setInFood(false);
            setInCoach(true);
            setInWorkouts(false);
            break;
          case "workouts":
            setInSettings(false);
            setInFood(false);
            setInCoach(false);
            setInWorkouts(true);
            break;
          default:
            // Default case, do nothing
            break;
        }
      };
    return (
        <>

            <div
                className=" bg-dark py-3 pl-0 "
                style={{ width: "30vh" }}>

                

                <div className="d-flex flex-column align-items-center container-fluid">

                <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Profile Image" className="rounded-circle ml-2" style={{ maxWidth: "3rem", maxHeight: "3rem" }}/>
                <p className="text-white">Hi, {appContext.firstName} {appContext.lastName}</p>
                    <button 
                    onClick={ () =>
                        changeTabs("settings")
                    }
                    className="btn btn-success my-3">Settings</button>
                    
                    <button 
                    onClick={ () =>
                        changeTabs("food")
                    }
                    className="btn btn-success my-3">My Food</button>

                    {/* <button 
                    onClick={ () =>
                        changeTabs("coach")
                    }
                    className="btn btn-success my-3">My Coach</button> */}

                    <button 
                    onClick={ () =>
                        changeTabs("workouts")
                    }
                    className="btn btn-success my-3">My Workouts</button>
                </div>
            </div>
        </>
    );
};
