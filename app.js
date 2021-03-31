const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3700;

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index");
});
app.get("/story", (req, res)=>{
    res.render("story");
});
app.get("/lovestory", (req, res)=>{
    res.render("lovestory");
});
app.get("/angry", (req, res)=>{
    res.render("angry");
});
app.get("/fear", (req, res)=>{
    res.render("fear");
});

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));