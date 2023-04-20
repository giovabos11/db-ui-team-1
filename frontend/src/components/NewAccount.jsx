import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./global/Header";
import { sign_up } from "../api/allApi";
import { AppContext } from "./AppContext";

export const NewAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [registerAs, setRegisterAs] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const appContext = useContext(AppContext);

  const navigate = useNavigate();
  
  const onSuccess = () => {
    navigate("../gallery/workout");

    appContext.setType(registerAs);
    appContext.setFirstName(firstName);
    appContext.setLastName(lastName);
    appContext.setAge(age);
    appContext.setEmail(email);
    appContext.setPassword(password);
  }
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    let tempId;
    tempId = await sign_up(registerAs, firstName, lastName, age, email, password, onSuccess);
    appContext.setId(tempId);
    console.log(appContext.id);
  }

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

  return <>
  <Header></Header>
  <div className="" style={{backgroundColor:"#b7ccdf", minHeight:"100vh", minWidth:"100vh"}}>
  <div className="py-3">
    <div className="container " >
      <h2 className="mb-4  text-center">Sign Up!</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicAccountType" className="mb-4 w-25 container w-25 container">
          <Form.Label>Account Type</Form.Label>
          <Form.Control
            as="select"
            onChange={handleRegisterAsChange}
            value={registerAs}
          >
            <option value="">Select account type</option>
            <option value={0}>Trainee</option>
            <option value={1}>Coach</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicFirstName" className="mb-4 w-25 container w-25 container">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />

        </Form.Group>
        <Form.Group controlId="formBasicLastName" className="mb-4 w-25 container">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={handleLastNameChange}
          />

        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="mb-4 w-25 container">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-4 w-25 container">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicAge" className="mb-4 w-25 container">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={handleAgeChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center m-4">
        <Button  variant="" type="submit" className="text-white d-flex justify-content-center mx-2" style={{backgroundColor:"#FECBA5", outlineColor:"#FECBA5"}}

        >
          Create Account
        </Button>
        </div>
      </Form>
    </div>
    </div>
    </div>
  </>
};
