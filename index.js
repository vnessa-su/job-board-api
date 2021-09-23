const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobsController = require("./controllers/jobs");
const usersController = require("./controllers/users");
const {
    handleErrors,
    handleValidationErrors,
} = require("./middleware/custom_errors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/jobs", jobsController);
app.use("/api", usersController);
app.use(handleValidationErrors);
app.use(handleErrors);

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log(`listening on port ${app.get("port")}`);
});
