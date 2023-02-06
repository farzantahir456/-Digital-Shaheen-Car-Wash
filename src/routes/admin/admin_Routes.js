const express = require("express");
const adminRoute = express.Router();

const { getworker,getappointment, appointments} =require('../../controllers/admin-controller/admin-controller')
const auth=require("../../middleware/admin/admin-auth")


adminRoute.get("/worker", auth,getworker);
adminRoute.get("/", auth,appointments);
adminRoute.get("/appointment",auth,getappointment)
// adminRoute.put("/:id", updateadminprofile);
// 
// 
module.exports= adminRoute ;