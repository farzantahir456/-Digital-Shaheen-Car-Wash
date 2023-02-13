

const { pool } = require("../../connection/postgresql/connection");
const JWT = require('jsonwebtoken')


const createworker = (request, response) => {
  const { worker_name,worker_cnic,worker_phone_no,worker_email,worker_password,worker_address,worker_status} = request.body;
  pool.query(`INSERT INTO workers (worker_name,worker_cnic,worker_phone_no,worker_email,worker_password,worker_address,worker_status)
  VALUES('${worker_name}','${worker_cnic}','${worker_phone_no}','${worker_email}','${worker_password}','${worker_address}','${worker_status}')`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json("worker inserted");
  }
  );
};


const workerLogin = async (req, res) => {
  const { worker_email, worker_password} = req.body
  try {
    const result = await pool.query(`SELECT * FROM workers WHERE worker_email = $1 AND worker_password = $2`, [worker_email, worker_password])
    const { worker_password: secret } = result.rows[0]
    if(result.rowCount >0){
      const jwtToken = JWT.sign(secret,process.env.WEB_TOKEN)
      res.status(200).json({message: jwtToken})
    }else{
      res.status(400).json({message: "Something went wrong"})
    }
    
  } catch (error) {
    console.log(error);
  }
  
}

module.exports = {
  createworker,
  workerLogin
};