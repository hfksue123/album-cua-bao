<template>
  <div class="container">
    <div id="slide" ref="slide">
      <div
        v-for="item in items"
        :key="item.id"
        class="item"
        :style="{ backgroundImage: `url(${item.cdnUrl})` }"
      >
        <div class="content">
          <div class="header">{{ item.header }}</div>
          <div class="name">{{ item.name }}</div>
          <div class="topic">{{ item.topic }}</div>
          <div class="des">{{ item.description }}</div>
          <router-link id="btnSeeAlbum" :to="item.link"
            ><span>Go to Album</span><em></em
          ></router-link>
        </div>
      </div>
    </div>

    <div class="slider-buttons">
      <button @click="prevSlide">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button @click="nextSlide">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          cdnUrl:
            "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012142/IMG_1961_yy4ezr.png",
          header: "ALBUM",
          name: "GIGA",
          topic: "by ME",
          description:
            "Dạo quanh Gigamall cùng những người bạn chơi lâu cùng nhau lâu nhất.",
          link: "/album",
        },
        {
          id: 2,
          cdnUrl:
            "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277966/FE7A0590_sfjnlj.jpg",
          header: "ALBUM",
          name: "LÀNG ĐẠI HỌC",
          topic: "by ME",
          description:
            "Album này lưu giữ những kỉ niệm suốt 4 năm trời học xa nhà của mình tại Sài Gòn.",
          link: "/album",
        },
      ],
    };
  },
  mounted() {
    this.slide = this.$refs.slide;
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
