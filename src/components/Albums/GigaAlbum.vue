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
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_500,h_300,c_fill,q_50/v1722012140/IMG_1929_uygxhr.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/q_auto,f_auto,e_sharpen/v1722012140/IMG_1929_uygxhr.png",
          caption: "Title2",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012141/IMG_1930_m059zr.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012141/IMG_1930_m059zr.png",
          caption: "Title3",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1931_mkl4fc.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1931_mkl4fc.png",
          caption: "Title4",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012145/IMG_1932_y0o96l.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012145/IMG_1932_y0o96l.png",
          caption: "Title5",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012142/IMG_1933_t9lxns.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012142/IMG_1933_t9lxns.png",
          caption: "Title6",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1938_ghjocu.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1938_ghjocu.png",
          caption: "Title7",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1939_bpfbqh.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012144/IMG_1939_bpfbqh.png",
          caption: "Title8",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012145/IMG_1940_zijefg.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012145/IMG_1940_zijefg.png",
          caption: "By accident",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1942_rucb8h.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1942_rucb8h.png",
          caption: "Title10",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012146/IMG_1943_ajvjj9.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012146/IMG_1943_ajvjj9.png",
          caption: "Title11",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012146/IMG_1945_a7kk60.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012146/IMG_1945_a7kk60.png",
          caption: "Title12",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1946_b9vhrq.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1946_b9vhrq.png",
          caption: "Title13",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012147/IMG_1950_rwxhmk.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012147/IMG_1950_rwxhmk.png",
          caption: "Title14",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012150/IMG_1951_fwa8gz.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012150/IMG_1951_fwa8gz.png",
          caption: "Title15",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1952_kgegru.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012149/IMG_1952_kgegru.png",
          caption: "Title16",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012140/IMG_1953_i8er5d.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012140/IMG_1953_i8er5d.png",
          caption: "Title17",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012140/IMG_1954_wxwvqj.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012140/IMG_1954_wxwvqj.png",
          caption: "Title18",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012156/IMG_1959_aqm7l4.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012156/IMG_1959_aqm7l4.png",
          caption: "Title19",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012142/IMG_1961_yy4ezr.png",
          href: "https://res.cloudinary.com/ddhyr7ejn/image/upload/v1722012142/IMG_1961_yy4ezr.png",
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
