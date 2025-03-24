<template>
  <div class="concept concept-seven">
    <h1>BADEN</h1>
  </div>
  <DownButton5 />
</template>

<script>
import DownButton5 from "../DownButton/DownButton5.vue";
export default {
  components: {
    DownButton5,
  },
};
</script>

<style scoped>
.main-content {
  text-align: center;
  scroll-snap-type: y mandatory;
  position: relative;
  height: 100vh;
}

.hover,
.word,
h1 {
  cursor: pointer;
}

h1 {
  position: relative;
  color: #fff;
  font: 900 60px Montserrat;
  text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.concept {
  position: relative;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: center;
}

.concept:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.concept:hover:before {
  opacity: 0.5;
}
.concept-seven {
  background: url(https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799834/IMG_1757_fzl1se.png)
    center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.concept-seven h1 {
  letter-spacing: 35px;
  position: relative;
  display: inline-block;
}

.concept-seven h1:before {
  content: "BADEN";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
  letter-spacing: 10px;
  text-shadow: none;
  opacity: 1;
}

.concept-seven:hover h1:before {
  transition: transform 0.6s ease, color 0.6s ease, opacity 0.6s ease;
  color: rgba(255, 255, 255, 0.8);
  transform: translate(-50%, -50%) scale(2);
  opacity: 0;
}

@keyframes jump-out {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}
@media (max-width: 768px) {
  h1 {
    font-size: 40px; /* Giảm kích thước chữ */
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .concept-seven h1 {
    letter-spacing: 20px; /* Giảm khoảng cách chữ */
  }

  .concept-seven h1:before {
    letter-spacing: 8px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 30px; /* Chữ nhỏ hơn trên màn hình rất nhỏ */
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  }

  .concept-seven h1 {
    letter-spacing: 15px; /* Tiếp tục thu nhỏ khoảng cách */
  }

  .concept-seven h1:before {
    letter-spacing: 5px;
  }
}
</style>
