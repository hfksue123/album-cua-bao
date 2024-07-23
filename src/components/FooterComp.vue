<template>
  <footer class="footer-container" id="footer">
    <ul id="link">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Me</a></li>
      <li><a href="#">See More</a></li>
    </ul>
    <hr id="line" />
    <p id="content">
      Website này được tạo ra bằng html, css, js thuần bởi
      <a href="#" id="author">Bao Nguyen</a>, mục đích chính của trang web này
      để mình chia sẻ những bức ảnh của mình chụp lên đây để cho mọi người cùng
      thưởng thức những bức ảnh mình đã chụp (có vài bộ chưa xuất hiện trên fb
      cá nhân) và cũng là nơi để mình lưu giữ những kỷ niệm. Cảm ơn mọi người đã
      dành thời gian ghé thăm ^^
    </p>

    <ul id="social-icon">
      <li>
        <a href="#"
          ><font-awesome-icon :icon="['fab', 'instagram']" class="icon"
        /></a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon :icon="['fab', 'facebook']" class="icon"
        /></a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon :icon="['fab', 'youtube']" class="icon"
        /></a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon :icon="['fas', 'heart']" class="icon"
        /></a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon :icon="['fab', 'threads']" class="icon"
        /></a>
      </li>
    </ul>

    <p id="copyright">&#64;hfksue123 &copy; 2024 All Rights Reserved</p>
  </footer>
  <ScrollUpComp />
</template>

<script>
import ScrollUpComp from "./ScrollUpComp.vue";
export default {
  name: "FooterComponent",
  components: {
    ScrollUpComp,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300");

html,
body {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

#footer {
  background: #110916;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

#link {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
}

#link li {
  display: inline;
  margin: 0 10px;
}

#link a {
  color: #fff;
  transition: color 0.3s ease;
}

#link a:hover {
  color: #4a69bd;
}

#line {
  margin: 20px auto;
  width: 80%;
  border: 1px solid #fff;
}

#content {
  margin: 20px 50px 10px 50px;
  font-family: "Roboto Condensed", sans-serif;
  line-height: 1.6;
}

#author {
  color: #8408ff;
  transition: color 0.3s ease;
  font-style: italic;
}

#author:hover {
  color: #fff;
}

#social-icon {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

#social-icon li {
  display: inline-block;
}

#social-icon li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: #110916;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

#social-icon li a:hover {
  background-color: #4a69bd;
  color: #fff;
  transform: scale(1.1);
}

#social-icon li:nth-child(1) a {
  background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
}

#social-icon li:nth-child(2) a {
  background: #3b5999;
}

#social-icon li:nth-child(3) a {
  background: #ff0000;
}

#social-icon li:nth-child(4) a {
  background: #e2a200;
}

#social-icon li:nth-child(5) a {
  background: #fff;
}

#copyright {
  font-family: "Roboto Condensed", sans-serif;
  margin-top: 20px;
  font-size: 14px;
}
</style>
