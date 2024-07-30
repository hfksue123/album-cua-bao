<template>
  <div class="concept concept-two">
    <div class="hover">
      <h1>L</h1>
    </div>
    <div class="hover">
      <h1>A</h1>
    </div>
    <div class="hover">
      <h1>N</h1>
    </div>
    <div class="hover">
      <h1>G</h1>
    </div>
    <div class="hover">
      <h1>Đ</h1>
    </div>
    <div class="hover">
      <h1>H</h1>
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

/* two */
.concept-two {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 5em 15em;
  top: 0;
  transform: translate(0px, 0px);
  background-image: url("https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto/v1722277966/FE7A0590_sfjnlj.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
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

@media (max-width: 576px) {
  .concept-two {
    padding: 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-image: url("../../assets/img/home/4-576px.jpg");
  }

  .concept-two .hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0.5em 0;
  }

  .concept-two h1 {
    font-size: 40px;
    -webkit-text-stroke: 1px #fff;
  }

  .concept-two .hover:hover h1 {
    transform: scale(1.2);
  }
}
</style>
