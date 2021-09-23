const Job = require("../models/Job");
const seedData = require("./seeds.json");

Job.deleteMany()
    .then(() => Job.insertMany(seedData))
    .then((result) => console.log(result))
    .catch((err) => console.error(err))
    .finally(process.exit);
