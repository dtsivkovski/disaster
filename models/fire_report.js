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
    },
    createdAt: {
        type: Date,
        default: Date.now, 
        immutable: true    
    },
    dislikes: {
        type: Number,
        default: 0 
    }
});

// export notecard model
module.exports = mongoose.model("FireReport", fireReportSchema);