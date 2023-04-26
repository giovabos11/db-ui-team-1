import React from "react";

export const CoachCard = ({ img, firstName, lastName, rating, age, contact, canHire }) => {
  return (
    <>
      <div className="border rounded container px-4 pb-2 pt-3 bg-light" style={{position:""}}>
        <div className="d-flex">
        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Profile Image" className="rounded-circle ml-2" style={{ maxWidth: "2rem", maxHeight: "2rem" }}/>

          <p className="mx-2">{firstName}</p>
          <p>{lastName}</p>
        </div>
        <div className="d-flex">
          <p className="mx-2">Rating: {rating}</p>
          <p className="mx-2">Age: {age}</p>
          <p className="mx-2">Contact: {contact}</p>
        </div>
        {canHire && (
          <button className="btn btn-primary m-2" style={{ position:""  }}>
            Hire
          </button>
        )}
      </div>
    </>
  );
};
