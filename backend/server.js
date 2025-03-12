require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🔗 Đã kết nối MongoDB!'))
    .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', feedbackRoutes);

// Định nghĩa Schema và Model
const visitorSchema = new mongoose.Schema({
    date: { type: String, required: true },
    count: { type: Number, default: 0 },
    uniqueIps: { type: [String], default: [] } // Lưu danh sách IP duy nhất
});
const Visitor = mongoose.model('Visitor', visitorSchema);

// API: Ghi nhận lượt truy cập theo IP
app.post('/visit', async (req, res) => {
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

// API: Lấy số lượt truy cập
app.get('/visitor-count', async (req, res) => {
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

// Khởi động server
app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
