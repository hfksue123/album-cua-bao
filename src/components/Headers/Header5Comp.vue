<template>
  <div class="concept concept-six">
    <h1 class="word">
      <span class="char">O</span>
      <span class="char">C</span>
      <span class="char">E</span>
      <span class="char">A</span>
      <span class="char">N</span>
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
.concept-six {
  display: flex;
  align-items: center;
  background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/beach.jpg)
    top right / cover;
}

.concept-six .word {
  width: 550px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
}

.concept-six .word:hover .char:nth-child(1) {
  margin-top: -30px;
  transform: rotate(-20deg);
}

.concept-six .word:hover .char:nth-child(2) {
  margin: -40px 0 0 10px;
  transform: rotate(5deg);
}

.concept-six .word:hover .char:nth-child(3) {
  margin: 15px 0 0 10px;
  transform: rotate(12deg);
}

.concept-six .word:hover .char:nth-child(4) {
  margin: -25px 0 0;
  transform: rotate(5deg);
}

.concept-six .word:hover .char:nth-child(5) {
  margin: -40px 5px 0;
  transform: rotate(-10deg);
}

.concept-six .char {
  flex: 1;
  transition: 0.3s ease-in-out;
  position: relative;
}
</style>
