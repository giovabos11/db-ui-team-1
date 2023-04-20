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
  
    // ...
  
    return (
      <AppContext.Provider value={{ type, setType, firstName, setFirstName, lastName, setLastName, age, setAge, email, setEmail, password, setPassword, id, setId }}>
        {children}
      </AppContext.Provider>
    );
  };
  