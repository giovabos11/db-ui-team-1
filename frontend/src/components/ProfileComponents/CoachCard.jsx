import React from "react";

export const CoachCard = ({ img, firstName, lastName, rating, age, contact, canHire }) => {
  return (
    <>
      <div className="border rounded container px-4 pb-2 pt-3" style={{ position: "" }}>
        <div className="d-flex">
          <img className="mx-2" src={img} alt="Profile Image" />
          <p className="mx-2">{firstName}</p>
          <p>{lastName}</p>
        </div>
        <div className="d-flex">
          <p className="mx-2">Rating: {rating}</p>
          <p className="mx-2">Age: {age}</p>
          <p className="mx-2">Contact: {contact}</p>
        </div>
        {canHire && (
          <button className="btn btn-primary m-2" style={{ position: "", bottom: "0", right: "0" }}>
            Hire
          </button>
        )}
      </div>
    </>
  );
};
