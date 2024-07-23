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
          <div class="name">LÀNG ĐẠI HỌC</div>
          <div class="topic">by ME</div>
          <div class="des">
            Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình
            tại Sài Gòn.
          </div>
          <router-link id="btnSeeAlbum" to="/album"
            ><span>Go to Album</span><em></em
          ></router-link>
        </div>
      </div>
      <div
        class="item"
        :style="{
          backgroundImage: `url(${require('@/assets/img/home/2.jpg')})`,
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
          <a id="btnSeeAlbum"><span>Go to Album</span><em></em></a>
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
          <div class="name">LÀNG ĐẠI HỌC</div>
          <div class="topic">by ME</div>
          <div class="des">
            Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình
            tại Sài Gòn.
          </div>
          <a id="btnSeeAlbum"><span>Go to Album</span><em></em></a>
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
          <a id="btnSeeAlbum"><span>Go to Album</span><em></em></a>
        </div>
      </div>
      <div
        class="item"
        :style="{
          backgroundImage: `url(${require('@/assets/img/home/5.jpg')})`,
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
          <a id="btnSeeAlbum"><span>Go to Album</span><em></em></a>
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
          <div class="name">LÀNG ĐẠI HỌC</div>
          <div class="topic">by ME</div>
          <div class="des">
            Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình
            tại Sài Gòn.
          </div>
          <a id="btnSeeAlbum"><span>Go to Album</span><em></em></a>
        </div>
      </div>
      <div
        class="item"
        :style="{
          backgroundImage: `url(${require('@/assets/img/home/7.jpg')})`,
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
          <a id="btnSeeAlbum"><span>Go to Album</span><em></em></a>
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
