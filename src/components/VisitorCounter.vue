<template>
  <div>
    <p>👥 Tổng lượt truy cập: {{ totalVisitors }}</p>
    <p>📅 Hôm nay: {{ todayVisitors }}</p>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "https://baos-album-backenddd.onrender.com";

export default {
  data() {
    return {
      totalVisitors: 0,
      todayVisitors: 0,
    };
  },
  async mounted() {
    try {
      // Kiểm tra nếu đã ghi nhận lượt truy cập hôm nay chưa
      const lastVisit = localStorage.getItem("lastVisit");
      const today = new Date().toDateString();

      if (lastVisit !== today) {
        await axios.post(`${API_URL}/visit`);
        localStorage.setItem("lastVisit", today); // Lưu ngày đã truy cập
      }

      // Lấy số lượt truy cập
      const response = await axios.get(`${API_URL}/visitor-count`);
      this.totalVisitors = response.data.total;
      this.todayVisitors = response.data.today;
    } catch (error) {
      console.error("Lỗi khi lấy số lượng truy cập:", error);
    }
  },
};
</script>
