const { pool } = require("../../connection/postgresql/connection")

const customergetappointment = (req, res) => {
    const { customer_name,
        customer_phone_no,
        customer_cnic,
        customer_address,
        worker_id,
        appointment_date_time,
        service_id } = req.body
    pool.query(`insert into appointments (customer_name,customer_phone_no,customer_cnic,customer_address,worker_id,appointment_date_time,service_id )values('${customer_name}','${customer_phone_no}','${customer_cnic}','${customer_address}',${worker_id},'${appointment_date_time}',${service_id})`, (err,results) => {
        if (err) {
            throw err;
        }
        res.status(200).json("worker inserted")
    })
}

module.exports = customergetappointment