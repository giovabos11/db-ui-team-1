import express from "express";
import mysql from "mysql";

const profileRouter = express.Router();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NeverSkipLegDay",
    database: "DBUI",
});

connection.connect();

profileRouter.put("/settings/:user_id", (req, res) => {
    const query = `UPDATE Users
    SET first_name = '${req.body["first_name"]}', last_name = '${req.body["last_name"]}', age = ${req.body["age"]}, email = '${req.body["email"]}', password = '${req.body["password"]}'
    WHERE user_id = ${req.body["user_id"]};`;

    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        res.status(200);
        res.send("Information updated!");
    });
});

profileRouter.get("/workouts/:user_id", (req, res) => {
    const query = `SELECT Workout_Users.workout_id, Workouts.muscle_group, Workouts.week_day, Workouts.duration, Workouts.description
    FROM Workout_Users
    INNER JOIN Workouts ON Workout_Users.workout_id = Workouts.workout_id
    WHERE Workout_Users.trainee_id = ${req.params["user_id"]} OR Workout_Users.coach_id = ${req.params["user_id"]};`;

    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        res.status(200);
        console.log(rows);
        res.send(rows);
    });
});

export { profileRouter };
