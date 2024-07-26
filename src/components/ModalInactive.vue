<template>
  <div v-if="isVisible" class="modal">
    <div
      class="modal-content"
      :class="{ 'modal-enter': isVisible, 'modal-leave': !isVisible }"
    >
      <button class="close-btn" @click="hide">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </button>
      <img
        src="../assets/img/icon/cat_modal.gif"
        alt="Center Image"
        class="center-image"
      />
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <button @click="handleImHereClick" class="im-here-btn">I'm here</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InactivityModal",
  props: {
    title: {
      type: String,
      default: "Bạn còn ở đó không ?",
    },
    message: {
      type: String,
      default: "Mình thấy bạn đã không hoạt động trong một khoảng thời gian.",
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    },
    handleImHereClick() {
      this.hide();
      this.$emit("active");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Coiny&family=Exo+2:ital,wght@0,100..900;1,100..900&family=VT323&family=Varela+Round&display=swap");
@keyframes slideInOut {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-content h1,
.modal-content p {
  font-family: "Varela Round", sans-serif;
}
.modal-content p {
  font-size: 15px;
  padding-top: 5px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background: #fcfefc;
  backdrop-filter: blur(15px);
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  position: relative;
  max-width: 500px;
  width: 100%;
  transform: translateY(100%);
  opacity: 0;
  transition: all s ease;
  animation-name: slideInOut;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.modal-enter {
  transform: translateY(0);
  opacity: 1;
}

.modal-leave {
  transform: translateY(100%);
  opacity: 0;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.close-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
  color: #8b8b8b;
  filter: brightness(80%);
  transition: background-color 0.3s ease, color 0.3s ease, filter 0.3s ease;
}
.center-image {
  width: 200px;
  height: 200px;
}

.im-here-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background: #3498db;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
  font-size: 18px;
}

.im-here-btn:hover {
  background: #2980b9;
}
@media (max-width: 576px) {
  .modal-content {
    max-width: 330px;
  }
  .modal-content h1 {
    font-size: 25px;
  }
}
</style>
