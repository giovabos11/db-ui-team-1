import React, { useContext } from "react";
import { AppContext } from "../AppContext";

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
                className=" bg-dark p-3 pl-0 "
                style={{ width: "30vh", height: "93.2vh" }}>

                <img src="path/to/image.jpg" alt="Profile Image" />
                <p className="text-white">Hi, {appContext.firstName}</p>

                <div className="d-flex flex-column align-items-center container-fluid">
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

                    <button 
                    onClick={ () =>
                        changeTabs("coach")
                    }
                    className="btn btn-success my-3">My Coach</button>

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
