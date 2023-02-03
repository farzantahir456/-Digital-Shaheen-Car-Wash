

const { pool } = require("../../connection/postgresql/connection")

const getworker = (req, res) => {

    pool.query(`SELECT * FROM workers `, (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    });
  };


  const getcustomer = (request, response) => {
    pool.query("SELECT * FROM customers", (err, results) => {
      if (err) {
        throw err;
      }
      response.status(201).json(results.rows);
    });
  };

  const updateadminprofile = (request, response) => {
    const admin_id = parseInt(request.params.id);
    const { admin_phone_no, admin_email,admin_password } = request.body;

    pool.query(`UPDATE admin set admin_phone_no = ${admin_phone_no},  admin_email ='${admin_email}', admin_password = '${admin_password}' where admin_id = ${admin_id}`, (error,result) => {
      if (error) throw error
    response.status(200).json("update setting")
    })
  
  };

  module.exports = {
    getworker, 
    updateadminprofile,
    getcustomer
    
  };