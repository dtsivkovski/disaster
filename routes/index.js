var express = require('express');
var router = express.Router();
const FireReport = require("../models/fire_report.js");

// set up map token
map_token = process.env.MAP_TOKEN;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get('/wildfires', function(req, res, next) {
  res.render('pages/wildfires', { title: 'Express' });
});

/* GET reports page. */
router.get('/fire-reports', function(req, res, next) {
  res.render('pages/fire-reports', { map_token: map_token });
});

router.get('/fire-reports-list', function(req, res, next) {
  FireReport.find().then((fire_reports) => {
    res.render('pages/all-fire-reports', { map_token: map_token, reports: fire_reports });
  }).catch((error) => {
    res.status(500).json({message: "Error fetching fire reports.", error: error});
  });
})

router.post('/fire-report/new', function(req, res, next) {
  try {
    console.log(req.body);
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;


    const newFireReport = new FireReport({
      location: [longitude, latitude],
      time: new Date()
    });

    newFireReport.save().then(() => {
      console.log("Fire report saved");
      res.status(200).json({message: "Fire report created successfully."});
    });
    
  }
  catch (error) {
    console.log(error);
    res.status(500).json({message: "Error creating new fire report.", error: error});
  }
});

router.get('/fire-report/all', function(req, res, next) {
  FireReport.find().then((reports) => {
    res.status(200).json(reports);
  }).catch((error) => {
    res.status(500).json({message: "Error fetching fire reports.", error: error});
  });
});

router.get('/earthquakes', function(req, res, next) {
  res.render('pages/earthquake', { title: 'Express' });
});

module.exports = router;
