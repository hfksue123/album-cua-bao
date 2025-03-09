<template>
  <div class="loading">
    <div class="scroll-loader"></div>

    <div id="load">
      <div>G</div>
      <div>N</div>
      <div>I</div>
      <div>D</div>
      <div>A</div>
      <div>O</div>
      <div>L</div>
    </div>

    <div class="container-load">
      <p>Hello 👋 I'm</p>
      <section class="animate">
        <div class="first">
          <div>Nguyễn Gia Bảo</div>
        </div>
        <div class="second">
          <div>Web Developer</div>
        </div>
        <div class="third">
          <div>Photographer</div>
        </div>
      </section>
    </div>

    <blockquote class="info">
      my facebook <a href="https://www.facebook.com/hfksue123">BaoNguyen</a>
    </blockquote>
  </div>
</template>

<script>
export default {
  mounted() {
    this.disableScroll();
  },
  beforeUnmount() {
    this.enableScroll();
  },
  methods: {
    disableScroll() {
      document.body.style.overflow = "hidden"; // Khóa cuộn
    },
    enableScroll() {
      document.body.style.overflow = ""; // Khôi phục cuộn
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

.loading {
  font-family: "Roboto";
  background-color: #161616;
  height: 100vh;
  overflow: hidden !important;
}

p {
  text-shadow: 0 0 7px rgba(255, 255, 255, 0.3),
    0 0 3px rgba(255, 255, 255, 0.3);
}

.container-load {
  color: #e5e5e5;
  font-size: 2.26rem;
  text-transform: uppercase;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden !important;
  justify-content: center;
}

.animate {
  height: 50px;
  overflow: hidden;
  margin-left: 1rem;
}

.animate > div > div {
  padding: 0.25rem 0.75rem;
  height: 3rem;
  margin-bottom: 2.5rem;
  display: inline-block;
}

.animate div:first-child {
  animation: text-animation 4s infinite;
}

.first div {
  background-color: #20a7d8;
}

.second div {
  background-color: #cd921e;
}

.third div {
  background-color: #c10528;
}

@keyframes text-animation {
  0% {
    margin-top: 0;
  }

  10% {
    margin-top: 0;
  }

  20% {
    margin-top: -5rem;
  }

  30% {
    margin-top: -5rem;
  }

  40% {
    margin-top: -10.2rem;
  }

  60% {
    margin-top: -10.2rem;
  }

  70% {
    margin-top: -5rem;
  }

  80% {
    margin-top: -5rem;
  }

  90% {
    margin-top: 0;
  }

  100% {
    margin-top: 0;
  }
}

/* Loading text*/
#load {
  position: absolute;
  width: 600px;
  height: 36px;
  left: 50%;
  top: 40%;
  margin-left: -300px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  text-shadow: 0 0 7px rgba(0, 255, 255, 0.5), 0 0 3px rgba(0, 255, 255, 0.5);
}

#load div {
  position: absolute;
  width: 20px;
  height: 36px;
  opacity: 0;
  font-family: Helvetica, Arial, sans-serif;
  animation: move 2s linear infinite;
  -o-animation: move 2s linear infinite;
  -moz-animation: move 2s linear infinite;
  -webkit-animation: move 2s linear infinite;
  transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  color: #35c4f0;
}

#load div:nth-child(2) {
  animation-delay: 0.2s;
  -o-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
}

#load div:nth-child(3) {
  animation-delay: 0.4s;
  -o-animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
}

#load div:nth-child(4) {
  animation-delay: 0.6s;
  -o-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
}

#load div:nth-child(5) {
  animation-delay: 0.8s;
  -o-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  -webkit-animation-delay: 0.8s;
}

#load div:nth-child(6) {
  animation-delay: 1s;
  -o-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
}

#load div:nth-child(7) {
  animation-delay: 1.2s;
  -o-animation-delay: 1.2s;
  -moz-animation-delay: 1.2s;
  -webkit-animation-delay: 1.2s;
}

@keyframes move {
  0% {
    left: 0;
    opacity: 0;
  }

  35% {
    left: 41%;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }

  65% {
    left: 59%;
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }

  100% {
    left: 100%;
    -moz-transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0;
  }
}

@-moz-keyframes move {
  0% {
    left: 0;
    opacity: 0;
  }

  35% {
    left: 41%;
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }

  65% {
    left: 59%;
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }

  100% {
    left: 100%;
    -moz-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0;
  }
}

@-webkit-keyframes move {
  0% {
    left: 0;
    opacity: 0;
  }

  35% {
    left: 41%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }

  65% {
    left: 59%;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }

  100% {
    left: 100%;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0;
  }
}

@-o-keyframes move {
  0% {
    left: 0;
    opacity: 0;
  }

  35% {
    left: 41%;
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }

  65% {
    left: 59%;
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 1;
  }

  100% {
    left: 100%;
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);
    opacity: 0;
  }
}

/* Scroll_loader */
.scroll-loader {
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;
  position: absolute;
  left: 47%;
  top: 30%;
  transform: translate(-50%, -50%);
}

.scroll-loader:before,
.scroll-loader:after {
  border-radius: 50%;
  content: "";
  display: block;
  height: 20px;
  width: 20px;
}

.scroll-loader:before {
  animation: ball1 1s infinite;
  background-color: #cb2025;
  margin-bottom: 10px;
}

.scroll-loader:after {
  animation: ball2 1s infinite;
  background-color: #00a096;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg) scale(0.8);
    -moz-transform: rotate(0deg) scale(0.8);
  }

  50% {
    -webkit-transform: rotate(360deg) scale(1.2);
    -moz-transform: rotate(360deg) scale(1.2);
  }

  100% {
    -webkit-transform: rotate(720deg) scale(0.8);
    -moz-transform: rotate(720deg) scale(0.8);
  }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 #f8b334;
  }

  50% {
    box-shadow: 0 0 0 #f8b334;
    margin-bottom: 0;
    -webkit-transform: translate(15px, 15px);
    -moz-transform: translate(15px, 15px);
  }

  100% {
    box-shadow: 30px 0 0 #f8b334;
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 #97bf0d;
  }

  50% {
    box-shadow: 0 0 0 #97bf0d;
    margin-top: -20px;
    -webkit-transform: translate(15px, 15px);
    -moz-transform: translate(15px, 15px);
  }

  100% {
    box-shadow: 30px 0 0 #97bf0d;
    margin-top: 0;
  }
}

.info {
  position: absolute;
  bottom: 5px;
  right: 5px;
  margin: 0;
  padding: 0.5em;
  font-size: 0.9em;
  font-style: italic;
  font-family: serif;
  text-align: right;
  opacity: 0.5;
}

.info a {
  color: rgba(0, 255, 255, 0.2);
}

/* Media Query for screens less than 500px */
@media (max-width: 400px) {
  body {
    font-size: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  .container-load {
    font-size: 1.5rem;
  }

  .animate {
    font-size: 1.5rem;
    margin-left: 0.3rem;
  }

  .animate > div > div {
    padding: 0.2rem 0.3rem;
    height: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @keyframes text-animation {
    0% {
      transform: translateY(0.3rem);
    }

    10% {
      transform: translateY(0.3rem);
    }

    20% {
      transform: translateY(-2.8rem);
    }

    30% {
      transform: translateY(-2.8rem);
    }

    40% {
      transform: translateY(-6.2rem);
    }

    60% {
      transform: translateY(-6.2rem);
    }

    70% {
      transform: translateY(-2.8rem);
    }

    80% {
      transform: translateY(-2.8rem);
    }

    90% {
      transform: translateY(0.3rem);
    }

    100% {
      transform: translateY(0.3rem);
    }
  }

  /* Tweak the position for the scroll loader */
  .scroll-loader {
    left: 43%;
    top: 29%;
  }
  /* Loading... */
  #load {
    max-width: 300px;
    height: 35px;
    top: 41%;
    margin-left: -180px;
  }

  #load div {
    font-size: 1rem;
  }

  .first div,
  .second div,
  .third div {
    font-size: 1.2rem;
  }
}
</style>
