const mongoose = require('mongoose')


mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://0.0.0.0:27017/pract",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("err", err);
    }
    console.log("Connected");
  }
);
