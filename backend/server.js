const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = 'visitor-count.json';

// Hàm đọc số lượng truy cập từ file
const getVisitorCount = async () => {
    try {
        const data = await fs.readJson(FILE_PATH);
        return data;
    } catch (error) {
        return {}; // Nếu file chưa tồn tại, trả về object rỗng
    }
};

// Hàm lưu số lượng truy cập vào file
const saveVisitorCount = async (data) => {
    await fs.writeJson(FILE_PATH, data);
};

// API kiểm tra và tăng số lượng truy cập
app.get('/visitor-count', async (req, res) => {
    const visitorData = await getVisitorCount();
    const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    if (!visitorData[clientIP]) {
        visitorData[clientIP] = true; // Đánh dấu IP này đã truy cập
        visitorData.count = (visitorData.count || 0) + 1; // Tăng số đếm
        await saveVisitorCount(visitorData);
    }

    res.json({ count: visitorData.count || 0 });
});

// Chạy server trên cổng 5000
app.listen(5000, () => {
    console.log('Server đang chạy tại http://localhost:5000');
});
