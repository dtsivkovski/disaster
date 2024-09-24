var express = require('express');
var router = express.Router();
const FireReport = require("../models/fire_report.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

module.exports = router;
