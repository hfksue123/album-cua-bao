const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    name: String,
    rating: { type: Number, required: true }, // Thay email thành rating
    message: String,
    createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
