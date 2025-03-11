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
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602677/FE7A0979_1_qj78lf.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602677/FE7A0979_1_qj78lf.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602675/FE7A1145_wcw9mp.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602675/FE7A1145_wcw9mp.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602673/FE7A1126_eukz3g.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602673/FE7A1126_eukz3g.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602671/FE7A1112_relsl2.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602671/FE7A1112_relsl2.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602670/FE7A1101_n0tyxq.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602670/FE7A1101_n0tyxq.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602668/FE7A1091_wmsvmi.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602668/FE7A1091_wmsvmi.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602667/FE7A1076_pu90ai.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602667/FE7A1076_pu90ai.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602664/FE7A1059_b7eyib.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602664/FE7A1059_b7eyib.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602663/FE7A1034_kw3wg6.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602663/FE7A1034_kw3wg6.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602661/FE7A1041_tbljnm.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602661/FE7A1041_tbljnm.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602660/FE7A1011_z5bxpy.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602660/FE7A1011_z5bxpy.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602658/FE7A1009_b2r6ug.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602658/FE7A1009_b2r6ug.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602656/FE7A1006_ue7wgi.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602656/FE7A1006_ue7wgi.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602655/FE7A1001-Edit_zwmrh4.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602655/FE7A1001-Edit_zwmrh4.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602653/FE7A0996-Edit_fsw3w7.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602653/FE7A0996-Edit_fsw3w7.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602651/FE7A0989_mpzdw6.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602651/FE7A0989_mpzdw6.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602648/FE7A1223_vkallj.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602648/FE7A1223_vkallj.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602646/FE7A1156_lydzlm.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602646/FE7A1156_lydzlm.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602644/FE7A1182_legmd4.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602644/FE7A1182_legmd4.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602643/FE7A1218_bi40l4.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602643/FE7A1218_bi40l4.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602641/FE7A1228_cu7ynw.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602641/FE7A1228_cu7ynw.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602640/FE7A1148_lkame9.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602640/FE7A1148_lkame9.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602639/FE7A0977_zgo0vv.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602639/FE7A0977_zgo0vv.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602637/FE7A1190-Edit_lvipoh.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602637/FE7A1190-Edit_lvipoh.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602635/FE7A1214_ziz6ee.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602635/FE7A1214_ziz6ee.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602633/FE7A0980_jyayca.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602633/FE7A0980_jyayca.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602632/FE7A1189_xng9dp.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602632/FE7A1189_xng9dp.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602630/FE7A1158_byrete.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602630/FE7A1158_byrete.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602628/FE7A1150_c8gvst.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602628/FE7A1150_c8gvst.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602626/FE7A1135_nexuyl.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602626/FE7A1135_nexuyl.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602625/FE7A1107_um0fho.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602625/FE7A1107_um0fho.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602623/FE7A1184_l6xrdy.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602623/FE7A1184_l6xrdy.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602621/FE7A1229_chexbt.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602621/FE7A1229_chexbt.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602620/FE7A1230-Edit_lxnvfy.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602620/FE7A1230-Edit_lxnvfy.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602618/FE7A0974_l249b7.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602618/FE7A0974_l249b7.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602617/FE7A1206_i2ivuu.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602617/FE7A1206_i2ivuu.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602616/FE7A1192_rvxytn.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602616/FE7A1192_rvxytn.jpg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1741602616/FE7A1203_lnzdzu.jpg",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1741602616/FE7A1203_lnzdzu.jpg",
        },
      ],
      totalPages: 1,
      links: ["/zoo"],
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
  grid-row: span 2;
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
.grid-item:nth-child(17) {
  grid-row: span 2;
}
.grid-item:nth-child(20) {
  grid-row: span 2;
}
.grid-item:nth-child(27) {
  grid-column: span 2;
}
.grid-item:nth-child(31) {
  grid-column: span 2;
  grid-row: span 2;
}
.grid-item:nth-child(38) {
  grid-column: span 3;
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
  .grid-item:nth-child(1) {
    grid-column: span 1;
  }
  .grid-item:nth-child(2) {
    grid-column: span 2;
    grid-row: span 1;
  }

  .grid-item:nth-child(6) {
    grid-column: span 2;
    grid-row: span 2;
  }
  .grid-item:nth-child(13) {
    grid-column: span 2;
    grid-row: span 2;
  }
  .grid-item:nth-child(35) {
    grid-column: span 1;
    grid-row: span 2;
  }
}
</style>
