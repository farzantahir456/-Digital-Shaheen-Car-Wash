const { pool } = require("../../connection/postgresql/connection");
const JWT = require('jsonwebtoken')
const createworker = (request, response) => {
  const { worker_name,worker_cnic,worker_phone_no,worker_email,worker_password,worker_address,worker_status} = request.body;
  pool.query(`INSERT INTO workers (worker_name,worker_cnic,worker_phone_no,worker_email,worker_password,worker_address,worker_status)
  VALUES('${worker_name}','${worker_cnic}','${worker_phone_no}','${worker_email}','${worker_password}','${worker_address}','${worker_status}')`, (error, results) => {
    if (error) {
      res.status(500).json("internal Server Error")
    }
    response.status(200).json("worker inserted");
  }
  );
};


const workerLogin = (req,res)=>{
  const{ worker_email,worker_password } = req.body

  pool.query(`SELECT * FROM workers WHERE worker_email = '${worker_email}' AND worker_password = '${worker_password}'`,
  (error,result)=>{
      const  userData  = result.rows[0]
      if(result.rows.length === 0){
          return res.status(400).json("Invalid email or password")
      }
       else if(error)  return res.status(500).json(error.message)
      const jwtToken = JWT.sign(userData,process.env.WEB_TOKEN)
      res.status(200).json(jwtToken)
  })
} 


module.exports = {
  createworker,
  workerLogin
};