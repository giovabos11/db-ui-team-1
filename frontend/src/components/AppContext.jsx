import { createContext, useEffect, useMemo, useState } from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [type, setType] = useState(null);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [id, setId] = useState();
    return <AppContext.Provider value={{type, setType, firstName, setFirstName, lastName, setLastName, age, setAge, email, setEmail, password, setPassword, id, setId}}>
        {children}
    </AppContext.Provider>

};