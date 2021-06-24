const express = require("express");

const router = express.Router();

// admin routes
router.get("/admin", (req, res)=>{
    res.render("admin/index");
});
router.get("/admin/login", (req, res)=>{
    res.render("admin/login");
});
router.get("/admin/register", (req, res)=>{
    res.render("admin/register");
});

router.get("/", (req, res)=>{
    res.render("index");
});
router.get("/story", (req, res)=>{
    res.render("story");
});
router.get("/lovestory", (req, res)=>{
    res.render("lovestory");
});
router.get("/angry", (req, res)=>{
    res.render("angry");
});
router.get("/fear", (req, res)=>{
    res.render("fear");
});
router.get("/believe", (req, res)=>{
    res.render("believe");
});
router.get("/fine", (req, res)=>{
    res.render("fine");
});
router.get("/powerless", (req, res)=>{
    res.render("powerless");
});
router.get("/handle", (req, res)=>{
    res.render("handle");
});
router.get("/fuck", (req, res)=>{
    res.render("fuck");
});
router.get("/lady", (req, res)=>{
    res.render("lady");
});
router.get("/sorry", (req, res)=>{
    res.render("sorry");
});
router.get("/what-do-you-say", (req, res)=>{
    res.render("what-do-you-say");
});

module.exports = router;