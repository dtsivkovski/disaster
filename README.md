# Disaster Information and Reporting

This project is a web application that allows users to view and report information about natural disasters, specifically wildfires, earthquakes, and tsunamis. It uses MongoDB to store the data and Express.js to serve the application.

## Setup and Build Steps

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Set up a MongoDB database and update the `.env` file with the connection URI.
4. Start the application: `npm start`

## Overall Purpose

The main purpose of this project is to provide a platform for users to:

* View a map of recent wildfire and earthquake activity.
* Submit reports of new wildfire incidents.
* View a list of all submitted fire reports.
* Take a quiz to test their knowledge about earthquakes.
* View information about tsunamis.

The project also includes a feature to automatically delete fire reports that receive three or more dislikes, helping to maintain the accuracy and reliability of the data.