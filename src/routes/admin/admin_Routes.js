const express = require("express");
const adminRoute = express.Router();

const { getworker, getcustomer,updateadminprofile} =require('../../controllers/admin-controller/admin')


adminRoute.get("/", getworker);
adminRoute.get("/customer", getcustomer);
adminRoute.put("/:id", updateadminprofile);
module.exports= adminRoute ;