const express = require("express");
require("dotenv").config();
const port = 6000;
const app = express();

app.use('/expense' , require("./controller"))

app.listen(port, () => {
  console.log(`Listening on ${port} `);
});
