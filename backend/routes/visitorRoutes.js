const express = require('express');
const Visitor = require('../models/Visitor');

const router = express.Router();

// Ghi nhận lượt truy cập theo IP
router.post('/visit', async (req, res) => {
    try {
        const today = new Date().toISOString().split('T')[0];
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        let visitor = await Visitor.findOne({ date: today });

        if (!visitor) {
            visitor = new Visitor({ date: today, count: 1, uniqueIps: [ip] });
        } else if (!visitor.uniqueIps.includes(ip)) {
            visitor.count += 1;
            visitor.uniqueIps.push(ip);
        } else {
            return res.status(200).json({ message: 'IP đã được tính trước đó' });
        }

        await visitor.save();
        res.status(200).json({ message: 'Lượt truy cập đã được ghi nhận!' });
    } catch (error) {
        console.error("❌ Lỗi cập nhật lượt truy cập:", error);
        res.status(500).send("Lỗi server");
    }
});

// Lấy số lượt truy cập
router.get('/visitor-count', async (req, res) => {
    try {
        const today = new Date().toISOString().split('T')[0];

        const todayData = await Visitor.findOne({ date: today });
        const total = await Visitor.aggregate([{ $group: { _id: null, total: { $sum: "$count" } } }]);

        res.status(200).json({
            total: total.length > 0 ? total[0].total : 0,
            today: todayData ? todayData.count : 0
        });
    } catch (error) {
        console.error("❌ Lỗi lấy số lượt truy cập:", error);
        res.status(500).send("Lỗi server");
    }
});

module.exports = router;
