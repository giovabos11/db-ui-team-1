import "./App.css";
import axios from "axios";
import { ExerciseGallery } from "./componentsJack/ExerciseComponents/ExerciseGallery";
import { Homepage } from "./componentsJack/HomepageComponents/Homepage";
import { Profile} from "./componentsJack/ProfileComponents/Profile"
import { GalleryCard } from "./componentsJack/ExerciseComponents/ExerciseCard";
import { WorkoutGallery } from "./componentsJack/WorkoutComponents/WorkoutGallery";
import { WholeGallery } from "./componentsJack/WholeGallery";
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

            <WholeGallery></WholeGallery>
        </div>
    );
}
import {Login} from "./components/login"
import { NewAccount } from "./components";

export function App() {
  return <>
    <Login />
  </>;
}

export default App;