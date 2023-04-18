export const Settings = ({ height, weight, firstName, lastName, age, email, password, setHeight, setWeight, setFirstName, setLastName,setAge, setEmail, setPassword}) => {
    return <>
    
        <div className="p-3 d-flex" >
            <div className="flex-grow-1 ">
            <div className="p-2 my-3">
                <h4>First Name</h4>
                <input type="text" value={firstName} onChange={()=>{
                    
                }}/>
            </div>
            <div className="p-2 my-3 ">
                <h4>Last Name</h4>
                <input type="text" value={lastName}/>
                            </div>
            <div className="p-2 my-3">
                <h4>Age</h4>
                <input type="text" value={age}/>
            </div>
            <div className="p-2 my-3">
                <h4>Height</h4>
                <input type="text" value={height}/>
            </div>
            <div className="p-2 my-3">
                <h4>Weight</h4>
                <input type="text" value={weight}/>
            </div>
            </div>
            
            <div className="flex-grow-1">
            
            <div className="p-2 my-3">
                <h4>Email</h4>
                <input type="text" value={email}/>
            </div>
            <div className="p-2 my-3">
                <h4>Password</h4>
                <input type="text" value={password}/>
            
            </div>
            </div>
        </div>
        <button className="m-2 btn btn-primary"
        onClick={()=>{
            
        }}
        >Update</button>
    </>
};
