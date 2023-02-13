const express = require("express");
const admin = express.Router();

const adminLogin=require('../../controllers/admin-controller/authAdminController')

admin.post("/",adminLogin);

module.exports=admin