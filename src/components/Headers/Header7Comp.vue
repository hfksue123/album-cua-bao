<template>
  <div class="concept concept-eight">
    <h1 class="word">
      <div class="char" data-content="F">F</div>
      <div class="char" data-content="A">A</div>
      <div class="char" data-content="L">L</div>
      <div class="char" data-content="L">L</div>
      <div class="char" data-content="S">S</div>
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
.concept-eight {
  background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/falls.jpg)
    center center / cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.concept-eight .word {
  display: flex;
  align-items: center;
  justify-items: center;
  width: 450px;
  height: 80%;
}

.concept-eight .word:hover .char:before {
  transition: 0.6s ease;
  color: rgba(255, 255, 255, 0.8);
  animation: falls 1s ease forwards;
}

.concept-eight .word:hover .char:nth-child(1):before {
  animation: falls 0.9s ease 0.2s forwards;
}

.concept-eight .word:hover .char:nth-child(2n + 3):before {
  animation: falls 1s ease 0.3s forwards;
}

.concept-eight .char {
  flex: 1;
  position: relative;
}

.concept-eight .char:before {
  content: attr(data-content);
  position: absolute;
  top: 0;
  color: transparent;
  text-shadow: none;
}

@keyframes falls {
  0% {
    opacity: 0;
    top: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 100px;
  }
}
</style>
