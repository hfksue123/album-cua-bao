require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const visitorRoutes = require('./routes/visitorRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Kết nối MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Đã kết nối MongoDB!'))
    .catch(err => {
        console.error('❌ Lỗi kết nối MongoDB:', err);
        process.exit(1); // Dừng server nếu không kết nối được
    });

mongoose.connection.on('error', err => console.error('⚠️ Mongoose error:', err));

// Middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));
app.use(express.json());

// Routes
app.use('/api', feedbackRoutes);
app.use('/api', visitorRoutes);

// Kiểm tra API có chạy không
app.get('/', (req, res) => {
    res.send('🚀 API đang chạy...');
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại PORT:${PORT}`);
});
