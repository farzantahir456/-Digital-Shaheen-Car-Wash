const express = require('express');
const app = express();
require('dotenv').config()
const userRoute=require('./src/routes/worker/authWorkerRoutes')
const adminRoute=require('./src/routes/admin/admin_Routes')
const admin=require('./src/routes/admin/authAdminRoutes')
app.use(express.json());
app.use('/worker', userRoute);
app.use('/admin', adminRoute);
app.use('/adminlogin',admin)
const port = process.env.WEB_PORT;



app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});