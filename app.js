const express = require("express");

const port = process.env.PORT || 3000;

const app = express();
console.log(port)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
