<template>
  <section id="scrolldown5" class="demo">
    <a href="#" class="scroll-link"
      ><span></span><span></span><span></span>Scroll</a
    >
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
#scrolldown5 a {
  padding-top: 80px;
}
#scrolldown5 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb07 2s infinite;
  animation: sdb07 2s infinite;
  opacity: 0;
  box-sizing: border-box;
}
#scrolldown5 a span:nth-of-type(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
#scrolldown5 a span:nth-of-type(2) {
  top: 16px;
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
}
#scrolldown5 a span:nth-of-type(3) {
  top: 32px;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
@-webkit-keyframes sdb07 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb07 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
