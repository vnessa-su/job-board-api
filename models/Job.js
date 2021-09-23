const mongoose = require("../db/connection");

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
    },
    {
        timestamps: true,
    }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
