<template id="web">
  <HeaderComp />
  <div class="container" ref="container">
    <div class="grid-item" v-for="(image, index) in images" :key="index">
      <a
        :href="image.href"
        data-fancybox="gallery"
        :data-caption="image.caption"
      >
        <img
          :data-src="image.src"
          :alt="image.caption"
          class="lozad blur-up"
          :width="image.width"
          :height="image.height"
        />
      </a>
    </div>
  </div>
  <PaginationComp
    :totalPages="totalPages"
    :links="links"
    @page-changed="handlePageChange"
  />
  <FooterComp />
</template>

<script>
import { Fancybox } from "@fancyapps/ui";
import lozad from "lozad";

import HeaderComp from "../Headers/Header6Comp.vue";
import FooterComp from "../FooterComp.vue";
import PaginationComp from "../PaginationComp.vue";

export default {
  name: "GalleryComponent",
  components: {
    HeaderComp,
    FooterComp,
    PaginationComp,
  },
  data() {
    return {
      images: [
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799828/IMG_1785_lrmc8f.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799828/IMG_1785_lrmc8f.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799829/IMG_1774_a54qer.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799829/IMG_1774_a54qer.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799833/IMG_1762_j8mh59.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799833/IMG_1762_j8mh59.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799831/IMG_1784_cpb0qu.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799831/IMG_1784_cpb0qu.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799837/IMG_1736_fb34vi.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799837/IMG_1736_fb34vi.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799834/IMG_1757_fzl1se.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799834/IMG_1757_fzl1se.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799839/IMG_1758_pzispl.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799839/IMG_1758_pzispl.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799838/IMG_1773_fcl303.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799838/IMG_1773_fcl303.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799842/IMG_1817_h3mxfm.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799842/IMG_1817_h3mxfm.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799841/IMG_1782_xm3mxg.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799841/IMG_1782_xm3mxg.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799847/IMG_1801_mwwram.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799847/IMG_1801_mwwram.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799843/IMG_1747_y1pmnq.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799843/IMG_1747_y1pmnq.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799853/IMG_1833_nnyyuc.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799853/IMG_1833_nnyyuc.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799848/IMG_1839_i4mn4l.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799848/IMG_1839_i4mn4l.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799829/Untitled_Panorama1_ybbymi.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742799829/Untitled_Panorama1_ybbymi.png",
        },
      ],
      totalPages: 1, // Số trang tổng cộng, có thể thay đổi
      links: ["/baden"],
    };
  },
  methods: {
    fetchImageDimensions(image) {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          resolve({ width: img.width, height: img.height });
        };
      });
    },
    async updateImageDimensions() {
      const updatedImages = await Promise.all(
        this.images.map(async (image) => {
          const dimensions = await this.fetchImageDimensions(image);
          return { ...image, ...dimensions };
        })
      );
      this.images = updatedImages;
    },
  },
  mounted() {
    this.updateImageDimensions().then(() => {
      Fancybox.bind(this.$refs.container, "[data-fancybox]", {
        Carousel: {
          infinite: true,
        },
        Thumbs: {
          type: "classic",
          transition: "slide",
        },
        Toolbar: {
          display: {
            left: ["infobar"],
            right: [
              "slideshow",
              "thumbs",
              "zoomIn",
              "zoomOut",
              "fullscreen",
              "close",
            ],
          },
        },
        wheel: "zoom",
        defaultType: "ajax",
      });

      // Sử dụng Lozad để lazy load ảnh
      const observer = lozad(".lozad", {
        load: function (el) {
          el.src = el.dataset.src;
          el.onload = function () {
            el.classList.add("fade");
          };
        },
      });
      observer.observe();
    });
  },
  unmounted() {
    Fancybox.destroy();
  },
  activated() {
    console.log("Component activated");
  },
  deactivated() {
    console.log("Component deactivated");
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--bg-color);
}

.container {
  padding-top: 50px !important;
  padding-bottom: 50px !important;
  width: 100%;
  margin: 0 auto;
  padding: 0px 90px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
  grid-gap: 20px;
}

#loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: #2c3e50 url("https://i.gifer.com/ZZ5H.gif") no-repeat center
    center;
  background-size: 10%;
}

#website {
  display: none;
}

.grid-item {
  background-color: var(--bg-color);
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.grid-item img {
  width: 110%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  transform: translateX(-5%);
}

.grid-item:hover img {
  transform: translateX(0);
}

.grid-item:nth-child(2) {
  grid-column: span 2;
}

.grid-item:nth-child(3),
.grid-item:nth-child(4) {
  grid-row: span 2;
}

.grid-item:nth-child(6) {
  grid-row: span 3;
  grid-column: span 2;
}

.grid-item:nth-child(7) {
  grid-row: span 2;
  grid-column: span 1;
}

.grid-item:nth-child(12) {
  grid-column: span 2;
}

.grid-item:nth-child(15) {
  grid-column: span 4;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade {
  animation-name: fade;
  animation-duration: 1s;
  display: block;
}

@media (max-width: 996px) {
  .grid-gallery {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-auto-rows: 280px;
  }
}

@media (max-width: 640px) {
  .grid-item:nth-child(1n) {
    grid-row: unset;
    grid-column: unset;
  }
}

@media (max-width: 500px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    padding: 0 15px;
  }

  .grid-item:nth-child(2) {
    grid-column: span 2;
    grid-row: span 1;
  }

  .grid-item:nth-child(6) {
    grid-column: span 2;
    grid-row: span 2;
  }

  .grid-item:nth-child(15) {
    grid-column: span 2;
    grid-row: span 1;
  }

  .grid-item:nth-child(17) {
    grid-column: span 1;
    grid-row: span 2;
  }
  .grid-item:nth-child(19) {
    grid-column: span 2;
    grid-row: span 1;
  }
  .grid-item:nth-child(20) {
    grid-column: span 1;
  }
}
</style>
