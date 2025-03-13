<template>
  <div>
    <p>👥 Tổng lượt truy cập: {{ totalVisitors }}</p>
    <p>📅 Hôm nay: {{ todayVisitors }}</p>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export default {
  data() {
    return {
      totalVisitors: 0,
      todayVisitors: 0,
    };
  },
  async mounted() {
    try {
      await axios.post(`${API_URL}/visit`);
      const response = await axios.get(`${API_URL}/visitor-count`);
      this.totalVisitors = response.data.total;
      this.todayVisitors = response.data.today;
    } catch (error) {
      console.error("❌ Lỗi khi lấy số lượng truy cập:", error);
    }
  },
};
</script>
