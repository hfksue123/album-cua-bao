<template>
  <div>
    <p>Số người đã truy cập: {{ visitorCount }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      visitorCount: 0,
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:5000/visitor-count");
      this.visitorCount = response.data.count;
    } catch (error) {
      console.error("Lỗi khi lấy số lượng truy cập:", error);
    }
  },
};
</script>
