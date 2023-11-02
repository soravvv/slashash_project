const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(express.json());
app.use(cors());

require("dotenv").config({
    path: "../backend/config/.env"
})

const favouriteMovie = require('./controllers/favouriteMovie');
app.use('/movie', favouriteMovie);

const connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT
});

global.sql = connection;

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

// unhandled promise rejection
process.on('unhandledRejection', (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandle promise rejection`);

    server.close(() => {
        process.exit(1)
    })
})