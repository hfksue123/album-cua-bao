<template>
  <div>
    <p>👥 Tổng lượt truy cập: {{ totalVisitors }}</p>
    <p>📅 Hôm nay: {{ todayVisitors }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      totalVisitors: 0,
      todayVisitors: 0,
    };
  },
  async mounted() {
    try {
      await axios.post("http://localhost:5000/visit"); // Gửi request ghi nhận truy cập
      const response = await axios.get("http://localhost:5000/visitor-count");
      this.totalVisitors = response.data.total;
      this.todayVisitors = response.data.today;
    } catch (error) {
      console.error("Lỗi khi lấy số lượng truy cập:", error);
    }
  },
};
</script>
