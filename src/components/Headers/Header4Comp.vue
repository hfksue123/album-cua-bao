<template>
  <div class="concept concept-five">
    <h1 class="word">
      <span class="char">M</span>
      <span class="char">O</span>
      <span class="char">U</span>
      <span class="char">N</span>
      <span class="char">T</span>
      <span class="char">A</span>
      <span class="char">I</span>
      <span class="char">N</span>
      <span class="char">S</span>
    </h1>
  </div>
</template>

<script>
export default {};
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
.concept-five {
  background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/mountains.jpg)
    center center / cover;
  display: flex;
  align-items: center;
}

.concept-five .word {
  width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
}

.concept-five .word:hover .char:nth-child(even) {
  top: 20px;
}

.concept-five .word:hover .char:nth-child(odd) {
  top: -20px;
}

.concept-five .char {
  flex: 1;
  position: relative;
  display: inline-block;
  top: 0;
  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
