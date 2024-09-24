const mongoose = require("mongoose");

// create fire report schema
const fireReportSchema = new mongoose.Schema({
    // fire report fields
    location: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
});

// export notecard model
module.exports = mongoose.model("FireReport", fireReportSchema);