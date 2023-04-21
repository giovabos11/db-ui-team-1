import React from "react";
import { Button } from "react-bootstrap";

export const SubmitForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="form-group">
        <Button type="submit" className="btn btn-primary" >
          Submit
        </Button>
      </div>
    </form>
  );
};