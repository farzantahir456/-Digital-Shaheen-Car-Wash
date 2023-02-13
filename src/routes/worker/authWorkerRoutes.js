const express = require("express");
const auth=require("../../middleware/worker/worker-auth")
const userRoute = express.Router();

const {createworker,workerLogin} =require('../../controllers/worker-controller/authWorkerController')

userRoute.post("/create",createworker);
userRoute.post("/login",workerLogin)

module.exports= userRoute;
