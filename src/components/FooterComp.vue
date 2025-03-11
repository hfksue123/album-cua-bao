<template>
  <footer class="custom-footer">
    <div class="container">
      <div class="row">
        <!-- Logo Section -->
        <div class="footer-column">
          <div class="footer-logo">
            <h2>HFKSUE123</h2>
          </div>
          <p class="footer-description">
            Website này được tạo bởi
            <a href="#" id="author">Bảo Nguyễn</a> để chia sẻ những bức ảnh mình
            chụp, bao gồm một số bộ chưa xuất hiện trên Facebook. Đây cũng là
            nơi lưu giữ kỷ niệm. Cảm ơn mọi người đã ghé thăm! 😊
          </p>
        </div>

        <!-- Latest Photos Section -->
        <div class="footer-column">
          <h3 class="footer-title">Latest Albums</h3>
          <div class="footer-photos">
            <div
              class="photo"
              style="
                background-image: url('https://images.unsplash.com/photo-1633635146842-12d386e64058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400');
              "
            ></div>
            <div
              class="photo"
              style="
                background-image: url('https://images.unsplash.com/photo-1568444438385-ece31a33ce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400');
              "
            ></div>
            <div
              class="photo"
              style="
                background-image: url('https://images.unsplash.com/photo-1633515257379-5fda985bd57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400');
              "
            ></div>
            <div
              class="photo"
              style="
                background-image: url('https://images.unsplash.com/photo-1633209931146-260ce0d16e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400');
              "
            ></div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="footer-column">
          <h3 class="footer-title">Contact me</h3>
          <ul class="footer-contacts">
            <li>
              Email:
              <a href="mailto:baosum01@gmail.com">baosum01@gmail.com</a>
            </li>
            <li>
              FB: <a href="https://www.facebook.com/hfksue123">Nguyen Bao</a>
            </li>
          </ul>
          <VisitorCounter />
          <p class="copyright">
            Copyright © 2024 hfksue123. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import VisitorCounter from "./VisitorCounter.vue";

export default {
  name: "CustomFooter",
  components: { VisitorCounter },
};
</script>

<style scoped>
.custom-footer {
  background-color: #1c1c1c;
  color: #fff;
  padding: 20px 20px;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.row {
  display: flex;
  width: 100%;
  justify-content: center; /* Căn giữa nội dung */
  gap: 100px; /* Tăng khoảng cách giữa các cột */
}

.footer-column {
  flex: 1;
  min-width: 280px; /* Giữ độ rộng tối thiểu để không bị thu nhỏ quá mức */
  max-width: 33%; /* Giới hạn chiều rộng */
  text-align: left;
}

.footer-logo h2 {
  font-family: "Arial Black", sans-serif;
  font-size: 25px;
  margin-bottom: 10px;
}

.footer-description {
  font-size: 15px;
  line-height: 1.4;
  color: #ccc;
  word-spacing: 1px;
  text-align: justify;
}

.footer-description a {
  color: var(--main-color);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-description a:hover {
  color: #fff;
}

.footer-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  border-left: 4px solid var(--main-color);
  padding-left: 10px;
}

.footer-photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 10px;
}

.footer-photos img {
  width: 100%;
  border-radius: 5px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.footer-photos img:hover {
  transform: scale(1.05);
}

.photo {
  width: 100%;
  padding-top: 100%; /* Đảm bảo khung vuông */
  background-size: cover; /* Ảnh lấp đầy khung */
  background-position: center; /* Hiển thị trung tâm */
  transition: transform 0.3s ease-in-out;
}

.photo:hover {
  transform: scale(1.1); /* Phóng to ảnh khi hover */
}
.footer-contacts {
  list-style: none;
  padding: 0;
}

.footer-contacts li {
  margin-bottom: 10px;
  font-size: 14px;
}

.footer-contacts a {
  color: var(--main-color);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-contacts a:hover {
  color: #fff;
}

.copyright {
  font-size: 12px;
  color: #777;
  margin-top: 23px;
}

@media (max-width: 1024px) {
  .row {
    justify-content: center;
    gap: 30px;
  }

  .footer-column {
    max-width: 45%; /* Hai cột mỗi hàng */
    text-align: center;
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .footer-column {
    max-width: 100%;
    text-align: center;
  }

  .footer-title {
    text-align: left;
  }

  .footer-photos {
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  }
}
</style>
