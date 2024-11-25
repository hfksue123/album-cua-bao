<template>
  <div class="concept concept-three">
    <div class="word">
      <div class="hover">
        <div></div>
        <div></div>
        <h1>H</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>O</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>M</h1>
      </div>
      <div class="hover">
        <div></div>
        <div></div>
        <h1>E</h1>
      </div>
    </div>
  </div>
  <DownButton2 />
</template>

<script>
import DownButton2 from "../DownButton/DownButton2.vue";
export default {
  components: {
    DownButton2,
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

/* three */
.concept-three {
  padding: 5em;
  background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/canyon.jpg)
    center center / cover;
}

.concept-three .word {
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: auto;
}

.concept-three .hover {
  flex: 1;
  display: grid;
  height: calc(100vh - 15em);
  grid: repeat(2, 2fr) / 100%;
  position: relative;
}

.concept-three .hover div {
  position: relative;
  z-index: 5;
}

.concept-three .hover div:nth-child(1):hover ~ h1 {
  margin-top: -10px;
}

.concept-three .hover div:nth-child(2):hover ~ h1 {
  margin-top: -50px;
}

.concept-three h1 {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 50%;
  text-align: center;
  margin-top: -30px;
  transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 0;
}

@media (max-width: 500px) {
  .concept-three {
    padding: 4em;
  }
}
</style>
