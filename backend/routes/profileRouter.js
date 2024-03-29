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
        res.send(rows);
    });
});

profileRouter.delete(
    "/workouts/:user_id/:user_type/:workout_id",
    (req, res) => {
        let query;
        // User is Trainee
        if (req.params["user_type"] == 0) {
            query = `DELETE FROM Workout_Users WHERE workout_id = ${req.params["workout_id"]} AND trainee_id = ${req.params["user_id"]};`;
        }
        // User is Coach
        else if (req.params["user_type"] == 1) {
            query = `DELETE FROM Workout_Users WHERE workout_id = ${req.params["workout_id"]} AND coach_id = ${req.params["user_id"]};`;
        }

        connection.query(query, (err, rows, fields) => {
            if (err) throw err;

            res.status(200);
            res.send("Workout removed from list!");
        });
    }
);

profileRouter.post("/food/:user_id", (req, res) => {
    const query = `INSERT INTO Foods (
            trainee_id,
            name,
            protein_amount,
            carbohidrate_amount,
            fat_amount,
            in_timestamp
        )
    VALUES (
            ${req.body["user_id"]},
            '${req.body["name"]}',
            ${req.body["protein_amount"]},
            ${req.body["carbohidrate_amout"]},
            ${req.body["fat_amount"]},
            CURRENT_TIMESTAMP
        )`;

    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        res.status(200);
        res.send("Food added!");
    });
});

profileRouter.get("/food/:user_id", (req, res) => {
    let query = `SELECT SUM(protein_amount) AS total_protein_amount, SUM(carbohidrate_amount) AS total_carbohidrate_amount, SUM(fat_amount) AS total_fat_amount
    FROM Foods
    WHERE trainee_id = ${req.params["user_id"]} AND in_timestamp >= CURDATE() AND in_timestamp < CURDATE() + INTERVAL 1 DAY;`;

    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        res.status(200);
        res.send(rows);
    });
});

export { profileRouter };