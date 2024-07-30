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

import HeaderComp from "../Headers/Header2Comp.vue";
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
      // w_500,q_auto,f_auto/
      images: [
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277959/FE7A027_v24sst.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277959/FE7A027_v24sst.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277960/FE7A028_xqmrin.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277960/FE7A028_xqmrin.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277959/FE7A029_id6cwr.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277959/FE7A029_id6cwr.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277961/FE7A0530_m1rlbu.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277961/FE7A0530_m1rlbu.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277963/FE7A0546_waoghd.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277963/FE7A0546_waoghd.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277960/FE7A0565_nlngci.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277960/FE7A0565_nlngci.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277962/FE7A0575_wlc2qp.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277962/FE7A0575_wlc2qp.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277962/FE7A0580_bcjmpv.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277962/FE7A0580_bcjmpv.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277966/FE7A0582_gh2f9c.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277966/FE7A0582_gh2f9c.jpg",
          caption: "By accident",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277967/FE7A0583_gmlkan.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277967/FE7A0583_gmlkan.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277966/FE7A0590_sfjnlj.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277966/FE7A0590_sfjnlj.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277967/FE7A0630_byjfkl.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277967/FE7A0630_byjfkl.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277967/FE7A0645_aowhry.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277967/FE7A0645_aowhry.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277967/FE7A0646_dr2epd.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277967/FE7A0646_dr2epd.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277968/FE7A0665_nm4lqy.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277968/FE7A0665_nm4lqy.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277971/FE7A0720_cqaqez.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277971/FE7A0720_cqaqez.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277976/FE7A0726_tuijhl.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277976/FE7A0726_tuijhl.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277972/FE7A0728_zdnhus.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277972/FE7A0728_zdnhus.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277974/FE7A0764_xdf4vv.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277974/FE7A0764_xdf4vv.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,q_auto,f_auto/v1722277973/FE7A0767_lz05gg.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722277973/FE7A0767_lz05gg.jpg",
        },
      ],
      totalPages: 2, // Số trang tổng cộng, có thể thay đổi
      links: ["/ktx", "/ktx2"],
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
  transform: translateX(-7%);
}

.grid-item:hover img {
  transform: translateX(0.1px);
}

.grid-item:nth-child(1) {
  grid-column: span 1;
  grid-row: span 2;
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

.grid-item:nth-child(10) {
  grid-row: span 2;
  grid-column: span 1;
}

.grid-item:nth-child(12) {
  grid-column: span 2;
}

.grid-item:nth-child(13) {
  grid-column: span 1;
  grid-row: span 2;
}

.grid-item:nth-child(15) {
  grid-column: span 3;
}

.grid-item:nth-child(16) {
  grid-column: span 2;
  grid-row: span 1;
}

.grid-item:nth-child(17) {
  grid-row: span 2;
}

.grid-item:nth-child(18) {
  grid-column: span 2;
  grid-row: span 2;
}

.grid-item:nth-child(19) {
  grid-column: span 1;
  grid-row: span 3;
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
