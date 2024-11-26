<template>
  <h1 class="intro">Đợi B tí nha</h1>

  <div class="box" id="box">
    <div class="cat">
      <div class="cat__body"></div>
      <div class="cat__body"></div>
      <div class="cat__tail"></div>
      <div class="cat__head"></div>
    </div>
  </div>

  <blockquote class="info">
    inspired from <a href="https://dribbble.com/domaso">domaso</a>'s dribbble:
    <a href="https://dribbble.com/shots/3197970-Loading-cat">Cat</a>
    <br />
    my facebook <a href="https://www.facebook.com/tenyoku8478">Bao</a>
  </blockquote>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Coiny&family=VT323&display=swap");

.cat {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 20em;
  overflow: hidden;
  background-color: #e6dcdc;
}

.cat::before {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.cat:hover > * {
  animation-play-state: paused;
}

.cat:active > * {
  animation-play-state: running;
}

.cat__head {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
}

.cat__head::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background-size: 200%;
  background-repeat: no-repeat;
  background-image: url("https://images.weserv.nl/?url=i.imgur.com/M1raXX3.png&il");
  background-position: 100% 0%;
  transform-origin: 0% 100%;
  transform: rotate(90deg);
}

.cat__tail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
  animation-delay: 0.2s;
}

.cat__tail::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  background-size: 200%;
  background-repeat: no-repeat;
  background-image: url("https://images.weserv.nl/?url=i.imgur.com/M1raXX3.png&il");
  background-position: 0% 100%;
  transform-origin: 100% 0%;
  transform: rotate(-30deg);
}

.cat__body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
  animation-delay: 0.1s;
}

.cat__body:nth-of-type(2) {
  animation-delay: 0.2s;
}

.cat__body::before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  background-size: 200%;
  background-repeat: no-repeat;
  background-image: url("https://images.weserv.nl/?url=i.imgur.com/M1raXX3.png&il");
  background-position: 100% 100%;
  transform-origin: 0% 0%;
}

@keyframes rotating {
  from {
    transform: rotate(720deg);
  }

  to {
    transform: none;
  }
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin: 0;
  line-height: 1.4;
  position: relative;
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6dcdc;
}

.intro {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-family: "Coiny", system-ui;
  padding-top: 2em;
  font-size: calc(1rem + 2vmin);
  text-align: center;
  color: #353b48;
  z-index: 100;
}

.intro small {
  display: block;
  opacity: 0.5;
  font-style: italic;
  text-transform: none;
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
  color: inherit;
}
</style>
