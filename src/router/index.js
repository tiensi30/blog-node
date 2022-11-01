const siteRouter = require("./site");
const newsRouter = require("./news");
const coursesRouter = require("./course");

function route(app) {
  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
