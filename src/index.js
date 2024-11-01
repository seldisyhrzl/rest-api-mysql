const express = require("express");
const app = express();
require("dotenv/config");
const port = process.env.PORT;
const userRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");
const mysql = require("mysql2");

app.use(middlewareLogRequest);

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "tutor_dek",
});

app.use(express.json());

app.use("/users", userRoutes);

app.use("/", (req, res) => {
  dbPool.execute("SELECT * FROM mahasiswa", (err, rows) => {
    if (err) {
      res.json({
        message: "Failed to Connect",
      });
    }
    res.json({
      message: "Connection Success",
      data: rows,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
