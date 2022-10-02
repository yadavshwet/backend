const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

const app = express();
const bodyParser = require("body-parser");
app.use(express.json());

app.use("/services", require("./controllers/services"));
app.use("/contact", require("./controllers/contact"));
app.use("/analysis", require("./controllers/analysis"));
app.use("/testimonals", require("./controllers/testimonals"));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} `);
});
