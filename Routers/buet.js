
const express = require("express");

const router = express.Router();

const {getBuet} = require("../Controllers/buetController");

router.get("/" , getBuet);


module.exports = router ;