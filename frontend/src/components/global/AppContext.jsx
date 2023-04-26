import { createContext, useEffect, useMemo, useState } from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [type, setType] = useState(sessionStorage.getItem("type") || "");
    const [firstName, setFirstName] = useState(sessionStorage.getItem("firstName") || "");
    const [lastName, setLastName] = useState(sessionStorage.getItem("lastName") || "");
    const [age, setAge] = useState(sessionStorage.getItem("age") || "");
    const [email, setEmail] = useState(sessionStorage.getItem("email") || "");
    const [password, setPassword] = useState(sessionStorage.getItem("password") || "");
    const [id, setId] = useState(sessionStorage.getItem("id") || "");
    
    // call when we update values in settings form
    const setAppContext = (newFirstName, newLastName, newAge, newEmail, newType, newId) => {
        setFirstName(newFirstName);
        setLastName(newLastName);
        setAge(newAge);
        setEmail(newEmail);
        setType(newType);
        setId(newId);
    
        sessionStorage.setItem("firstName", newFirstName);
        sessionStorage.setItem("lastName", newLastName);
        sessionStorage.setItem("age", newAge);
        sessionStorage.setItem("email", newEmail);
        sessionStorage.setItem("type", newType);
        sessionStorage.setItem("id", newId);
      };
      
      // call on logout
      const clearAppContext = () => {
        setFirstName("");
        setLastName("");
        setAge("");
        setEmail("");
        setType("");
        setId("");
    
        sessionStorage.clear();
      };

    return (
      <AppContext.Provider value={{ type, setType, firstName, setFirstName, lastName, setLastName, age, setAge, email, setEmail, password, setPassword, id, setId, clearAppContext }}>
        {children}
      </AppContext.Provider>
    );
  };
  