const express = require("express");
const adminRoute = express.Router();

const { getworker, getcustomer} =require('../../controllers/admin-controller/admin-controller')


adminRoute.get("/", getworker);
adminRoute.get("/customer", getcustomer);
// adminRoute.put("/:id", updateadminprofile);
module.exports= adminRoute ;