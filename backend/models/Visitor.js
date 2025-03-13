const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    date: { type: String, required: true },
    count: { type: Number, default: 0 },
    uniqueIps: { type: [String], default: [] }
});

module.exports = mongoose.model('Visitor', visitorSchema);
