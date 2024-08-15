const express = require("express");
const router = express.Router();
const userSchema = require("../modeles/userSchema");

router.get("/",function(req,res){
    res.redirect("/index");
})

router.get("/index", (req,res)=>{
    res.render("index");
})

module.exports = router;