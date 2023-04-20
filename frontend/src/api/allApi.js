import axios from "axios";
import { AppContext } from "../components/AppContext";
import { useContext } from "react";

const apiEndpoint = "http://localhost:8000";


export const login = (email,password, onSuccess) => new Promise((resolve, reject) => {
    if(!email || !password){
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
                alert(response.data);
                 
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
                alert(response.data);
                
                onSuccess();
                
                resolve(response.data);


            }).catch((error) => {
                alert("That email is already in use.");
                reject(error);
            });
            
});


export const get_user_info = (id) => new Promise((resolve, reject) => {
    axios.get(`${apiEndpoint}/user/${id}`).then((response)=>{
        resolve(response.data);
    })
    .catch((error) => {
        reject(error);
    });
});

export const update_user_info = (id, user_type, first_name, last_name, age, email, password, onSuccess) => new Promise ((resolve, reject) =>{
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
    axios.put(`${apiEndpoint}/profile/${id}`, user)
    .then((response) => {
        alert(response.data);
        
        onSuccess();
        
        resolve(response.data);
        }).catch(error => {
            alert(error);
            reject(error);
        });
})



export const get_exercises = (name) => new Promise((resolve, reject) => {
    
});
