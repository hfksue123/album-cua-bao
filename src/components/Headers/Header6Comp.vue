<template>
  <div class="concept concept-seven">
    <h1>fries</h1>
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
.concept-seven {
  background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/fries.jpg)
    top center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.concept-seven h1 {
  letter-spacing: 35px;
  position: relative;
}

.concept-seven h1:before {
  content: "fries";
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  max-width: 400px;
  color: transparent;
  letter-spacing: 10px;
  text-shadow: none;
}

.concept-seven:hover h1:before {
  transition: 0.6s ease;
  color: rgba(255, 255, 255, 0.8);
  animation: jump-out 0.6s ease forwards;
}

@keyframes jump-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2);
    color: transparent;
  }
}
</style>
