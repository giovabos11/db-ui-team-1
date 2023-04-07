import { useState } from "react";
import axios from "axios";
import { TextForm } from "./textform";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });
      if (response.status === 200) {
        // login successful
      } else {
        alert("Something went wrong. Please try again later.")
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.")
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
  <TextForm handleSubmit={handleSubmit} />
  );
};
