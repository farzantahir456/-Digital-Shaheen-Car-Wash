

const { pool } = require("../../connection/postgresql/connection")

const getworker = (req, res) => {

    pool.query(`SELECT * FROM workers `, (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    });
  };


  const appointments = (req, res) => {
    pool.query(`SELECT * FROM appointments`, (err, results) => {
      if (err) {
        throw err;
      }
      res.status(201).json(results.rows);
    });
  };

  const getappointment=(req,res)=>{
    pool.query (`SELECT customer_name, worker_name, service_type from appointments
    JOIN workers on appointments.worker_id = workers.worker_id
    JOIN services on appointments.service_id = services.service_id  `,(err,results)=>{
      if(err){
        throw err;
      }
      res.status(200).json(results.rows)
    })
  }


  module.exports = {
    getworker, 
    appointments,
    getappointment
    
  };