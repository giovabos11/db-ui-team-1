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
        exercise_list.forEach((exercise_group) => {
            console.log("Group: " + exercise_group.muscle_group);
            exercise_group.exercises.forEach((exercise) => {
                console.log(
                    "   Name: " +
                        exercise.name +
                        " (ID: " +
                        exercise.exercise_id +
                        ")"
                );
            });
        });

        // Return excercise list
        res.status(200);
        res.send(exercise_list);
    });
});

galleryRouter.get("/workouts", (req, res) => {
    res.send("Workouts");
});

export { galleryRouter };