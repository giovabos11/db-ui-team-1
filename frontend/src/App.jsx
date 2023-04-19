import "./App.css";
import axios from "axios";
import { Homepage } from "./components/homepage/Homepage";
import { Profile } from "./components/profile/Profile"
import { Login } from "./components/Login"
import { NewAccount } from "./components/NewAccount";
import { Router } from "./components/Router";
import { AppProvider } from "./components/AppContext";


function App() {
    const url = "http://localhost:8000/";

    return (
        <AppProvider>
           <Router /> 
        </AppProvider>
        
    );
}


export default App;