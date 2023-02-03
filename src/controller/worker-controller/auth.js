

const { pool } = require("../db config/db.config");
const JWT =require('jsonwebtoken')



const getworker = (req, res) => {
  const worker_id=req.user;
    pool.query(`SELECT * FROM worker where worker_id=${worker_id}`, (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    });
  };


  


  const addWorker = (req,res)=>{
    const{ worker_email,worker_password } = req.body
    pool.query(`SELECT * FROM worker WHERE worker_email = '${worker_email}' AND worker_password = '${worker_password}'`,
    (error,result)=>{
        const [ userData ] = result.rows
        if(userData == ''){
            res.status(400).json("Invalid Phone or password")
        }
        else if(error) throw error
        const jwtToken = JWT.sign(userData,process.env.WEB_TOKEN)
        res.status(200).json(jwtToken)
    })
  }

  const createworker = (request, response) => {
    const { worker_name,worker_phone_no, worker_email, worker_password} = request.body;
    pool.query(`INSERT INTO worker (worker_name,worker_phone_no,worker_email,worker_password)
    VALUES('${worker_name}','${worker_phone_no}','${worker_email}','${worker_password}')`,(error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json("worker inserted");
      }
    );
  };


  
  



  module.exports = {
    getworker, 
    createworker,
    addWorker 
  };