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
        "<br><b>&#10149; Name:</b> HOME (Page 1: Tết)<br><b>&#10149; Combo:</b> canon 600d + 50ii<br><b>&#10149; Time:</b> Tết âm lịch 2022<br><br> Đây là bộ ảnh đầu tiên kể từ lúc mình bắt đầu tập chơi ảnh nên chất lượng sẽ hơi bị out nét đôi chút. Enjoy!!! ❤️",
      images: [
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530837/3_fqrxom.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530837/3_fqrxom.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530835/10_w3y47m.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530835/10_w3y47m.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530835/7_xurrap.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530835/7_xurrap.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530835/2_hzp4tt.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530835/2_hzp4tt.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530834/20_eijlmy.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530834/20_eijlmy.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530830/19_p6xxgm.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530830/19_p6xxgm.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530829/22_kiqdhw.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530829/22_kiqdhw.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530829/1_t7x1wq.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530829/1_t7x1wq.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530827/17_hvacrm.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530827/17_hvacrm.png",
          caption: "",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530825/4_bcgpbc.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530825/4_bcgpbc.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530824/9_agce9e.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530824/9_agce9e.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530824/11_zkwbxk.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530824/11_zkwbxk.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530822/23_abpqzb.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530822/23_abpqzb.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530821/5_juieev.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530821/5_juieev.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530820/18_pluene.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530820/18_pluene.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/h_800,q_auto,f_auto/v1732530817/21_uuiyc9.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530817/21_uuiyc9.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530816/6_rt3iiu.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530816/6_rt3iiu.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530815/13_jgzopj.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530815/13_jgzopj.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530810/8_mg7y2q.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530810/8_mg7y2q.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530810/16_ddqyu5.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530810/16_ddqyu5.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530809/14_vszvwj.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530809/14_vszvwj.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530808/15_ml55zn.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530808/15_ml55zn.png",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1732530807/12_ksiqvq.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1732530807/12_ksiqvq.png",
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
  grid-row: span 2;
}

.grid-item:nth-child(2) {
  grid-column: span 2;
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
  grid-column: span 4;
  grid-row: span 2;
}

.grid-item:nth-child(15) {
  grid-column: span 2;
}

.grid-item:nth-child(17) {
  grid-row: span 1;
}

.grid-item:nth-child(18) {
  grid-row: span 2;
}

.grid-item:nth-child(19) {
  grid-column: span 2;
}

.grid-item:nth-child(20) {
  grid-column: span 1;
}

.grid-item:nth-child(21) {
  grid-column: span 2;
}
.grid-item:nth-child(22) {
  grid-column: span 3;
}
.grid-item:nth-child(23) {
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
    grid-column: span 2;
    grid-row: span 2;
  }
  .grid-item:nth-child(9) {
    grid-column: span 2;
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
  .grid-item:nth-child(23) {
    grid-column: span 2;
  }
}
</style>
