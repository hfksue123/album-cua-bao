<template id="web">
  <HeaderComp />
  <Description1Comp v-bind:content="popupContent" />
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

import HeaderComp from "../Headers/Header3Comp.vue";
import FooterComp from "../FooterComp.vue";
import PaginationComp from "../PaginationComp.vue";
import Description1Comp from "../Description/Description1Comp.vue";

export default {
  name: "GalleryComponent",
  components: {
    HeaderComp,
    FooterComp,
    PaginationComp,
    Description1Comp,
  },
  data() {
    return {
      popupContent:
        "<br><b>&#10149; Name:</b> HOME (Page 2)<br><b>&#10149; Combo:</b> canon 5d2 + 50stm<br><b>&#10149; Time:</b> 5 / 2023<br><br> Bộ ảnh ngẫu nhiên chụp trong vườn nhà mình. Enjoy!!! ❤️",
      images: [
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591587/IMG_2544_mgz4k4.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591587/IMG_2544_mgz4k4.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591586/IMG_2493_gkimoe.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591586/IMG_2493_gkimoe.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591586/IMG_2535_e37e5a.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591586/IMG_2535_e37e5a.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591586/IMG_2537_ygh6zu.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591586/IMG_2537_ygh6zu.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591586/IMG_2540_xhrsih.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591586/IMG_2540_xhrsih.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591585/IMG_2473_sjvvbm.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591585/IMG_2473_sjvvbm.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591585/IMG_2526_humo8o.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591585/IMG_2526_humo8o.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591585/IMG_2513_tmsbdz.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591585/IMG_2513_tmsbdz.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591585/IMG_2505_sjadr6.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591585/IMG_2505_sjadr6.jpg",
          caption: "",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591584/IMG_2462_ffd8jf.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591584/IMG_2462_ffd8jf.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591584/IMG_2471_gligkv.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591584/IMG_2471_gligkv.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591583/IMG_2454_b23coj.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591583/IMG_2454_b23coj.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591583/IMG_2318_n7u9so.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591583/IMG_2318_n7u9so.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591583/IMG_2457_q5wjhl.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591583/IMG_2457_q5wjhl.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591583/IMG_2458_jguzy6.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591583/IMG_2458_jguzy6.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591583/IMG_2459_tr2s4y.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591583/IMG_2459_tr2s4y.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741591582/IMG_2309_uchhix.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741591582/IMG_2309_uchhix.jpg",
        },
      ],
      totalPages: 2, // Số trang tổng cộng, có thể thay đổi
      links: ["/home", "/home2"],
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

.grid-item:nth-child(1) {
  grid-column: span 1;
  grid-row: span 1;
}

.grid-item:nth-child(2) {
  grid-column: span 1;
  grid-row: span 2;
}

.grid-item:nth-child(4) {
  grid-row: span 1;
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
  grid-row: span 2;
}

.grid-item:nth-child(13) {
  grid-column: span 2;
  grid-row: span 1;
}

.grid-item:nth-child(15) {
  grid-column: span 1;
}

.grid-item:nth-child(17) {
  grid-row: span 1;
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
    grid-column: span 1;
    grid-row: span 2;
  }

  .grid-item:nth-child(6) {
    grid-column: span 1;
    grid-row: span 2;
  }
  .grid-item:nth-child(9) {
    grid-column: span 2;
  }
  .grid-item:nth-child(14) {
    grid-column: span 2;
  }
  .grid-item:nth-child(15) {
    grid-column: span 1;
  }

  .grid-item:nth-child(17) {
    grid-column: span 2;
    grid-row: span 2;
  }
}
</style>
