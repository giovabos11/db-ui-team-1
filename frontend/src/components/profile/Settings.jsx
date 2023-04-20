import { useContext, useState } from "react";
import { AppContext } from "../AppContext";

export const Settings = ({ }) => {

    const appContext = useContext(AppContext);
    
    const [firstName, setFirstName] = useState(appContext.firstName);
    const [lastName, setLastName] = useState(appContext.lastName);
    const [age, setAge] = useState(appContext.age);
    const [email, setEmail] = useState(appContext.email);
    const [password, setPassword] = useState(appContext.password);

   

    const onUpdate = () => {
        
        appContext.setFirstName(firstName);
        appContext.setLastName(lastName);
        appContext.setAge(age);
        appContext.setEmail(email);
        appContext.setPassword(password);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // USE FUNCTION HERE TO PUT NEW DATA TO BACKEND/NOT DEPENDING ON IF SUCCESSFUL, PASS IN onUpdate FOR CALLBACK
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
        </form>
        <button className="m-2 btn btn-primary"
            onClick={() => onUpdate()

            }
        >Update</button>
    </>
};
