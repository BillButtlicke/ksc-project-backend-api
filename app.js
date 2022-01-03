const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const initRoutes = require("./routes/jobs.routes");
global.__basedir = __dirname;

app.use(express.urlencoded({extended: true}));
initRoutes(app);

db.sequelize.sync();

app.listen("4000", function(){
  console.log("Server is open at port 4000");
});
