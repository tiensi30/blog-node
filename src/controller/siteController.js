const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../until/mongosees");

module.exports = {
  home: function (req, res, next) {
    Course.find({})
      .then((Course) => {
        res.render("home", {
          Course: mutipleMongooseToObject(Course),
        });
      })
      .catch(next);
  },
  search: function (req, res) {
    res.render("search");
  },
};

// app.get('/', (req, res) => {
//    res.render('home');
//  })
//  app.get('/news', (req, res) => {
//    res.render('blog');
//  })
//  app.get('/search', (req, res) => {
//    //get query parameters
//    // console.log(req.query);
//    res.render('search');
//  })
//  app.post('/search', (req, res) => {
//    // get form data
//    // console.log(req.body);
//    res.render('search');
//  })
