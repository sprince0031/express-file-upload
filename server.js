const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
