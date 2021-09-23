const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

// INDEX
// GET api/jobs
router.get("/", (req, res, next) => {
    Job.find()
        .then((jobs) => {
            if (!job) {
                res.sendStatus(404);
            } else {
                res.json(job);
            }
        })
        .catch(next);
});

// SHOW
// GET api/jobs/5a7db6c74d55bc51bdf39793
router.get("/:id", (req, res, next) => {
    Job.findById(req.params.id)
        .then((job) => {
            Job.find().then((jobs) => {
                if (!job) {
                    res.sendStatus(404);
                } else {
                    res.json(job);
                }
            });
        })
        .catch(next);
});

// CREATE
// POST api/jobs
router.post("/", (req, res, next) => {
    Job.create(req.body)
        .then((job) => res.status(201).json(job))
        .catch(next);
});

// UPDATE
// PUT api/jobs/5a7db6c74d55bc51bdf39793
router.put("/:id", (req, res, next) => {
    Job.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
    })
        .then((job) => {
            Job.find().then((jobs) => {
                if (!job) {
                    res.sendStatus(404);
                } else {
                    res.json(job);
                }
            });
        })
        .catch(next);
});

// DESTROY
// DELETE api/jobs/5a7db6c74d55bc51bdf39793
router.delete("/:id", (req, res, next) => {
    Job.findOneAndDelete({
        _id: req.params.id,
    })
        .then((job) => {
            if (!job) {
                res.sendStatus(404);
            } else {
                res.json(job);
            }
        })
        .catch(next);
});

module.exports = router;
