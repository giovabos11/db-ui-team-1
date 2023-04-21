import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { update_user_info } from "../../api/allApi";

export const Settings = ({ }) => {

    const appContext = useContext(AppContext);
    
    const [firstName, setFirstName] = useState(appContext.firstName);
    const [lastName, setLastName] = useState(appContext.lastName);
    const [age, setAge] = useState(appContext.age);
    const [email, setEmail] = useState(appContext.email);
    const [password, setPassword] = useState(appContext.password);

   

    const onUpdate = () => {
        
        
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // USE FUNCTION HERE TO PUT NEW DATA TO BACKEND/NOT DEPENDING ON IF SUCCESSFUL, PASS IN onUpdate FOR CALLBACK
        update_user_info(appContext.id, firstName, lastName, age, email, password);
        appContext.setFirstName(firstName);
        appContext.setLastName(lastName);
        appContext.setAge(age);
        appContext.setEmail(email);
        appContext.setPassword(password);

      };
    return <>
        <form onSubmit={handleSubmit}>
            <div className="p-3 d-flex" >
                <div className="flex-grow-1 ">
                    <div className="p-2 my-3">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="p-2 my-3 ">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" defaultValue={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="p-2 my-3">
                        <label htmlFor="age">Age</label>
                        <input type="text" defaultValue={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                </div>

                <div className="flex-grow-1">

                    <div className="p-2 my-3">
                        <label htmlFor="email">Email</label>
                        <input type="text" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="p-2 my-3">
                        <label htmlFor="password">Password</label>
                        <input type="text" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
            </div>
        
        <button type="submit" className="m-2 btn btn-primary"
        >Update</button>
        </form>
    </>
    
};
