import { Button } from "react-bootstrap"
import { AppContext } from "../global/AppContext"
import { useContext } from "react"

export const Logout = ({}) => {
    const appContext = useContext(AppContext);

    const handleLogout = () =>{
        appContext.clearAppContext();
    }

    return <>
    <div className="ml-2">
        <Button 
        onClick = {handleLogout}>
            Logout
        </Button>
    </div>
    </>
    
}
