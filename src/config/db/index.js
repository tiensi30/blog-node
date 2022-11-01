const mongoose = require("mongoose");

function connect() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/learning-nodejs");
    console.log("connect successfully!!!!");
  } catch (error) {
    console.log("connect failure !!!!");
  }
}

module.exports = { connect };
