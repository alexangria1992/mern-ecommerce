const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const colors = require("colors");
const connectDB = require("./config/db");
app.use(express.json());
app.use(cors());
dotenv.config();

console.log(process.env.PORT);

const port = process.env.PORT || 3000;

// connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO RABBIT API");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.magenta);
});
