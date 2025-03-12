<template>
  <div class="gradient-container">
    <div class="content">
      <div class="btn-group my-5">
        <a
          href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip"
          class="btn btn-outline-light"
          aria-current="page"
        >
        </a>
        <a
          href="https://codepen.io/P1N2O/full/pyBNzX"
          class="btn btn-outline-light"
        >
        </a>
      </div>
      <a href="https://manuel.pinto.dev" class="text-decoration-none"> </a>
    </div>
  </div>
</template>

<style scoped>
.gradient-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    -45deg,
    #eb6840,
    #ed314e,
    #ffc107,
    #23cb4a,
    #23a6d5,
    #23d5ab
  );
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  z-index: -1;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
