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

profileRouter.get("/", (req, res) => {
    res.send("Test");
});

export { profileRouter };
