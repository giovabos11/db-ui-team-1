import { useContext, useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "../global/Header";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../api/allApi";
import { AppContext } from "../global/AppContext";
export const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  
  const appContext = useContext(AppContext);

  const navigate = useNavigate();

  const onSuccess = (user) => {
    navigate("../gallery/workout");
    // pass in all things from backend to be stored in appContext
    appContext.setId(user.user_id);
    appContext.setType(user.user_type);
    appContext.setFirstName(user.first_name);
    appContext.setLastName(user.last_name);
    appContext.setAge(user.age);
    appContext.setEmail(email);
    appContext.setPassword(password);
    
    sessionStorage.setItem("id", user.user_id);
    sessionStorage.setItem("type",user.user_type);
    sessionStorage.setItem("firstName", user.first_name);
    sessionStorage.setItem("lastName", user.last_name);
    sessionStorage.setItem("age", user.age);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    login(email, password, onSuccess);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return <>

    <Header
    
    />

    <div className="" style={{ backgroundColor: "#b7ccdf", minHeight: "100vh", minWidth: "100vh" }}>
      <div className="py-3">


        <div className="container ">
          <h2 className="mb-4 text-center">Log in to your account</h2>
          

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
            
              <Button variant="" type="" className="text-white d-flex justify-content-center mx-2" style={{ backgroundColor: "#FECBA5", outlineColor: "#FECBA5" }}
              
              >
                Log in
              </Button>
              
              <Link to="../signup" className="text-decoration-none">
                <Button variant="" type="submit" className="text-white d-flex justify-content-center mx-2" style={{ backgroundColor: "#FECBA5", outlineColor: "#FECBA5" }}>
                  Sign up
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </>
};
