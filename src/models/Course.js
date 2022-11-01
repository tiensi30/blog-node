const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, max: 224 },
  description: { type: String, max: 600 },
  image: { type: String, max: 224 },
  slug: { type: String },
  youtubeID: { type: String },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
