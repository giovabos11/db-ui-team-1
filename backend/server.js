const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const cors = require("cors");
app.use(cors());

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NeverSkipLegDay",
    database: "DBUI",
});

connection.connect();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.put("/parse", (req, res) => {
    console.log(req.body);

    try {
        const body = req.body;
        const name = body["first"] + " " + body["last"];
        const age = body["age"];
        const isAdmin = body["admin"] ? "is an admin" : "is not an admin";
        const message = `${name} is ${age} years old and ${isAdmin}`;
        res.status(200);
        res.send(message);
    } catch {
        console.log(err);
    }
});

app.get("/db", (req, res) => {
    connection.query("SHOW TABLES", (err, rows, fields) => {
        if (err) throw err;

        console.log(rows);
        res.status(200);
        res.send(rows);
    });
});

app.post("/user", (req, res) => {
    const { first, last, age, admin } = req.body;
    const query = `INSERT INTO users (first_name, last_name, age, admin) VALUES ('${first}', '${last}', ${age}, ${admin})`;
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        console.log(rows);
        res.status(200);
        res.send("Successfully added user!");
    });
});

app.post("/users", (req, res) => {
    const query = `SELECT * FROM users;`;
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        res.status(200);
        res.send(rows);
    });
});

app.post("/users/clear", (req, res) => {
    const query = `DELETE FROM users;`;
    connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        res.status(200);
        res.send("Successfully cleared users!");
    });
});

app.get("/gallery/exercises", (req,res) => {
    const query = `SELECT category, name FROM exersises WHERE muscle_group ='${muscle_group}'`
    connection.query(query,(err,rows,fields) =>{
        if (err) throw err;

        res.status(200);
        res.send("Successfully sent exercises by muscle_group!");

    });
    
    return rows; 

});





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
