import "./App.css";
import axios from "axios";
import { ExerciseGallery } from "./componentsJack/ExerciseComponents/ExerciseGallery";
import { Homepage } from "./componentsJack/HomepageComponents/Homepage";
import { Profile} from "./componentsJack/ProfileComponents/Profile"
import { GalleryCard } from "./componentsJack/ExerciseComponents/ExerciseCard";
import { WorkoutGallery } from "./componentsJack/WorkoutComponents/WorkoutGallery";

import { WholeGallery } from "./componentsJack/WholeGallery";
import {Login} from "./componentsJack/Login"
import { NewAccount } from "./componentsJack/NewAccount";


function App() {
    const url = "http://localhost:8000/";



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


    return (
        <div className="App">

            <NewAccount></NewAccount>
        </div>
    );
}


export default App;