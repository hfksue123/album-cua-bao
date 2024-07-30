<template>
  <div class="main-content">
    <div class="concept concept-one">
      <div class="hover hover-1"></div>
      <div class="hover hover-2"></div>
      <div class="hover hover-3"></div>
      <div class="hover hover-4"></div>
      <div class="hover hover-5"></div>
      <div class="hover hover-6"></div>
      <div class="hover hover-7"></div>
      <div class="hover hover-8"></div>
      <div class="hover hover-9"></div>
      <h1>GIGA</h1>
    </div>
    <DownButton1 />
  </div>
  <router-view />
</template>

<script>
import DownButton1 from "../DownButton/DownButton1.vue";
export default {
  name: "MainContent",
  components: {
    DownButton1,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");

body {
  font-family: "Comfortaa", sans-serif;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

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
  background: radial-gradient(circle, rgba(170, 170, 170, 0.2), transparent);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.concept:hover:before {
  opacity: 0.5;
}

/* one */
.concept-one {
  display: grid;
  grid: repeat(3, 1fr) / repeat(3, 1fr);
  background-image: url("https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto,e_sharpen/v1722012142/IMG_1961_yy4ezr.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.concept-one h1 {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -30px;
  transition: 0.5s ease;
  z-index: 0;
  letter-spacing: 30px;
}
.concept-one .hover {
  z-index: 1;
}

.concept-one .hover-1:hover ~ h1 {
  left: 50px;
  margin-top: -20px;
}

.concept-one .hover-2:hover ~ h1 {
  margin-top: -20px;
}

.concept-one .hover-3:hover ~ h1 {
  right: 50px;
  margin-top: -20px;
}

.concept-one .hover-4:hover ~ h1 {
  left: 50px;
}

.concept-one .hover-6:hover ~ h1 {
  right: 50px;
}

.concept-one .hover-7:hover ~ h1 {
  left: 50px;
  margin-top: -70px;
}

.concept-one .hover-8:hover ~ h1 {
  margin-top: -70px;
}

.concept-one .hover-9:hover ~ h1 {
  right: 50px;
  margin-top: -70px;
}
@media (min-width: 1200px) {
  .concept-one h1 {
    left: 0%;
  }
}
@media (max-width: 992px) {
  .concept-one h1 {
    left: 0%;
  }
}
@media (max-width: 768px) {
  .concept-one h1 {
    left: 0%;
  }
}
@media (max-width: 576px) {
  .concept-one {
    background-image: url("../../assets/img/home/3-576px.jpg");
  }
  .concept-one h1 {
    font-size: 50px;
    letter-spacing: 20px;
    left: 0%;
  }
}
</style>
