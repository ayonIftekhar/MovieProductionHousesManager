const express = require("express");

const router = express.Router();

const {getDepartments} = require("../Controllers/departmentController");

router.get("/", getDepartments);


module.exports = router ;