const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
require("dotenv/config");
const port = process.env.PORT;

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
