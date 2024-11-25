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

import HeaderComp from "../Headers/Header1Comp.vue";
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
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722012141/IMG_1928_w1gciv.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012141/IMG_1928_w1gciv.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,h_300,c_fill,q_50/v1722012140/IMG_1929_uygxhr.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto,e_sharpen/v1722012140/IMG_1929_uygxhr.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_jpg/v1722012141/IMG_1930_m059zr.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012141/IMG_1930_m059zr.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_auto/v1722012144/IMG_1931_mkl4fc.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1931_mkl4fc.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012145/IMG_1932_y0o96l.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012145/IMG_1932_y0o96l.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_auto/v1722012142/IMG_1933_t9lxns.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/e_sharpen/v1722012142/IMG_1933_t9lxns.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012144/IMG_1938_ghjocu.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1938_ghjocu.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012144/IMG_1939_bpfbqh.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1939_bpfbqh.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012145/IMG_1940_zijefg.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012145/IMG_1940_zijefg.png",
          caption: "By accident",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012149/IMG_1942_rucb8h.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1942_rucb8h.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012146/IMG_1943_ajvjj9.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012146/IMG_1943_ajvjj9.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012146/IMG_1945_a7kk60.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012146/IMG_1945_a7kk60.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012149/IMG_1946_b9vhrq.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto,e_sharpen/v1722012149/IMG_1946_b9vhrq.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012147/IMG_1950_rwxhmk.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012147/IMG_1950_rwxhmk.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_auto/v1722012150/IMG_1951_fwa8gz.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012150/IMG_1951_fwa8gz.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012149/IMG_1952_kgegru.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1952_kgegru.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1500,c_fill,q_auto,f_auto/v1722012140/IMG_1953_i8er5d.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012140/IMG_1953_i8er5d.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,c_fill,q_auto,f_auto/v1722012140/IMG_1954_wxwvqj.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012140/IMG_1954_wxwvqj.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1722012156/IMG_1959_aqm7l4.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto,e_sharpen/v1722012156/IMG_1959_aqm7l4.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/c_fill,q_auto,f_auto/v1722012142/IMG_1961_yy4ezr.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012142/IMG_1961_yy4ezr.png",
        },
      ],
      totalPages: 1, // Số trang tổng cộng, có thể thay đổi
      links: ["/giga"],
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
  grid-column: span 3;
}

.grid-item:nth-child(17) {
  grid-row: span 2;
}

.grid-item:nth-child(19) {
  grid-column: span 2;
}

.grid-item:nth-child(20) {
  grid-column: span 3;
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
    grid-column: span 2;
  }
}
</style>
