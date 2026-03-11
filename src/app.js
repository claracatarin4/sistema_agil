const express = require("express");

const logger = require("./middlewares/logger");
const notFound = require("./middlewares/errorHandler");
const errorHandler = require("./middlewares/notFound");

const usersRoutes = require("./routes/users.routes");

const app = express();

//Middleware que transforma a request em JSON
app.use(express.json());

//Middleware de LOG
app.use(logger);

app.use("/api/v1/user", usersRoutes);


app.use(notFound);

app.use(errorHandler);

module.exports = app