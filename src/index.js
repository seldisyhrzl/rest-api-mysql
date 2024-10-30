const express = require("express");
const app = express();
require("dotenv/config");
const port = process.env.PORT;
const userRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
