const { pool } = require("../../connection/postgresql/connection");
const JWT =require('jsonwebtoken')

const adminLogin = (req,res)=>{
    const{ admin_email,admin_password } = req.body
    pool.query(`SELECT * FROM admin WHERE admin_email = '${admin_email}' AND admin_password = '${admin_password}'`,
    (error,result)=>{
        const  userData  = result.rows[0]
        if(result.rows.length === 0){
            return res.status(400).json("Invalid Phone or password")
        }
         else if(error)  return res.status(500).json(error.message)
        const jwtToken = JWT.sign(userData,process.env.WEB_TOKEN)
        res.status(200).json(jwtToken)
    })
  } 
  module.exports = adminLogin