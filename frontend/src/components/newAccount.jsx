import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./custom.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const NewAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [registerAs, setRegisterAs] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/new-account", {
        firstName,
        lastName,
        email,
        password,
        age,
        registerAs,
      });
      if (response.status === 201) {
        // account created successfully
      } else {
        setErrorMessage("Failed to create account");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleRegisterAsChange = (event) => {
    setRegisterAs(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Sign Up!</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicAccountType" className="mb-4">
          <Form.Label>Account Type</Form.Label>
          <Form.Control
            as="select"
            onChange={handleRegisterAsChange}
            value={registerAs}
          >
            <option value="">Select account type</option>
            <option value="trainee">Trainee</option>
            <option value="coach">Coach</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicFirstName" className="mb-4">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />

        </Form.Group>
        <Form.Group controlId="formBasicLastName" className="mb-4">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={handleLastNameChange}
          />

        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicAge" className="mb-4">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={handleAgeChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="btn-warning d-flex justify-content-center"
        >
          Create Account
        </Button>

      </Form>
    </div>
  );
};
