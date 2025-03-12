const express = require('express');
const Feedback = require('../models/feedbackModel');

const router = express.Router();

// Gửi góp ý
router.post('/send-feedback', async (req, res) => {
    try {
        const { name, rating, message } = req.body;

        if (!name || rating === undefined || !message) {
            return res.status(400).json({ error: "Vui lòng điền đầy đủ thông tin!" });
        }

        const feedback = new Feedback({ name, rating, message });
        await feedback.save();

        res.status(201).json({ message: "Góp ý đã được gửi thành công!" });
    } catch (error) {
        console.error("❌ Lỗi gửi góp ý:", error);
        res.status(500).send("Lỗi server");
    }
});

// Lấy danh sách góp ý
router.get('/feedbacks', async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ date: -1 }); // Sắp xếp mới nhất trước
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error("❌ Lỗi lấy góp ý:", error);
        res.status(500).send("Lỗi server");
    }
});

module.exports = router;
