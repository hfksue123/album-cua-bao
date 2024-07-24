<template>
  <section id="scrolldown1" class="demo">
    <a href="#" class="scroll-link"><span></span>Scroll</a>
  </section>
</template>

<style scoped>
.demo .scroll-link {
  position: absolute;
  bottom: 20px;
  left: 47.5%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #ffffff;
  font: normal 400 20px/1 "Josefin Sans", sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}
.demo .scroll-link:hover {
  opacity: 0.5;
}

#scrolldown1 .scroll-link {
  padding-top: 60px;
}
#scrolldown1 .scroll-link span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 46px;
  height: 46px;
  margin-left: -23px;
  border: 1px solid #ffffff;
  border-radius: 100%;
  box-sizing: border-box;
}
#scrolldown1 .scroll-link span::after {
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width: 16px;
  height: 16px;
  margin: -12px 0 0 -8px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
}
#scrolldown1 .scroll-link span::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  content: "";
  width: 44px;
  height: 44px;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
  border-radius: 100%;
  opacity: 0;
  -webkit-animation: sdb03 2s infinite;
  animation: sdb03 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb03 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb03 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media (min-width: 1200px) {
}
@media (max-width: 992px) {
}
@media (max-width: 768px) {
  #scrolldown1 .scroll-link {
    left: 45%;
  }
}
@media (max-width: 576px) {
  #scrolldown1 .scroll-link {
    left: 42%;
  }
}
</style>

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
