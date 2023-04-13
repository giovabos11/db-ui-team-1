export const Settings = ({ height, weight, firstName, lastName, age, email, password }) => {
    return <>

        <div className="p-3">
            <div className="p-2">
                <h4>Height</h4>
                <input type="text-area" />
            </div>
            <div className="p-2">
                <h4>Weight</h4>
                <input type="text-area" />
            </div>
            <hr />
            <div className="p-2">
                <h4>First Name</h4>
                <input type="text-area" />
            </div>
            <div className="p-2">
                <h4>Last Name</h4>
                <input type="text-area" />
            </div>
            <div className="p-2">
                <h4>Age</h4>
                <input type="text-area" />
            </div>
            <div className="p-2">
                <h4>Email</h4>
                <input type="text-area" />
            </div>
            <div className="p-2">
                <h4>Password</h4>
                <input type="text-area" />
            </div>
        </div>
        <button className="m-2 btn btn-primary">Update</button>

    </>
};
