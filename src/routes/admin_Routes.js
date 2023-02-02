const express = require("express");
const userRoute = express.Router();

const { getworker, getcustomer,updateadminprofile} =require('../controllers/admin-controller/admin')


userRoute.get("/", getworker);
userRoute.get("/customer", getcustomer);
userRoute.put("/:id", updateadminprofile);
module.exports= userRoute ;