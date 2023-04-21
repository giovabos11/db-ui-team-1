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
            user_type: 0,
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

    const get_workouts = () => {
        axios
            .get(url + "/gallery/workouts")
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const add_workout = () => {
        const data = {
            user_type: 0,
            user_id: 3,
            workout_id: 1,
        };

        axios
            .post(url + `/gallery/workouts/${data.user_id}`, data)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const add_workout_from_exercises = () => {
        const data = {
            user_type: 0,
            user_id: 3,
            exercise_list: [7, 8, 9],
            muscle_group: "Arms",
            duration: 30,
            week_day: "Monday",
            description: "Sample Description",
        };

        axios
            .post(url + `/gallery/exercises/${data.user_id}`, data)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const update_profile_infomation = () => {
        const data = {
            user_id: 3,
            first_name: "Giovanni 2",
            last_name: "Boscan 2",
            age: 10,
            email: "newemail@gmail.com",
            password: "newpassword",
        };

        axios
            .put(url + `/profile/settings/${data.user_id}`, data)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const get_user_workouts = () => {
        const user = {
            user_id: 3,
        };

        axios
            .get(url + `/profile/workouts/${user.user_id}`)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const delete_user_workout = () => {
        const data = {
            user_type: 0,
            user_id: 3,
            workout_id: 3,
        };

        axios
            .delete(
                url +
                    `/profile/workouts/${data.user_id}/${data.user_type}/${data.workout_id}`
            )
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const add_user_food = () => {
        const data = {
            user_id: 3,
            name: "Chicken",
            protein_amount: 35.0,
            carbohidrate_amout: 200.0,
            fat_amount: 1.6,
        };

        axios
            .post(url + `/profile/food/${data.user_id}`, data)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const get_user_food = () => {
        const data = {
            user_id: 3,
        };

        axios
            .get(url + `/profile/food/${data.user_id}`)
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
            <hr></hr>
            <button onClick={get_exercises}>Get exercises</button>
            <button onClick={get_workouts}>Get workouts</button>
            <button onClick={add_workout}>Add workout to user 3</button>
            <button onClick={add_workout_from_exercises}>
                Add workout from exercises to user 3
            </button>
            <hr></hr>
            <button onClick={update_profile_infomation}>
                Update profile info
            </button>
            <hr></hr>
            <button onClick={get_user_workouts}>Get user workouts</button>
            <button onClick={delete_user_workout}>Delete user workouts</button>
            <hr></hr>
            <button onClick={add_user_food}>Add user food</button>
            <button onClick={get_user_food}>Get sum of user food</button>
        </div>
    );
}

export default App;
