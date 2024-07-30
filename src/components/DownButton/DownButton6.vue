<template>
  <section id="scrolldown6" class="demo">
    <a href="#" class="scroll-link"><span></span>Scroll</a>
  </section>
</template>

<script>
export default {
  mounted() {
    document
      .querySelector(".scroll-link")
      .addEventListener("click", this.scroll);
  },
  beforeUnmount() {
    document
      .querySelector(".scroll-link")
      .removeEventListener("click", this.scroll);
  },
  methods: {
    scroll(event) {
      event.preventDefault();
      const scrollAmount = window.innerHeight;
      window.scrollBy({ top: scrollAmount, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.demo a {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: inline-block;
  color: #fff;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}
.demo a:hover {
  opacity: 0.5;
}
#scrolldown6 a {
  padding-top: 60px;
}
#scrolldown6 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #fff;
  border-radius: 50px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1); /* Add background color */
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1); /* Add shadow for glow effect */
}
#scrolldown6 a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: "";
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
