module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mg) => mg.toObject());
  },
  MongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
