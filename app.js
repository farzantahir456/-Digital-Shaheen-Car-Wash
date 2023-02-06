const express = require('express');

const app = express();


require('dotenv').config()
const port = process.env.WEB_PORT;
const userRoute=require('./src/routes/worker/authWorkerRoutes')
const adminRoute=require('./src/routes/admin/admin_Routes')
const admin=require('./src/routes/admin/authAdminRoutes')
const customerRoute=require('./src/routes/customer/customer-routes')
app.use(express.json());
app.use('/worker', userRoute);
app.use('/admin', adminRoute);
app.use('/adminLogin',admin)
app.use('/customer',customerRoute)

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});