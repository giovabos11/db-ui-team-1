import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiEndpoint = "http://localhost:8000";

export const login = (email,password) => new Promise((resolve, reject) => {

                
    // USER OBJECT SEND TO THIS ROUTE MUST CONTAIN THE FOLLOWING:
        // (REMEMBER TO DO INPUT CHECKING BEFORE THIS POINT)
        const user = {
            email: email,
            password: password,
        };

        axios
            .post(apiEndpoint + "/login", user)
            .then((res) => {
                alert(res.data);
                
            })
            .catch((err) => {
                alert("Error: " + err);
            });
});


export const sign_up = (user_type, first_name, last_name, age, email, password) => new Promise((resolve, reject) => {
    // USER OBJECT SEND TO THIS ROUTE MUST CONTAIN THE FOLLOWING:
        // (REMEMBER TO DO INPUT CHECKING BEFORE THIS POINT)
        const user = {
            user_type: user_type,
            first_name: first_name,
            last_name: last_name,
            age: age,
            email: email,
            password: password,
        };

        axios
            .post(apiEndpoint + "/signup", user)
            .then((res) => {
                alert(res.data);
                
            })
            .catch((err) => {
                alert(err);
            });
});