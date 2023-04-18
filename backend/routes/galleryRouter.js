import express from "express";
import mysql from "mysql";

const galleryRouter = express.Router();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NeverSkipLegDay",
    database: "DBUI",
});

connection.connect();

galleryRouter.get("/exercises", (req, res) => {
    // Create a query to retrieve all the elements in the exercise table and order them by muscle type
    const query = `SELECT * FROM Exercises ORDER BY muscle_type`;

    // Query the database
    connection.query(query, (err, rows, fields) => {
        // If there is an error, throw it
        if (err) throw err;

        // If the length of the rows is 0, the table is empty
        if (rows.length == 0) {
            res.status(404);
            res.send("The table is empty!");
        }

        // Variables related to return the data in formatted using the second option
        let exercise_list = [];
        let prev_name = rows[0].muscle_type;
        let temp_list = [];
        // For each row in the exercise table
        rows.forEach((row) => {
            // First option:
            // exercise_list.push({
            //     muscle_group: row.muscle_type,
            //     name: row.exercise_name,
            //     exercise_id: row.exercise_id,
            // });

            // Second option:
            if (prev_name != row.muscle_type) {
                exercise_list.push({
                    muscle_group: prev_name,
                    exercises: temp_list,
                });
                temp_list = [];
                prev_name = row.muscle_type;
            }

            temp_list.push({
                name: row.exercise_name,
                exercise_id: row.exercise_id,
            });
        });
        exercise_list.push({
            muscle_group: prev_name,
            exercises: temp_list,
        });

        // Print example of how data should be read
        // exercise_list.forEach((exercise_group) => {
        //     console.log("Group: " + exercise_group.muscle_group);
        //     exercise_group.exercises.forEach((exercise) => {
        //         console.log(
        //             "   Name: " +
        //                 exercise.name +
        //                 " (ID: " +
        //                 exercise.exercise_id +
        //                 ")"
        //         );
        //     });
        // });

        // Return excercise list
        res.status(200);
        res.send(exercise_list);
    });
});

galleryRouter.get("/workouts", (req, res) => {
    const query = `SELECT workout_id, muscle_group, week_day, duration, description FROM Workouts WHERE trainee_id IS NULL;`;

    // Query the database
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        // If the length of the rows is 0, the table is empty
        if (rows.length == 0) {
            res.status(404);
            res.send("The table is empty!");
        }

        res.send(rows);
    });
});

galleryRouter.post("/workouts/:user_id", (req, res) => {
    //console.log(req.body["user_id"]);

    let query;

    // User is Trainee
    if (req.body["user_type"] == 0) {
        query = `INSERT INTO Workout_Users (
            workout_id,
            trainee_id,
            coach_id,
            start_date,
            end_date
        )
        VALUES (
            ${req.body["workout_id"]},
            (
                select user_id
                from Trainees
                where user_id = ${req.body["user_id"]}
            ),
            NULL,
            CURRENT_TIMESTAMP,
            CURRENT_TIMESTAMP
        );`;
    }
    // User is Coach
    else if (req.body["user_type"] == 1) {
        query = `INSERT INTO Workout_Users (
            workout_id,
            trainee_id,
            coach_id,
            start_date,
            end_date
        )
        VALUES (
            ${req.body["workout_id"]},
            NULL,
            (
                select user_id
                from Coaches
                where user_id = ${req.body["user_id"]}
            ),
            CURRENT_TIMESTAMP,
            CURRENT_TIMESTAMP
        );`;
    }

    // Match workout with the user who saved it
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        res.status(200);
        res.send("Workout added to list!");
    });
});

galleryRouter.post("/exercises/:user_id", (req, res) => {
    let query_workout;

    // User is Trainee
    if (req.body["user_type"] == 0) {
        query_workout = `INSERT INTO Workouts (trainee_id, coach_id, muscle_group,duration, week_day, description) VALUES ((select user_id from Trainees where user_id = ${req.body["user_id"]}), NULL, '${req.body["muscle_group"]}', ${req.body["duration"]}, '${req.body["week_day"]}', '${req.body["description"]}');`;
    }
    // User is Coach
    else if (req.body["user_type"] == 1) {
        query_workout = `INSERT INTO Workouts (trainee_id, coach_id, muscle_group, duration, week_day, description) VALUES (NULL, (select user_id from Coaches where user_id = ${req.body["user_id"]}), '${req.body["muscle_group"]}', ${req.body["duration"]}, '${req.body["week_day"]}', '${req.body["description"]}');`;
    }

    // Create a new workout
    connection.query(query_workout, (err, rows, fields) => {
        if (err) throw err;

        // Get last inserted workout id
        connection.query(
            "SELECT LAST_INSERT_ID() AS workout_id;",
            (err, rows, fields) => {
                let workout_id = rows[0].workout_id;

                let query_workout_users;

                // User is Trainee
                if (req.body["user_type"] == 0) {
                    query_workout_users = `INSERT INTO Workout_Users (workout_id, trainee_id, coach_id, start_date, end_date) VALUES (${workout_id}, (select user_id from Trainees where user_id = ${req.body["user_id"]}), NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`;
                }
                // User is Coach
                else if (req.body["user_type"] == 1) {
                    query_workout_users = `INSERT INTO Workout_Users (workout_id, trainee_id, coach_id, start_date, end_date) VALUES (${workout_id}, NULL, (select user_id from Coaches where user_id = ${req.body["user_id"]}), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`;
                }

                // Match workout with the user who saved it (creator)
                connection.query(query_workout_users, (err, rows, fields) => {
                    if (err) throw err;

                    let query_workout_exercises = `INSERT INTO Workout_Exercises (workout_id, exercise_id) VALUES `;

                    for (let i = 0; i < req.body["exercise_list"].length; i++) {
                        query_workout_exercises += `(${workout_id}, ${req.body["exercise_list"][i]})`;

                        if (i < req.body["exercise_list"].length - 1) {
                            query_workout_exercises += ",";
                        } else {
                            query_workout_exercises += ";";
                        }
                    }

                    // Match workout with their respective exercises
                    connection.query(
                        query_workout_exercises,
                        (err, rows, fields) => {
                            if (err) throw err;

                            res.status(200);
                            res.send("Workout from exercises added to list!");
                        }
                    );
                });
            }
        );
    });
});

export { galleryRouter };
