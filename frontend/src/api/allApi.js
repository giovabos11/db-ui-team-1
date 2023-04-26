import axios from "axios";
import { AppContext } from "../components/global/AppContext";
import { useContext } from "react";

const apiEndpoint = "http://localhost:8000";


export const login = (email, password, onSuccess) => new Promise((resolve, reject) => {
    if (!email || !password) {
        const error = new Error("All fields must be filled");
        alert(error);
        reject(error);

        return;
    }

    // USER OBJECT SEND TO THIS ROUTE MUST CONTAIN THE FOLLOWING:
    // (REMEMBER TO DO INPUT CHECKING BEFORE THIS POINT)
    const user = {
        email: email,
        password: password,
    };

    axios
        .post(`${apiEndpoint}/login`, user)
        .then((response) => {

            onSuccess(response.data);

            resolve(response.data);
        })
        .catch((error) => {
            alert("Error: " + error);
            reject(error);
        });
});

export const sign_up = (user_type, first_name, last_name, age, email, password, onSuccess) => new Promise((resolve, reject) => {
    // USER OBJECT SEND TO THIS ROUTE MUST CONTAIN THE FOLLOWING:
    // (REMEMBER TO DO INPUT CHECKING BEFORE THIS POINT)

    // input checking
    if (!user_type || !first_name || !last_name || !age || !email || !password) {
        const error = new Error("All fields must be filled");
        alert(error);
        reject(error);

        return;
    }

    const user = {
        user_type: user_type,
        first_name: first_name,
        last_name: last_name,
        age: age,
        email: email,
        password: password,
    };

    axios
        .post(`${apiEndpoint}/signup`, user)
        .then((response) => {

            onSuccess();

            resolve(response.data);


        }).catch((error) => {
            alert("That email is already in use.");
            reject(error);
        });

});

export const update_user_info = (id, first_name, last_name, age, email, password, onSuccess) => new Promise((resolve, reject) => {
    if (!id || !first_name || !last_name || !age || !email || !password) {
        const error = new Error("All fields must be filled");
        alert(error);
        reject(error);

        return;
    }
    const user = {
        user_id: id,
        first_name: first_name,
        last_name: last_name,
        age: age,
        email: email,
        password: password,
    };
    axios.put(`${apiEndpoint}/profile/settings/${id}`, user)
        .then((response) => {
            alert(response.data);


            resolve(response.data);
        }).catch(error => {
            alert(error);
            reject(error);
        });
})



export const get_exercises = () => new Promise((resolve, reject) => {
    axios
        .get(apiEndpoint + "/gallery/exercises")
        .then((response) => {
            resolve(response.data);
            return response.data;
        })
        .catch((err) => {
            alert(err);
        });
});

export const get_workouts = () => new Promise((resolve, reject) => {
    axios
        .get(apiEndpoint + "/gallery/workouts")
        .then((response) => {
            resolve(response.data);
            return response.data;
        })
        .catch((err) => {
            alert(err);
        });
})

export const add_workouts_to_list = (user_type, user_id, workout_id) => new Promise((resolve, reject) => {
    const data = {
        user_type: user_type,
        user_id: user_id,
        workout_id: workout_id,
    };

    axios
        .post(apiEndpoint + `/gallery/workouts/${data.user_id}`, data)
        .then((res) => {
            alert(res.data);
        })
        .catch((err) => {
            alert(err);
        });

});

export const add_workouts_from_exercises = (user_type, user_id, exercise_list, muscle_group, duration, week_day, description) => new Promise((resolve, reject) => {
    console.log("arrived in api call add_from_exerc")
    const data = {
        user_type: user_type,
        user_id: user_id,
        exercise_list: exercise_list,
        muscle_group: muscle_group, // need to get from a form
        duration: duration, // need to get from a form
        week_day: week_day, // need to get from a form
        description: description, // need to get from a form
    };
    console.log(data);
    axios
        .post(apiEndpoint + `/gallery/exercises/${data.user_id}`, data)
        .then((res) => {
            alert(res.data);
        })
        .catch((err) => {
            alert(err);
        });
});
export const get_user_workouts = (user_id) => new Promise((resolve, reject) => {

    axios
        .get(apiEndpoint + `/profile/workouts/${user_id}`)
        .then((res) => {
            resolve(res.data);
            return(res.data);
        })
        .catch((err) => {
            alert(err);
        });
});
export const delete_user_workout = (user_id, user_type, workout_id) => new Promise((resolve, reject) => {
    axios
            .delete(
                apiEndpoint +
                    `/profile/workouts/${user_id}/${user_type}/${workout_id}`
            )
            .then((res) => {
                alert(res.data);
                resolve(res.data);
            })
            .catch((err) => {
                
                alert(err);
            });

})

export const add_user_food = (user_type, user_id, name, protein_amount, carbohidrate_amount, fat_amount) => new Promise((resolve, reject) => {
    
    if (!name || !protein_amount || !carbohidrate_amount || !fat_amount) {
        const error = new Error("All fields must be filled");
        alert(error);
        

        return;
    }
    if (isNaN(protein_amount) || isNaN(carbohidrate_amount) || isNaN(fat_amount)) {
        const error = new Error('Protein, Carbohydrate and Fat amounts must be numbers');
        alert(error);
        
        return;
    }
    if(user_type == 1){
        const error = new Error("Cannot submit food as a coach");
        alert(error);
        
        
        return;
    }

    
    const data = {
        user_id: user_id,
        name: name,
        protein_amount: protein_amount,
        carbohidrate_amout: carbohidrate_amount,
        fat_amount: fat_amount,
    };
    axios
            .post(apiEndpoint + `/profile/food/${user_id}`, data)
            .then((res) => {
                resolve(res.data);
                alert(res.data);
            })
            .catch((err) => {
                alert(err);
            });
})


export const get_user_food = (user_id) => new Promise((resolve, reject) => {
    axios
    .get(apiEndpoint + `/profile/food/${user_id}`)
    .then((res) => {
        resolve(res.data);
        
        return (res.data);
    })
    .catch((err) => {
        alert(err);
    });

})