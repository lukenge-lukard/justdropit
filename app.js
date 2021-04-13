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
app.get("/believe", (req, res)=>{
    res.render("believe");
});
app.get("/fine", (req, res)=>{
    res.render("fine");
});
app.get("/powerless", (req, res)=>{
    res.render("powerless");
});
app.get("/handle", (req, res)=>{
    res.render("handle");
});
app.get("/fuck", (req, res)=>{
    res.render("fuck");
});
app.get("/lady", (req, res)=>{
    res.render("lady");
});
app.get("/sorry", (req, res)=>{
    res.render("sorry");
});
app.get("/what-do-you-say", (req, res)=>{
    res.render("what-do-you-say");
});

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));