const mongoose = require("mongoose");

// create fire report schema
const fireReportSchema = new mongoose.Schema({
    // fire report fields
    location: {
        type: [Number],
        required: true
    },
    time: {
        type: Date,
        required: true
    }
});

// export notecard model
module.exports = mongoose.model("FireReport", fireReportSchema);