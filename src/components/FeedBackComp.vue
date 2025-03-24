<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="sendFeedback">
      <h2>RATE ME</h2>

      <p type="Name:">
        <input v-model="name" placeholder="Cậu tên gì thế :>" required />
      </p>

      <p type="Rate my pics:">
        <span
          v-for="star in 5"
          :key="star"
          @click="rating = star"
          @mouseover="hoverRating = star"
          @mouseleave="hoverRating = rating"
          class="star"
          :class="{ active: star <= (hoverRating || rating) }"
        >
          ★
        </span>
      </p>

      <p type="Message:">
        <input v-model="message" placeholder="Cậu thấy thế nào?" required />
      </p>

      <button type="submit">Send Message</button>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

      <div>
        <span><font-awesome-icon :icon="['fab', 'instagram']" /></span>
        hfksue123
        <span><font-awesome-icon :icon="['fas', 'envelope']" /></span>
        baosum01@gmail.com
      </div>
    </form>
  </div>
  <BackgroundCanvas />
</template>

<script>
import axios from "axios";
import BackgroundCanvas from "./BackgroundCanvas.vue";
const API_URL = "https://baos-album-backenddd.onrender.com";

export default {
  components: { BackgroundCanvas },
  data() {
    return {
      name: "",
      rating: 0,
      hoverRating: 0,
      message: "",
      successMessage: "",
    };
  },
  methods: {
    async sendFeedback() {
      try {
        await axios.post(`${API_URL}/api/send-feedback`, {
          name: this.name,
          rating: this.rating,
          message: this.message,
        });

        this.successMessage = "🎉 Thank you for your feedback!";

        // Reset input
        this.name = "";
        this.rating = 0;
        this.hoverRating = 0;
        this.message = "";

        // Đợi 2 giây rồi làm mờ thông báo
        setTimeout(() => {
          this.fadeOutMessage();
        }, 2000);
      } catch (error) {
        console.error("Error sending feedback:", error);
      }
    },

    fadeOutMessage() {
      const messageElement = document.querySelector(".success-message");
      if (messageElement) {
        messageElement.classList.add("fade-out");

        // Xóa thông báo sau 0.5 giây
        setTimeout(() => {
          this.successMessage = "";
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.star {
  font-size: 28px;
  cursor: pointer;
  color: #ccc;
  transition: color 0.2s;
}
.star.active {
  color: gold;
}

.success-message {
  color: #2878a7; /* Màu xanh lá */
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  margin-top: 63px;
  padding: 10px;
  border: 2px solid #006899;
  border-radius: 5px;
  background: rgba(75, 79, 76, 0.1); /* Màu nền nhạt */
  animation: fadeIn 0.5s ease-in-out;
}
.fade-out {
  animation: fadeOut 0.5s ease-in-out forwards;
}
/* Hiệu ứng xuất hiện nhẹ nhàng */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* background: url(https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602663/FE7A1034_kw3wg6.jpg)
    no-repeat center center;
  background-size: cover; */
}
.wrapper .form {
  width: 340px;
  height: 440px;
  background: #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  padding: 20px 30px;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  position: relative;
  text-align: center;
}
.wrapper .form h2 {
  margin: 10px 0;
  padding-bottom: 10px;
  width: 180px;
  color: #78788c;
  border-bottom: 3px solid #78788c;
  margin-left: auto;
  margin-right: auto;
}
.wrapper .form input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  border: 0;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;
}
.wrapper .form input:focus {
  border-bottom: 2px solid #78788c;
}
.wrapper .form p:before {
  content: attr(type);
  display: block;
  margin: 28px 0 0;
  font-size: 14px;
  color: #5a5a5a;
}
.wrapper .form button {
  float: right;
  padding: 8px 12px;
  margin: 15px 0 0;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #78788c;
  background: 0;
  color: #5a5a6e;
  cursor: pointer;
  transition: all 0.3s;
}
.wrapper .form button:hover {
  background: #78788c;
  color: #fff;
}
.wrapper .form div {
  position: absolute;
  bottom: -25px;
  right: -30px;
  background: #50505a;
  color: #fff;
  width: 310px;
  padding: 10px 0px 10px 0;
  border-radius: 6px;
  font-size: 12px;
  box-shadow: 10px 10px 40px -14px #000;
}
.wrapper .form div span {
  margin: 0 5px 0 15px;
}
/* Responsive */
@media (max-width: 768px) {
  .wrapper .form {
    width: 280px;
    padding: 15px;
  }
  .wrapper .form h2 {
    font-size: 18px;
  }
  .wrapper .form input {
    font-size: 12px;
    padding: 6px;
  }
  .wrapper .form button {
    font-size: 12px;
    padding: 8px;
  }
  .wrapper .form div {
    font-size: 11px;
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .wrapper {
    padding: 10px;
  }
  .wrapper .form {
    height: 370px;
    width: 250px;
    padding: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .wrapper .form h2 {
    font-size: 16px;
  }
  .wrapper .form input {
    font-size: 12px;
    padding: 5px;
  }
  .wrapper .form button {
    font-size: 12px;
    padding: 6px;
    margin: 9px 0 0;
  }
  .wrapper .form div {
    right: 0px;
    width: 250px;
    border-radius: 0 0 10px 10px;
    font-size: 10px;
  }
  .success-message {
    font-size: 9px;
    margin-top: 53px;
    padding: 5px;
    border: 1px solid #006899;
  }
}
</style>
