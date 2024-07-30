<template>
  <section id="scrolldown3" class="demo">
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
#scrolldown3 a {
  padding-top: 70px;
}
#scrolldown3 a span {
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
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
</style>
