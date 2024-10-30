// deleteDislikedReports.js
const FireReport = require("../models/fire_report.js");

// deletes reports with 3 or more dislikes
async function deleteReportsWithDislikes() {
    try {
        await FireReport.deleteMany({ dislikes: { $gte: 3 } });
        console.log("Reports with 3 or more dislikes have been deleted.");
    } catch (error) {
        console.error("Error deleting reports:", error);
    }
}
// deletion job every hour
function startDeletionJob() {
    setInterval(deleteReportsWithDislikes, 60 * 60 * 1000); 
}

module.exports = startDeletionJob;