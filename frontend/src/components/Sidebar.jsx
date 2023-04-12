import React from "react";

export const Sidebar = () => {
    return (
        <>

            <div
                className=" bg-dark p-3 position-absolute"
                style={{ width: "30vh", height: "93.2vh" }}>

                <img src="path/to/image.jpg" alt="Profile Image" />
                <p className="text-white">Hi, name</p>

                <div className="d-flex flex-column mx-5 px-3 align-items-center">
                    <button className="my-3">Settings</button>
                    <button className="my-3">My Workouts</button>
                    <button className="my-3">My Coach</button>
                    <button className="my-3">My Food</button>
                </div>
            </div>
        </>
    );
};
