

const { pool } = require("../../connection/postgresql/connection");
const JWT = require('jsonwebtoken')


const createworker = (request, response) => {
  const { worker_name, worker_phone_no, worker_email, worker_password } = request.body;
  pool.query(`INSERT INTO workers (worker_name,worker_phone_no,worker_email,worker_password)
  VALUES('${worker_name}','${worker_phone_no}','${worker_email}','${worker_password}')`, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json("worker inserted");
  }
  );
};


const addWorker = async (req, res) => {
  const { worker_email, worker_password } = req.body
  try {
    const result = await pool.query(`SELECT * FROM workers WHERE worker_email = $1 AND worker_password = $2`, [worker_email, worker_password])
    const { worker_name: secret } = result.rows[0]
    if(result.rowCount > 0){
      const jwtToken = JWT.sign(secret,process.env.WEB_TOKEN)
      res.status(200).json({message: jwtToken})
    }else{
      res.status(400).json({message: "Something went wrong"})
    }
    
  } catch (error) {
    
  }

  // (error,result)=>{
  //   const [ userData ] = result.rows
  //   console.log("add worker here", userData);
  //   // console.log("in here");
  //     // if(userData == ''){
  //     //     res.status(400).json("Invalid Phone or password")
  //     // }
  //     if(error){
  //       res.status(404).json("Invalid Cradentials")
  //     }
  //     const jwtToken = JWT.sign(userData,process.env.WEB_TOKEN)
  //     res.status(200).json(jwtToken)
  // }
  
}

const getworker = (req, res) => {
  const worker_id = req.user;
  pool.query(`SELECT * FROM workers where worker_id=${worker_id}`, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};















module.exports = {
  getworker,
  createworker,
  addWorker
};