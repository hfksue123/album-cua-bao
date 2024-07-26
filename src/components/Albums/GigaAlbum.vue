<template id="web">
  <HeaderComp />
  <div class="container" ref="container">
    <div class="grid-item" v-for="(image, index) in images" :key="index">
      <a
        :href="image.href"
        data-fancybox="gallery"
        :data-caption="image.caption"
      >
        <img :data-src="image.src" :alt="image.caption" class="lazy-load" />
      </a>
    </div>
  </div>
  <FooterComp />
</template>

<script>
import { Fancybox } from "@fancyapps/ui";
import "../../css/fancybox.css";

import HeaderComp from "../Headers/Header1Comp.vue";
import FooterComp from "../FooterComp.vue";

export default {
  name: "GalleryComponent",
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      images: [
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,h_300,c_fill,q_50/v1722012141/IMG_1928_w1gciv.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012141/IMG_1928_w1gciv.png",
          caption: "Title1",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1929.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1929.png"),
          caption: "Title2",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1930.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1930.png"),
          caption: "Title3",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1931.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1931.png"),
          caption: "Title4",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1932.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1932.png"),
          caption: "Title5",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1933.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1933.png"),
          caption: "Title6",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1938.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1938.png"),
          caption: "Title7",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1939.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1939.png"),
          caption: "Title8",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1940.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1940.png"),
          caption: "By accident",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1942.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1942.png"),
          caption: "Title10",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1943.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1943.png"),
          caption: "Title11",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1945.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1945.png"),
          caption: "Title12",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1946.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1946.png"),
          caption: "Title13",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1950.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1950.png"),
          caption: "Title14",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1951.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1951.png"),
          caption: "Title15",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1952.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1952.png"),
          caption: "Title16",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1953.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1953.png"),
          caption: "Title17",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1954.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1954.png"),
          caption: "Title18",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1959.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1959.png"),
          caption: "Title19",
        },
        {
          src: require("../../assets/img/albumImage/giga/IMG_1961.png"),
          href: require("../../assets/img/albumImage/giga/IMG_1961.png"),
          caption: "Title20",
        },
      ],
    };
  },
  mounted() {
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

    // Sử dụng Intersection Observer để lazy load ảnh
    let lazyImages = this.$refs.container.querySelectorAll(".lazy-load");
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy-load");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => {
      observer.observe(img);
    });
  },
  unmounted() {
    Fancybox.destroy();
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

/* lazy-load */
.lazy-load {
  filter: blur(10px);
  transition: filter 0.3s, opacity 0.3s;
  opacity: 0.5;
}

.lazy-load[src] {
  filter: blur(0);
  opacity: 1;
}

.container {
  padding-top: 50px !important;
  padding-bottom: 50px !important   ;
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

  .grid-item:nth-child(17) {
    grid-column: span 1;
    grid-row: span 2;
  }

  .grid-item:nth-child(20) {
    grid-column: span 2;
  }
}
</style>
