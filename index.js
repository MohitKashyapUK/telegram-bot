const express = require("express"),
fs = require("node:fs"),
// express app
app = express(),
port = 3000;

/* Custom Middleware for headers */
app.use(express.json());

/* Request handlers */
app.get("/", (req, res) => {
  res.send("<h1>This is Home page!</h1>");
});

/* Start server */
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
