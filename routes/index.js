var express = require('express');
var router = express.Router();
const FireReport = require("../models/fire_report.js");

// set up map token
map_token = process.env.MAP_TOKEN;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

/* GET reports page. */
router.get('/fire-reports', function(req, res, next) {
  res.render('pages/fire-reports', { map_token: map_token });
});

module.exports = router;
