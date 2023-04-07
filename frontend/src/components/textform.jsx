import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./styles.css";

export const TextForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="form-box">
      <div className="container mt-5">
        <h2 className="mb-4">Sign in</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="form-control-lg"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control-lg"
            />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
};
