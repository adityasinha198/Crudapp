const expresss = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

require('./models/config');
const crudSchema = require("./models/crudModelSchema");
const port = 5000;
const app = expresss()


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


const userRoute = require('./routers/userRouter')


app.use(userRoute)



app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
