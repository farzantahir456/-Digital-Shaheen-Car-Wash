const express = require('express');

const app = express();
require('dotenv').config()

const userRoute=require('./src/routes/admin_Routes')
const port=process.env.WEB_PORT

app.use(express.json());

app.use('/worker', userRoute);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});