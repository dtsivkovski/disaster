# Disaster Information and Reporting

This project is a website that allows users to view and report information about natural disasters, specifically wildfires, earthquakes, and tsunamis. It uses MongoDB to store the data and Express.js to serve the application.

## Setup and Build Steps

1. Clone the repository: `git clone https://github.com/dtsivkovski/disaster.git`
2. Install and use node version 16.
3. Install dependencies: `npm install`
4. Set up a MongoDB database and update the `.env` file with the connection URI.
5. Start the application: `node app.js`

## Overall Purpose

The main purpose of this project is to provide a platform for users to:

* View a map of recent wildfire, earthquake, and tsunami activity.
* Submit reports of new wildfire incidents.
* View a map of all submitted fire reports.
* Learn safety information regarding all natural disasters
* View an earthquake map with live data from USGS.
* Quiz themselves on their safety knowledge.

The project also includes a feature to automatically delete fire reports that receive three or more dislikes or are older than two weeks, helping to maintain the accuracy and reliability of the data.
