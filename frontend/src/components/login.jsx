import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import './custom.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Log in to your account</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <Form onSubmit={handleSubmit}>
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
        <Button variant="primary" type="submit" className="btn-primary d-flex justify-content-center">
          Log in
        </Button>
      </Form>
    </div>
  );
};
