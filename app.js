const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const PORT = process.env.PORT || 3700;

const mysql = require("mysql");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./.env" });

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

db.connect((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("MySQL Connected...");
    }
});

//Define Routes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));