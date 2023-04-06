import "./App.css";
import axios from "axios";
import { WorkoutGallery } from "./components/WorkoutGallery";
function App() {
    const url = "http://localhost:8000";

    

    const checkAPI = () => {
        axios
            .get(url + "/")
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const user = {
        first: "Giovanni",
        last: "Boscan",
        age: 20,
        admin: true,
    };

    const sendJSON = () => {
        console.log(user);

        axios
            .put(url + "/parse", user)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const sendUser = () => {
        axios
            .post(url + "/user", user)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const getUsers = () => {
        axios
            .post(url + "/users")
            .then((res) => {
                alert(JSON.stringify(res.data));
            })
            .catch((err) => {
                alert(err);
            });
    };

    const clearUsers = () => {
        axios
            .post(url + "/users/clear")
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const initialWorkouts = [
        { id: 1, name: "Workout 1",  },
        { id: 2, name: "Workout 2" },
        { id: 3, name: "Workout 3" }
      ];

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <button onClick={checkAPI}>Check API</button>
            <button onClick={sendJSON}>Send JSON</button>
            <button onClick={sendUser}>Send User to DB</button>
            <button onClick={getUsers}>Get users from DB</button>
            <button onClick={clearUsers}>Clear Users in DB</button>
            
            <WorkoutGallery>
                
            </WorkoutGallery>
        </div>
    );
}

export default App;
