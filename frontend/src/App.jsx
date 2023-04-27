import "./App.css";
import { Router } from "./components/global/Router";
import { AppProvider } from "./components/global/AppContext";


function App() {
    return (
        <AppProvider>
           <Router /> 
        </AppProvider>
    );
}

export default App;