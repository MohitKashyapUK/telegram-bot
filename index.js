// variables
const express = require("express");
const fs = require("node:fs");
const app = express();
const port = process.env.PORT || 3000;
const modules_path = "./user_modules";

// to parse json data
app.use(express.json());

/* Request handlers */
app.get("/", (req, res) => {
  res.send("<h1>This is Home page!</h1>");
});

// for all http methods
app.all("/bot/telegram", (req, res) => require(`${modules_path}/bot/telegram`)(req, res));

/* Start server */
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});