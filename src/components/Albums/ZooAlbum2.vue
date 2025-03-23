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

import HeaderComp from "../Headers/Header5Comp.vue";
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
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714399/FE7A1459_vwsa99.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714399/FE7A1459_vwsa99.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714399/FE7A1456_fjn71y.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714399/FE7A1456_fjn71y.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714399/FE7A1462_nhdzyx.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714399/FE7A1462_nhdzyx.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714402/FE7A1479_t90fsv.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714402/FE7A1479_t90fsv.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714402/FE7A1461_w7mxxe.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714402/FE7A1461_w7mxxe.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714404/FE7A1483_j4ntxq.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714404/FE7A1483_j4ntxq.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714405/FE7A1485_c5eogf.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714405/FE7A1485_c5eogf.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714431/FE7A1659_doofdv.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714431/FE7A1659_doofdv.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714398/FE7A1455_rmrl07.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714398/FE7A1455_rmrl07.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714400/FE7A1470_ilolvm.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714400/FE7A1470_ilolvm.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714404/FE7A1472_jji1xd.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714404/FE7A1472_jji1xd.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714405/FE7A1471_yo10vk.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714405/FE7A1471_yo10vk.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714402/FE7A1478_cobhdl.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714402/FE7A1478_cobhdl.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714408/FE7A1492_j6oncm.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714408/FE7A1492_j6oncm.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714428/FE7A1652_gmqhb7.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714428/FE7A1652_gmqhb7.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714427/FE7A1653_eiuhaf.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714427/FE7A1653_eiuhaf.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714426/FE7A1632_cry0m1.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714426/FE7A1632_cry0m1.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714425/FE7A1634_ndkjai.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714425/FE7A1634_ndkjai.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714419/FE7A1586_cawvev.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714419/FE7A1586_cawvev.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714419/FE7A1582_xigoj8.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714419/FE7A1582_xigoj8.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714409/FE7A1491_gfsyf8.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714409/FE7A1491_gfsyf8.jpg  ",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714410/FE7A1486_pgncv1.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714410/FE7A1486_pgncv1.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714407/FE7A1487_npa48e.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714407/FE7A1487_npa48e.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714433/FE7A1655_sd2rry.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714433/FE7A1655_sd2rry.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714420/FE7A1627_o1m4xj.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714420/FE7A1627_o1m4xj.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714412/FE7A1503_hc6dri.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714412/FE7A1503_hc6dri.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714410/FE7A1494_spqnaw.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714410/FE7A1494_spqnaw.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714414/FE7A1497_kx0xbo.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714414/FE7A1497_kx0xbo.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714414/FE7A1506_mj6msz.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714414/FE7A1506_mj6msz.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714419/FE7A1509_ylhoew.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714419/FE7A1509_ylhoew.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714415/FE7A1512_srfbxb.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714415/FE7A1512_srfbxb.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714426/FE7A1638_u7ox8r.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714426/FE7A1638_u7ox8r.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714424/FE7A1637_esvy6b.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714424/FE7A1637_esvy6b.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714425/FE7A1645_oeccnb.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714425/FE7A1645_oeccnb.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714424/FE7A1643_afxtqx.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714424/FE7A1643_afxtqx.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714419/FE7A1617_lqn9o6.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714419/FE7A1617_lqn9o6.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714419/FE7A1573_b5ddhf.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714419/FE7A1573_b5ddhf.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714416/FE7A1558_en9vym.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714416/FE7A1558_en9vym.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto/v1742714415/FE7A1530_unsenx.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1742714415/FE7A1530_unsenx.jpg",
        },
      ],
      totalPages: 2,
      links: ["/zoo", "zoo2"],
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
  grid-column: span 1;
}
.grid-item:nth-child(4) {
  grid-column: span 2;
}
.grid-item:nth-child(5) {
  grid-row: span 2;
  grid-column: span 2;
}
.grid-item:nth-child(7) {
  grid-row: span 2;
}
.grid-item:nth-child(9) {
  grid-column: span 2;
}
.grid-item:nth-child(10) {
  grid-row: span 2;
}
.grid-item:nth-child(12) {
  grid-column: span 3;
}
.grid-item:nth-child(17) {
  grid-row: span 2;
}
.grid-item:nth-child(19) {
  grid-row: span 2;
}
.grid-item:nth-child(20) {
  grid-row: span 2;
}
.grid-item:nth-child(23) {
  grid-row: span 2;
}
.grid-item:nth-child(27) {
  grid-column: span 2;
}
.grid-item:nth-child(31) {
  grid-column: span 2;
  grid-row: span 2;
}
.grid-item:nth-child(37) {
  grid-column: span 2;
  grid-row: span 2;
}
.grid-item:nth-child(38) {
  grid-row: span 2;
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
  .grid-item:nth-child(1) {
    grid-column: span 1;
  }
  .grid-item:nth-child(6) {
    grid-column: span 2;
    grid-row: span 2;
  }
  .grid-item:nth-child(7) {
    grid-column: span 2;
    grid-row: span 2;
  }
  .grid-item:nth-child(13) {
    grid-column: span 2;
    grid-row: span 2;
  }
  .grid-item:nth-child(16) {
    grid-column: span 1;
    grid-row: span 1;
  }
  .grid-item:nth-child(21) {
    grid-column: span 1;
    grid-row: span 2;
  }
  .grid-item:nth-child(28) {
    grid-column: span 1;
    grid-row: span 2;
  }
  .grid-item:nth-child(35) {
    grid-column: span 1;
    grid-row: span 2;
  }
}
</style>
