import "./App.css";
import axios from "axios";

function App() {
    const url = "http://localhost:8000";

    // const checkAPI = () => {
    //     axios
    //         .get(url + "/")
    //         .then((res) => {
    //             alert(res.data);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // };

    // const user = {
    //     first: "Giovanni",
    //     last: "Boscan",
    //     age: 20,
    //     admin: true,
    // };

    // const sendJSON = () => {
    //     console.log(user);

    //     axios
    //         .put(url + "/parse", user)
    //         .then((res) => {
    //             alert(res.data);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // };

    // const sendUser = () => {
    //     axios
    //         .post(url + "/user", user)
    //         .then((res) => {
    //             alert(res.data);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // };

    // const getUsers = () => {
    //     axios
    //         .post(url + "/users")
    //         .then((res) => {
    //             alert(JSON.stringify(res.data));
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // };

    // const clearUsers = () => {
    //     axios
    //         .post(url + "/users/clear")
    //         .then((res) => {
    //             alert(res.data);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // };

    const login = () => {
        // USER OBJECT SEND TO THIS ROUTE MUST CONTAIN THE FOLLOWING:
        // (REMEMBER TO DO INPUT CHECKING BEFORE THIS POINT)
        const user = {
            email: "gboscan@smu.edu",
            password: "password",
        };

        axios
            .post(url + "/login", user)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert("Error: " + err);
            });
    };

    const sign_up = () => {
        // USER OBJECT SEND TO THIS ROUTE MUST CONTAIN THE FOLLOWING:
        // (REMEMBER TO DO INPUT CHECKING BEFORE THIS POINT)
        const user = {
            user_type: 1,
            first_name: "Giovanni",
            last_name: "Boscan",
            age: 20,
            email: "gboscan@smu.edu",
            password: "password",
        };

        axios
            .post(url + "/signup", user)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const get_exercises = () => {
        axios
            .get(url + "/gallery/exercises")
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div className="App">
            <h1>Hello World!</h1>
            {/* <button onClick={checkAPI}>Check API</button>
            <button onClick={sendJSON}>Send JSON</button>
            <button onClick={sendUser}>Send User to DB</button>
            <button onClick={getUsers}>Get users from DB</button>
            <button onClick={clearUsers}>Clear Users in DB</button> */}
            <button onClick={login}>Log in</button>
            <button onClick={sign_up}>Sign up</button>
            <button onClick={get_exercises}>Get exercises</button>
        </div>
    );
}

export default App;
