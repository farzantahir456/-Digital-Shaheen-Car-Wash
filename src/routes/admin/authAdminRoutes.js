const express = require("express");
// const auth=require("../middleware/authAdminMiddleware")
const admin = express.Router();

const adminLogin=require('../../controllers/admin-controller/authAdminController')

admin.get("/",adminLogin);

module.exports=admin