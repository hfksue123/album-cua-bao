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

import HeaderComp from "../Headers/Header4Comp.vue";
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
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598219/IMG_2540_mgz4ak.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598219/IMG_2540_mgz4ak.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598217/IMG_1666_vqs0yt.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598217/IMG_1666_vqs0yt.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598215/IMG_1644_fur4cb.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598215/IMG_1644_fur4cb.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598214/IMG_2573_gl4fzb.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598214/IMG_2573_gl4fzb.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598214/IMG_2568_xnrmx3.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598214/IMG_2568_xnrmx3.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598212/IMG_2548_rigbur.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598212/IMG_2548_rigbur.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598210/IMG_2070_vweffe.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598210/IMG_2070_vweffe.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598209/IMG_2069_ws42jl.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598209/IMG_2069_ws42jl.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598208/IMG_2062_iucikq.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598208/IMG_2062_iucikq.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598207/IMG_2028_naysnd.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598207/IMG_2028_naysnd.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598206/IMG_2020-2_ulbeyc.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598206/IMG_2020-2_ulbeyc.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598204/IMG_2019_j9xz32.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598204/IMG_2019_j9xz32.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598202/IMG_1862_t34pvu.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598202/IMG_1862_t34pvu.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598201/IMG_1824_nllsf7.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598201/IMG_1824_nllsf7.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598200/IMG_1785_fuzarf.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598200/IMG_1785_fuzarf.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598198/IMG_1774_npivoa.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598198/IMG_1774_npivoa.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598198/IMG_1749_g5mdww.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598198/IMG_1749_g5mdww.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598197/IMG_1747_uw6cuo.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598197/IMG_1747_uw6cuo.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598196/IMG_1699_baiuiu.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598196/IMG_1699_baiuiu.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598195/IMG_1680_q8hlxz.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598195/IMG_1680_q8hlxz.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598193/IMG_1676_vphs7t.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598193/IMG_1676_vphs7t.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598192/IMG_1675_w1ybuq.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598192/IMG_1675_w1ybuq.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598190/IMG_1668_wzisth.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598190/IMG_1668_wzisth.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598189/IMG_1665_ikglc9.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598189/IMG_1665_ikglc9.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598188/IMG_1661_kn63be.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598188/IMG_1661_kn63be.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598187/IMG_1657_kyrwun.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598187/IMG_1657_kyrwun.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598186/IMG_1654_zeslef.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598186/IMG_1654_zeslef.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598185/IMG_1653_buaz6u.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598185/IMG_1653_buaz6u.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598184/IMG_1649_qr2tef.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598184/IMG_1649_qr2tef.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598183/IMG_1645_e3ccrp.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598183/IMG_1645_e3ccrp.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598181/IMG_1641_tgq3e6.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598181/IMG_1641_tgq3e6.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598180/IMG_1631_bey8es.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598180/IMG_1631_bey8es.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598179/IMG_1624_lz68qt.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598179/IMG_1624_lz68qt.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598177/IMG_1622_ieolsl.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598177/IMG_1622_ieolsl.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598176/IMG_1614_bqcosx.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598176/IMG_1614_bqcosx.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598176/IMG_1611_ekeopt.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598176/IMG_1611_ekeopt.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598174/IMG_1608_q2wlbz.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598174/IMG_1608_q2wlbz.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598173/IMG_1607_nvxnke.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598173/IMG_1607_nvxnke.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598172/IMG_1604_fuzvjr.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598172/IMG_1604_fuzvjr.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598171/IMG_1603_ppmfx4.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598171/IMG_1603_ppmfx4.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598170/IMG_1600_qzhbrm.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598170/IMG_1600_qzhbrm.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598169/IMG_1598_maaoon.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598169/IMG_1598_maaoon.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598168/IMG_1596_staaym.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598168/IMG_1596_staaym.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598167/IMG_1592_jchqer.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598167/IMG_1592_jchqer.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598166/IMG_3619_xvdeiv.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598166/IMG_3619_xvdeiv.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598166/IMG_3659_ehimrh.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598166/IMG_3659_ehimrh.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598165/IMG_3537_zm7ymc.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598165/IMG_3537_zm7ymc.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598164/IMG_3588_dnt0pq.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598164/IMG_3588_dnt0pq.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598164/IMG_3536_mqv0ed.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598164/IMG_3536_mqv0ed.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598164/IMG_3533_moxdln.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598164/IMG_3533_moxdln.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741598163/IMG_2577_rgtmwb.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741598163/IMG_2577_rgtmwb.jpg",
        },
      ],
      totalPages: 2, // Số trang tổng cộng, có thể thay đổi
      links: ["/sg", "/sg2"],
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

.grid-item:nth-child(3) {
  grid-row: span 2;
}
.grid-item:nth-child(4) {
  grid-row: span 1;
}
.grid-item:nth-child(6) {
  grid-row: span 2;
  grid-column: span 2;
}

.grid-item:nth-child(7) {
  grid-row: span 2;
  grid-column: span 1;
}
.grid-item:nth-child(11) {
  grid-row: span 2;
}
.grid-item:nth-child(12) {
  grid-column: span 1;
}
.grid-item:nth-child(15) {
  grid-column: span 1;
}
.grid-item:nth-child(16) {
  grid-column: span 2;
}
.grid-item:nth-child(19) {
  grid-column: span 2;
}
.grid-item:nth-child(21) {
  grid-row: span 2;
}
.grid-item:nth-child(27) {
  grid-column: span 2;
}
.grid-item:nth-child(32) {
  grid-row: span 2;
}
.grid-item:nth-child(39) {
  grid-row: span 2;
}
.grid-item:nth-child(45) {
  grid-column: span 2;
  grid-row: span 2;
}
.grid-item:nth-child(47) {
  grid-column: span 2;
}
.grid-item:nth-child(50) {
  grid-column: span 2;
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
  .grid-item:nth-child(23) {
    grid-row: span 2;
  }
  .grid-item:nth-child(27) {
    grid-column: span 2;
  }
}
</style>
