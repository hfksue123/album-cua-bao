<template id="profile">
  <section class="home" id="home">
    <div class="home-img">
      <div class="main_img">
        <img src="../assets/img/header/IMG_1961.png" alt="" />
        <div class="animation"></div>
      </div>
    </div>
    <div class="home-contain">
      <h1>Hi, <span id="bao">Bảo đây</span>🩵</h1>
      <h3 class="typing-text">
        <div id="element"></div>
      </h3>
      <p>
        Trang web được tối ưu trên thiết bị desktop và mobile vì vậy khuyến
        khích mọi người sử dụng những thiết bị này để được trải nghiệm tốt nhất
        nhé. Có thể đi tiếp để sang gallery ảnh hoặc đọc thêm hướng dẫn ở 2 nút
        bên dưới.
      </p>

      <div class="social-icon-profile">
        <a href="#" title="facebook"
          ><font-awesome-icon :icon="['fab', 'facebook-f']"
        /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'threads']" /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a href="#"><font-awesome-icon :icon="['far', 'heart']" /></a>
      </div>

      <router-link to="/feedback" class="btn-profile">Feedback</router-link>
      <router-link to="/*" class="btn-profile">To Gallery</router-link>
    </div>
  </section>
</template>

<style scoped>
#profile {
  background-color: #ff3838;
}
section {
  min-height: 100vh;
  padding: 0 8%;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}

.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  background-color: var(--bg-color);
  padding: 80px 5%;
}

.home .home-contain h1 {
  font-size: 80px;
  font-weight: 700;
  line-height: 1.2;
}

#bao {
  color: var(--main-color);
}

.home-contain {
  width: 50%;
}

.home-img {
  width: 45%;
  display: flex;
  justify-content: center;
}

.home-contain h3 {
  font-size: 40px;
  margin-bottom: 1rem;
  font-weight: 700;
  overflow: hidden;
}

.home-img .main_img {
  width: 65vh;
  height: 65vh;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.home-img .animation {
  position: absolute;
  height: 101%;
  width: 101%;
  top: -0.5%;
  left: -0.5%;
  background-image: conic-gradient(
    from 90deg,
    var(--main-color) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  filter: drop-shadow(0 0 12px rgba(0, 255, 238, 0.4));
  border-radius: 50%;
  z-index: -1;
  animation: rotate_profile 8s linear infinite;
}

@keyframes rotate_profile {
  0% {
    rotate: 360deg;
  }

  100% {
    rotate: 0deg;
  }
}

.home-img img {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  transition: 0.3s;
}

.home-img img:hover {
  transform: scale(1.01);
  box-shadow: 0 0 50px rgba(0, 255, 238, 0.6);
}

.home-contain p {
  font-size: 18px;
  font-weight: 400;
  text-align: justify;
}

.social-icon-profile a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: transparent;
  border: 0.2rem solid var(--main-color);
  font-size: 25px;
  border-radius: 50%;
  color: var(--main-color);
  margin: 15px 10px 15px 0;
  transition: 0.3s ease;
}

.social-icon-profile a:hover {
  color: #fff;
  transform: scale(1.3) translateY(-5px);
  background: var(--main-color);
  box-shadow: 0 0 25px var(--main-color);
}

.btn-profile {
  display: inline-block;
  padding: 1rem 2.8rem;
  background: var(--main-color);
  border-radius: 4rem;
  font-size: 1.6rem;
  color: var(--bg-color);
  border: 2px solid var(--main-color);
  letter-spacing: 0.1rem;
  font-weight: 600;
  transition: 0.3s ease;
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn-profile:hover {
  transform: scale(1.03);
  background-color: var(--main-color);
  color: var(--text-color);
  box-shadow: 0 0 25px var(--main-color);
}

.typing-text {
  font-size: 34px;
  font-weight: 600;
  min-width: 280px;
}

.typing-text #element {
  display: inline-block;
  position: relative;
}

.highlight {
  color: #00ffee;
}

.highlight_red {
  color: #ff3838;
}

.highlight_red_icon {
  color: red;
  text-shadow: 0 0 5px red;
}

@media (max-width: 1200px) {
  .home {
    flex-direction: column;
    padding-top: 100px;
  }

  .home-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
  }

  .home-contain {
    width: 100%;
  }
}

@media (max-width: 1000px) {
  #menu-icon {
    display: block;
  }
}

@media (max-width: 400px) {
  .home-img .main_img {
    width: 45vh;
    height: 45vh;
  }

  .home .home-contain h1 {
    font-size: 40px;
    line-height: 1.5;
  }

  .home-contain h3 {
    font-size: 20px;
    margin-bottom: 5px;
  }
  .home-contain p {
    font-size: 16px;
    font-weight: 400;
  }
  .social-icon-profile a {
    width: 40px;
    height: 40px;
    font-size: 20px;
    margin: 10px 8px 10px 0;
  }
  .btn-profile {
    padding: 10px 20px;
    border-radius: 4rem;
    font-size: 15px;
    margin-top: 5px;
  }
}
.typing-text {
  font-size: 24px;
}
@media (max-width: 300px) {
  .home-img .main_img {
    width: 35vh;
    height: 35vh;
  }
}
</style>

<script>
import Typed from "typed.js";

export default {
  mounted() {
    const options = {
      strings: [
        "Hello, I'm a <span class='highlight'>Web Developer !</span>",
        "I'm a <span class='highlight'>Photographer</span> too!",
        "I'm a <span class='highlight'>Designer</span> as well!",
        "And.......",
        "I'm still <span class='highlight_red'>SINGLE</span> ",
      ],
      typeSpeed: 10,
      backSpeed: 20,
      startDelay: 1000,
      backDelay: 500,
      smartBackspace: true,
      shuffle: false,
      fadeOut: false,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
      loop: true,
    };

    new Typed("#element", options);
  },
};
</script>
