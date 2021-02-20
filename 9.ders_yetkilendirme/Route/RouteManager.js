var RouteMain = require("./MainRoute");
var RouteAuth = require("./AuthRoute");

module.exports = function (app) {
  app.use("/", RouteMain);
  app.use("/auth", RouteAuth);
};
