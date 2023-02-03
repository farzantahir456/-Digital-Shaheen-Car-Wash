const express = require("express");
const auth=require("../../middleware/worker/worker-auth")
const userRoute = express.Router();

const { getworker, createworker,addWorker} =require('../controllers/admin_controller')

// userRoute.get('/', info);
userRoute.get("/",auth, getworker);

userRoute.post("/",createworker);

userRoute.post("/login",addWorker)

module.exports= userRoute ;