import { Button } from "react-bootstrap"
import { AppContext } from "./AppContext"
import { useContext } from "react"

export const Logout = ({}) => {
    const appContext = useContext(AppContext);

    const handleLogout = () =>{
        appContext.clearAppContext();
    }

    return <>
        <Button 
        onClick = {handleLogout}>
            Logout
        </Button>
    
    </>
}
