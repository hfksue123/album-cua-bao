<template>
  <button @click="scrollToTop" v-show="showScrollToTop" class="scroll-to-top">
    <font-awesome-icon :icon="['fas', 'chevron-up']" class="icon" />
  </button>
</template>

<script>
export default {
  name: "ScrollUpComp",
  data() {
    return {
      showScrollToTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.showScrollToTop = window.scrollY > 100;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.scroll-to-top {
  position: fixed;
  bottom: 15px;
  right: 15px;
  background: #110916;
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.5s ease;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideIn 0.8s ease-out, shadowEcho 1.5s infinite;
}

.icon {
  font-size: 20px;
  transition: transform 0.5s ease;
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes shadowEcho {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(121, 121, 121, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(113, 113, 113, 0.4);
  }
}

.scroll-to-top:hover {
  background-color: #4a69bd;
}

.scroll-to-top:hover .icon {
  transform: rotate(360deg);
}

@media (max-width: 500px) {
  .icon {
    font-size: 15px;
  }
  .scroll-to-top {
    padding: 14px;
  }
}
</style>
