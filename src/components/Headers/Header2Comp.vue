<template>
  <div class="concept concept-two">
    <div class="hover">
      <h1>F</h1>
    </div>
    <div class="hover">
      <h1>O</h1>
    </div>
    <div class="hover">
      <h1>R</h1>
    </div>
    <div class="hover">
      <h1>E</h1>
    </div>
    <div class="hover">
      <h1>S</h1>
    </div>
    <div class="hover">
      <h1>T</h1>
    </div>
  </div>
  <DownButton6 />
</template>

<script>
import DownButton6 from "../DownButton/DownButton6.vue";
export default {
  components: {
    DownButton6,
  },
};
</script>

<style scoped>
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
  background: radial-gradient(circle, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}

.concept:hover:before {
  opacity: 0.5;
}

/* two */
.concept-two {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 5em 15em;
  background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/forest.jpg)
    center center / cover;
}

.concept-two .hover {
  position: relative;
  display: grid;
  place-items: center;
}

.concept-two h1 {
  color: transparent;
  text-align: center;
  -webkit-text-stroke: 2px #fff;
  text-shadow: none;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.concept-two .hover:hover h1 {
  transform: scale(1.5);
  color: #fff;
  -webkit-text-stroke: 2px transparent;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
