const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const authRoutes = require("./routes/user");

app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
