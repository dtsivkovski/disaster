// deleteReportsJobs.js
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

// deletes reports older than 2 weeks
async function deleteOldReports() {
    try {
        const twoWeeksAgo = new Date();
        twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

        await FireReport.deleteMany({ createdAt: { $lt: twoWeeksAgo } });
        console.log("Reports older than 2 weeks have been deleted.");
    } catch (error) {
        console.error("Error deleting old reports:", error);
    }
}

// deletion job every half an hour
function startDeletionJob() {
    setInterval(() => {
        deleteReportsWithDislikes();
        deleteOldReports();
    }, 30 * 60 * 1000);
}

module.exports = startDeletionJob;