const express = require("express");

const router = express.Router();

const {getPrereq} = require("../Controllers/buetPrereqController");

router.get("/", getPrereq);


module.exports = router ;