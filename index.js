const express = require("express");
const app = express();

// Allow ALL access HEHEHE
const cors = require("cors");
const allowedOrigins = [
  "*",
  "https://kahoot.it/namerator",
  "https://kahoot.it",
];
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

// Test
app.get("/test", (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Listening on " +
      (process.env.PORT
        ? "https://kahoot-name.herokuapp.com"
        : "http://localhost:3000"),
  );
});
