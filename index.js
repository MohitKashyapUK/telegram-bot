// variables
const express = require("express"),
fs = require("node:fs"),
app = express(),
port = 3000,
modules_path = "./user_modules";

// to parse json data
app.use(express.json());

/* Request handlers */
app.get("/", (req, res) => {
  res.send("<h1>This is Home page!</h1>");
});

app.all("/bot/telegram", (req, res) => require(`${modules_path}/bot/telegram`)(req, res));

/* Start server */
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
