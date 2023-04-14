import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./GlobalComponents/Header";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });
      if (response.status === 200) {
        // login successful
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return <>
  
  <div className="" style={{backgroundColor:"#b7ccdf", minHeight:"100vh", minWidth:"100vh"}}>
  <div className="py-3">
        <Header
          
        />
      </div>
    <div className="container ">
      <h2 className="mb-4 text-center">Log in to your account</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="mb-4 w-25 container">
          <Form.Label>Email</Form.Label>
          <Form.Control
            
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            
          />
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword" className="mb-4 w-25  container">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center m-4">
        <Button variant="" type="submit" className="text-white d-flex justify-content-center mx-2" style={{backgroundColor:"#FECBA5", outlineColor:"#FECBA5"}}>
          Log in
        </Button>
        <Button variant="" type="submit" className="text-white d-flex justify-content-center mx-2" style={{backgroundColor:"#FECBA5", outlineColor:"#FECBA5"}}>
          Sign up
        </Button>
        </div>
      </Form>
      </div>
    </div>
  </>
};
