const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobsController = require("./controllers/jobs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/jobs", jobsController);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).send(message);
});

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log(`listening on port ${app.get("port")}`);
});
