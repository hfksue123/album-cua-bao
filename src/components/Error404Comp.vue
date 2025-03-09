<template>
  <div class="error">
    <h1>
      4<span><font-awesome-icon :icon="['fas', 'ghost']" /></span>4
    </h1>
    <h2>Lỗi: 404 Trang không tìm thấy</h2>
    <p>Xin lỗi, trang này hiện đang được bảo trì.<br />Hẹn gặp bạn lần sau.</p>
    <button @click="goBack" class="backToHome">Quay lại trang trước</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      // Quay lại trang trước
      if (window.history.length > 1) {
        window.history.back();
      } else {
        // Nếu không có lịch sử, trở về trang chủ
        window.location.href = "/";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");

.error {
  background-color: var(--second-bg-color);
  font-family: "Montserrat", sans-serif;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

h1 {
  color: #e7ebf2;
  font-size: 12.5rem;
  letter-spacing: 0.03em;
  text-shadow: 0.05em 0.05em 0 rgba(0, 0, 0, 0.25);
}

h1 span {
  animation: spooky 2s alternate infinite linear;
  color: var(--main-color);
  display: inline-block;
}

h2 {
  color: #e7ebf2;
  margin-bottom: 0.4em;
}

p {
  color: #ffffff;
  margin-top: 0;
}

.backToHome {
  color: #fff;
  margin: 20px;
  padding: 12px 15px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  position: relative;
  transition: 0.3s;
  z-index: 1;
  background: var(--main-color);
  cursor: pointer;
  border-radius: 6px;
}

.backToHome:hover {
  background: rgb(129 0 255);
  box-shadow: rgba(129, 0, 255, 0.4) 0px 4px, rgba(129, 0, 255, 0.3) 0px 8px,
    rgba(129, 0, 255, 0.2) 0px 12px, rgba(129, 0, 255, 0.1) 0px 16px,
    rgba(129, 0, 255, 0.05) 0px 20px;
}

@keyframes spooky {
  from {
    transform: translatey(0.15em) scaley(0.95);
  }
  to {
    transform: translatey(-0.15em);
  }
}
@media (max-width: 450px) {
  h1 {
    font-size: 8rem;
    letter-spacing: 0.03em;
  }
  h2 {
    font-size: 1rem;
  }
  p {
    font-size: 0.7rem;
  }
}
</style>
