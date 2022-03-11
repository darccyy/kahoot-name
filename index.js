const express = require("express");
const app = express();

// Allow CORS
const cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// Get name
app.get(["/name", "/name/*"], (req, res) => {
  res.send(`{"name":"${req.params[0] || "https://bruh.news"}"}`);
});

// Check server is up
app.get("/", (req, res) => {
  res.sendStatus(200);
});

// Listen
app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Listening on " +
      (process.env.PORT
        ? "https://kahootname.herokuapp.com"
        : "http://localhost:3000"),
  );
});
