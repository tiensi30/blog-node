const Course = require("../models/Course");
const {
  mutipleMongooseToObject,
  MongooseToObject,
} = require("../until/mongosees");

module.exports = {
  courses: function (req, res, next) {
    Course.find({})
      .then((Courses) => {
        res.render("courses/course", {
          Courses: mutipleMongooseToObject(Courses),
        });
      })
      .catch(next);
  },
  courseDetail: function (req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((Course) => {
        res.render("courses/courseDetail", {
          Course: MongooseToObject(Course),
        });
      })
      .catch(next);
  },
};
