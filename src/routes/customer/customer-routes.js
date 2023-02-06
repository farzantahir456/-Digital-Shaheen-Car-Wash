const express = require("express");
const customerRoute = express.Router();

const customergetappointment = require('../../controllers/customer-controller/customer-controller')

customerRoute.post('/appointment', customergetappointment)

module.exports= customerRoute