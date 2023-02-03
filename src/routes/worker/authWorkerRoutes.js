const express = require("express");
const auth=require("../../middleware/worker/worker-auth")
const userRoute = express.Router();

const { getworker, createworker,addWorker} =require('../../controllers/worker-controller/authWorkerController')

// userRoute.get('/', info);
userRoute.get("/",auth, getworker);

userRoute.post("/create",createworker);

userRoute.post("/login",addWorker)

module.exports= userRoute ;