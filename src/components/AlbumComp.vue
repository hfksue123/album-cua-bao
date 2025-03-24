<template>
  <div class="container">
    <div id="slide" ref="slide">
      <div
        class="item"
        :style="{
          backgroundImage: `url(${require('@/assets/img/home/1.jpg')})`,
        }"
      >
        <div class="content">
          <div class="header">ALBUM</div>
          <div class="name">HOME</div>
          <div class="topic">by ME</div>
          <div class="des">
            Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình
            tại Sài Gòn.
          </div>
          <router-link id="btnSeeAlbum" to="/home"
            ><span>Go to Album</span><em></em
          ></router-link>
        </div>
      </div>
      <div
        class="item"
        :style="{
          backgroundImage: `url(https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602651/FE7A0989_mpzdw6.jpg)`,
        }"
      >
        <div class="content">
          <div class="header">ALBUM</div>
          <div class="name">SAIGON ZOO</div>
          <div class="topic">by ME</div>
          <div class="des">
            Những khoảnh khắc gần gũi, những ánh mắt hồn nhiên và những kỷ niệm
            khó quên cùng các bé! 🐾💛
          </div>
          <router-link id="btnSeeAlbum" to="/zoo"
            ><span>Go to Album</span><em></em
          ></router-link>
        </div>
      </div>
      <div
        class="item"
        :style="{
          backgroundImage: `url(${require('@/assets/img/home/3.jpg')})`,
        }"
      >
        <div class="content">
          <div class="header">ALBUM</div>
          <div class="name">GIGAMALL</div>
          <div class="topic">by ME</div>
          <div class="des">
            Một kỉ niệm cùng những người bạn dưới quê tại Gigamall.
          </div>
          <router-link id="btnSeeAlbum" to="/giga"
            ><span>Go to Album</span><em></em
          ></router-link>
        </div>
      </div>
      <div
        class="item"
        :style="{
          backgroundImage: `url(${require('@/assets/img/home/4.jpg')})`,
        }"
      >
        <div class="content">
          <div class="header">ALBUM</div>
          <div class="name">LÀNG ĐẠI HỌC</div>
          <div class="topic">by ME</div>
          <div class="des">
            Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình
            tại Sài Gòn.
          </div>
          <router-link id="btnSeeAlbum" to="/ktx"
            ><span>Go to Album</span><em></em
          ></router-link>
        </div>
      </div>
      <div
        class="item"
        :style="{
          backgroundImage: `url(https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598201/IMG_1824_nllsf7.jpg)`,
        }"
      >
        <div class="content">
          <div class="header">ALBUM</div>
          <div class="name">SÀI GÒN</div>
          <div class="topic">by ME</div>
          <div class="des">
            Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình
            tại Sài Gòn.
          </div>
          <router-link id="btnSeeAlbum" to="/sg"
            ><span>Go to Album</span><em></em
          ></router-link>
        </div>
      </div>
      <div
        class="item"
        :style="{
          backgroundImage: `url(${require('@/assets/img/home/6.jpg')})`,
        }"
      >
        <div class="content">
          <div class="header">ALBUM</div>
          <div class="name">Coming Soon</div>
          <div class="topic">by ME</div>
          <div class="des">
            Album của mình đang trong quá trình hoàn thiện, mong bạn đợi thêm
            chút thời gian.
          </div>
          <router-link id="btnSeeAlbum" to="/404"
            ><span>Go to Album</span><em></em
          ></router-link>
        </div>
      </div>
      <div
        class="item"
        :style="{
          backgroundImage: `url(${require('@/assets/img/home/7.png')})`,
        }"
      >
        <div class="content">
          <div class="header">ALBUM</div>
          <div class="name">BÀ ĐEN</div>
          <div class="topic">by ME</div>
          <div class="des">
            Một lần thăm Tây Ninh cùng team phượt và chinh phục núi Bà Đen.
          </div>
          <router-link id="btnSeeAlbum" to="/baden"
            ><span>Go to Album</span><em></em
          ></router-link>
        </div>
      </div>
    </div>

    <div class="buttons">
      <button id="prev" @click="prev">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button id="next" @click="next">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.slide = this.$refs.slide;
  },
  data() {
    return {
      slide: null,
    };
  },
  methods: {
    next() {
      if (this.slide) {
        const lists = this.slide.children;
        this.slide.appendChild(lists[0]);
      }
    },
    prev() {
      if (this.slide) {
        const lists = this.slide.children;
        this.slide.prepend(lists[lists.length - 1]);
      }
    },
  },
};
</script>

<style scoped src="../css/Album.css"></style>
