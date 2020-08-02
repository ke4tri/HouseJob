const express = require("express");

const router = express.Router();

const jobs = require("../models/jobs.js");

router.get("/", function (req, res) {
  jobs.all(function (data) {
    var hbsObject = {
      jobs: data, // not sure about the name jobs here
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
