import express from "express";
import cors from "cors";
import mysql from "mysql";
import { galleryRouter } from "./routes/galleryRouter.js";
import { profileRouter } from "./routes/profileRouter.js";

const app = express();
const port = 8000;

app.use(express.json());

app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NeverSkipLegDay",
    database: "DBUI",
});

connection.connect();

app.post("/login", (req, res) => {
    const email = req.body["email"];
    const password = req.body["password"];

    // Check if an account with the same email already exists
    let query = `SELECT user_id, first_name, last_name, age  FROM Users WHERE email = '${email}' AND password = '${password}';`;

    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        // If the query is empty, account doesn't exist or the credentials doesn't match
        if (rows[0] == undefined) {
            res.status(404);
            res.send("The username or password you entered is incorrect");
        }
        // Else, the email and password matches and the user is successfully logged in
        else {
            res.status(200);

            const user = {
                user_id: rows[0].user_id,
                first_name: rows[0].first_name,
                last_name: rows[0].last_name,
                age: rows[0].age,
                user_type: undefined,
            };

            query = `SELECT user_id FROM Trainees WHERE user_id = ${user.user_id};`;

            // Check user type
            connection.query(query, (err, rows, fields) => {
                if (rows[0] == undefined) {
                    user.user_type = 1;
                } else {
                    user.user_type = 0;
                }

                res.send(user);
            });
        }
    });
});

app.post("/signup", (req, res) => {
    // USER TYPES:
    //
    // 0 - Trainee
    // 1 - Coach

    const user_type = req.body["user_type"];
    const first_name = req.body["first_name"];
    const last_name = req.body["last_name"];
    const age = req.body["age"];
    const email = req.body["email"];
    const password = req.body["password"];

    // REMOVE THIS TEST
    // connection.query(
    //     `DELETE FROM Users WHERE user_id = ${14};`,
    //     (err, rows, fields) => {
    //         if (err) throw err;
    //     }
    // );

    //Check if an account with the same email already exists
    let query = `SELECT user_id FROM Users WHERE email = '${email}';`;

    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        // No account exists with that email
        if (rows[0] == undefined) {
            // Insert account into users table
            query = `INSERT INTO Users (email, password, first_name, last_name, age) VALUES ('${email}', '${password}', '${first_name}', '${last_name}', ${age});`;
            connection.query(query, (err, rows, fields) => {
                if (err) throw err;

                // Get user id
                query = `SELECT user_id FROM Users WHERE email = '${email}' AND password = '${password}';`;
                connection.query(query, (err, rows, fields) => {
                    if (err) throw err;
                    let user_id = rows[0].user_id;

                    // If user is trainee, insert values into Trainees table
                    if (user_type == 0) {
                        // Insert user_id into the Trainees table
                        query = `INSERT INTO Trainees (user_id) VALUES ('${user_id}');`;
                        connection.query(query, (err, rows, fields) => {
                            if (err) throw err;
                        });
                    }
                    // If user is coach, insert values into Coaches table
                    else if (user_type == 1) {
                        // Insert user_id into the Coaches table
                        query = `INSERT INTO Coaches (user_id) VALUES ('${user_id}');`;
                        connection.query(query, (err, rows, fields) => {
                            if (err) throw err;
                        });
                    }

                    res.status(200);
                    res.send("User created!");
                });
            });
        }
        // Else, account already exist
        else {
            res.status(404);
            res.send("Email is already registered");
        }
    });
});

app.use("/gallery", galleryRouter);

app.use("/profile", profileRouter);

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.put("/parse", (req, res) => {
//     console.log(req.body);

//     try {
//         const body = req.body;
//         const name = body["first"] + " " + body["last"];
//         const age = body["age"];
//         const isAdmin = body["admin"] ? "is an admin" : "is not an admin";
//         const message = `${name} is ${age} years old and ${isAdmin}`;
//         res.status(200);
//         res.send(message);
//     } catch {
//         console.log(err);
//     }
// });

// app.get("/db", (req, res) => {
//     connection.query("SHOW TABLES", (err, rows, fields) => {
//         if (err) throw err;

//         console.log(rows);
//         res.status(200);
//         res.send(rows);
//     });
// });

// app.post("/user", (req, res) => {
//     const { first, last, age, admin } = req.body;
//     const query = `INSERT INTO users (first_name, last_name, age, admin) VALUES ('${first}', '${last}', ${age}, ${admin})`;
//     connection.query(query, (err, rows, fields) => {
//         if (err) throw err;

//         console.log(rows);
//         res.status(200);
//         res.send("Successfully added user!");
//     });
// });

// app.post("/users", (req, res) => {
//     const query = `SELECT * FROM users;`;
//     connection.query(query, (err, rows, fields) => {
//         if (err) throw err;

//         res.status(200);
//         res.send(rows);
//     });
// });

// app.post("/users/clear", (req, res) => {
//     const query = `DELETE FROM users;`;
//     connection.query(query, (err, rows, fields) => {
//         if (err) throw err;

//         res.status(200);
//         res.send("Successfully cleared users!");
//     });
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
