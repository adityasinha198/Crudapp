const crudSchema = require("../models/crudModelSchema");

const getuser = async (req, res) => {
  try {
    const info = await crudSchema.find();

    console.log(info);

    res.json({
      status: "Successfull",
      data: info,
    });
  } catch (err) {
    res.json({
      sucess: "false",
      msg: `Error-${err.message}`,
    });
  }
};

const adduser = async (req, res) => {

  
  console.log(req.body);

  const cruddata = new crudSchema(req.body);

  try {
    const data = await cruddata.save();
    res.json({
      status: "Succesfull",
      value: data,
    });
  } catch (err) {
    res.json({
      status: "Fail",
      error: err.message,
    });
  }
};


const upadateuser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const value = await crudSchema.findByIdAndUpdate(req.params.id, req.body);
  
      res.json({
        status: "Successfull",
        data: value,
      });
    } catch (err) {
      res.json({
        sucess: "false",
        msg: `Error-${err.message}`,
      });
    }
}


const deleteuser = async (req, res) => {
    const id = req.params.id;
    try {
      const delval = await crudSchema.findByIdAndDelete(req.params.id);
  
      res.json({
        status: "successfull",
        data: delval,
      });
    } catch (err) {
      res.json({
        sucess: "false",
        msg: `Error-${err.message}`,
      });
    }
  }


module.exports = {
  getuser,
  adduser,
  upadateuser,
  deleteuser
};
