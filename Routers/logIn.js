
const express = require("express");

const router = express.Router();

const {getLogIn} = require("../Controllers/logInController");

router.get("/", getLogIn);

router.post("/", function(req , res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username,password);
    if (username === 'buet' && password === 'buet1') {
        res.redirect("/buet");
    } else {
        res.render("login",{error : "Invalid username or password!"});
        
    }
});

module.exports = router ;