<template>
  <div class="wrap">
    <!-- Button that triggers the popup -->
    <button
      @click="showPopup = true"
      class="btn btn-primary btn-ghost btn-shine"
    >
      read me
    </button>

    <!-- Popup Modal -->
    <transition name="fade">
      <div v-if="showPopup" class="popup-overlay" @click="handleOverlayClick">
        <div class="popup-content">
          <button class="close-btn" @click="closePopup">&times;</button>
          <div class="popup-body">
            <div class="popup-text">
              <h2 class="popup-title">About this Album</h2>
              <div v-html="content" class="popup-message"></div>
              <button class="ok-btn" @click="closePopup">OK</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PopupComponent",
  props: {
    content: {
      type: String,
      default: "Default message! Replace this dynamically.",
    },
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    closePopup() {
      this.showPopup = false;
    },
    handleOverlayClick(event) {
      // Kiểm tra nếu click vào chính lớp phủ (không phải nội dung popup)
      if (event.target.classList.contains("popup-overlay")) {
        this.closePopup();
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato");

html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1e23;
}

.wrap {
  position: relative;
  height: 100%;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  --hue: 180; /* Thay đổi hue sang 180 để sử dụng #00ffee */
  position: relative;
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-color: hsl(var(--hue), 100%, 50%); /* Thay đổi thành #00ffee */
  border: 1px solid hsl(var(--hue), 100%, 50%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;
}

.btn:hover {
  background: hsl(var(--hue), 100%, 40%); /* Điều chỉnh màu khi hover */
}

.btn-primary {
  --hue: 180; /* Đổi màu cho btn-primary */
}

.btn-ghost {
  color: hsl(var(--hue), 100%, 50%); /* Giữ màu #00ffee */
  background-color: transparent;
  border-color: hsl(var(--hue), 100%, 50%);
}

.btn-ghost:hover {
  color: white;
}

.btn-shine {
  color: white;
}

.btn-shine::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    hsla(var(--hue), 100%, 50%, 0.5),
    /* Màu #00ffee với opacity */ transparent
  );
  transform: translateX(-100%);
  transition: 0.6s;
}

.btn-shine:hover {
  background: transparent;
  box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 50%, 0.5); /* Giữ độ sáng với opacity */
}

.btn-shine:hover::before {
  transform: translateX(100%);
}

.popup-title {
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: hsl(0, 0%, 100%);
  border-bottom: 2px solid var(--main-color);
  padding-bottom: 5px;
  text-align: center;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-content {
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #39938a, #044d46); /* Sử dụng gradient */
  backdrop-filter: blur(10px); /* Giữ hiệu ứng làm mờ */
  padding: 20px;
  border-radius: 12px;
  text-align: center; /* Căn giữa nội dung */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  width: 80%;
  max-width: 500px;
  opacity: 0;
  transform: scale(0.8);
  animation: popupFadeIn 0.5s forwards cubic-bezier(0.25, 0.1, 0.25, 1);
  color: #fff; /* Đổi màu chữ */
  border: 2px solid hsla(var(--hue), 100%, 50%, 0.5); /* Thêm viền nhẹ */
}

.popup-body {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

@keyframes popupFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
  20% {
    opacity: 0.2;
    transform: translateY(-10px) scale(0.98);
  }
  40% {
    opacity: 0.5;
    transform: translateY(0) scale(1);
  }
  60% {
    opacity: 0.8;
    transform: translateY(5px) scale(1.02);
  }
  80% {
    opacity: 0.95;
    transform: translateY(-3px) scale(1.01);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.popup-message {
  margin-bottom: 15px;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  color: #fff;
}

.ok-btn {
  background: linear-gradient(135deg, #4fd1c5, #38a89d);
  color: #fff;
  border: 1px solid hsla(var(--hue), 100%, 50%, 0.8);
  border-radius: 20px;
  padding: 12px 50px;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.ok-btn:hover {
  background: linear-gradient(135deg, #38a89d, #2c8673);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  transform: translateY(-3px) scale(1.05);
}

.close-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background: linear-gradient(135deg, #f56565, #e53e3e); /* Gradient đỏ */
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.close-btn:hover {
  background: linear-gradient(135deg, #e53e3e, #c53030);
  transform: scale(1.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 500px) {
  .btn {
    padding: 0.5rem 1.5rem;
    font-size: 0.75rem; /* Giảm kích thước chữ */
  }

  .ok-btn {
    padding: 6px 30px; /* Thu nhỏ padding */
    font-size: 12px; /* Giảm kích thước chữ */
  }

  .popup-content {
    width: 90%;
    padding: 10px;
  }
}
</style>

<!-- 
Cách sử dụng:
B1: import comp này vào 1 comp cha
B2: <Description1Comp v-bind:content="popupContent" /> 
B3: vào data trong script, thêm dòng dưới đây và đổi theo ý thích:
popupContent:
        "Change your popup",
-->
