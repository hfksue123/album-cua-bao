<template>
  <div class="album-info">
    <h1>Photo Gallery</h1>
    <ul>
      <li v-for="(image, index) in images" :key="index">
        <router-link :to="image.to">
          <figure>
            <img :src="image.src" :alt="image.alt" />
            <figcaption>{{ image.caption }}</figcaption>
            <div class="image-title">{{ image.title }}</div>
          </figure>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PhotoGallery",
  data() {
    return {
      images: [
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto,x_500,y_250,c_crop/v1722012156/IMG_1959_aqm7l4.png",
          caption: "Gigamall with friends",
          title: "Gigamall",
          to: "/giga",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto,x_540,y_450,c_crop/v1742799847/IMG_1801_mwwram.png",
          caption: "Baden Mountain",
          title: "Baden",
          to: "/baden",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000,q_auto,f_auto,x_500,y_350,c_crop/v1730742972/FE7A9989_x85qdc.jpg",
          caption: "My 4 years of youth",
          title: "Lang Dai Hoc",
          to: "/ktx",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_2800,q_auto,f_auto,x_1500,y_950,c_crop/v1741591586/IMG_2540_xhrsih.jpg",
          caption: "Nowhere is like home",
          title: "Home",
          to: "/home2",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_600,q_400,f_auto,c_crop/v1732530821/5_juieev.png",
          caption: "Tet Am Lich 2022",
          title: "TET",
          to: "/home",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_1000/v1741600970/FE7A0221-Enhanced-NR-2_q74sna.jpg",
          caption: "Street scenes and people at SG",
          title: "SaiGon",
          to: "/sg",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800/v1741602625/FE7A1107_um0fho.jpg",
          caption: "Thao Cam Vien Sai Gon Part 1",
          title: "Zoo 1",
          to: "/zoo",
        },
        {
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800/v1742714399/FE7A1459_vwsa99.jpg",
          caption: "Thao Cam Vien Sai Gon Part 2",
          title: "Zoo 2",
          to: "/zoo",
        },
      ],
    };
  },
};
</script>

<style scoped>
.album-info {
  font-family: Lato, sans-serif;
  padding: 1rem;
  padding-top: 5rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(20, 20, 20, 1);
  flex-direction: column;
}

h1 {
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
}

img {
  width: 100%;
  display: block;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 1000ms;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  max-width: 100%;
  width: 70rem;
}

figure {
  margin: 0;
  position: relative;
  overflow: hidden;
}

figure::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: rgba(0, 0, 0, 0.5);
  transform-origin: center;
  opacity: 0;
  transform: scale(2);
  transition: opacity 300ms;
}

figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  place-items: center;
  text-align: center;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  z-index: 1;
  opacity: 0;
  transition: opacity 600ms, transform 600ms;
}

figure .image-title {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 5px;
}

a:is(:hover, :focus) figure::after {
  opacity: 1;
}

a:is(:hover, :focus) figcaption {
  opacity: 1;
  transition: opacity 600ms;
}

@media (prefers-reduced-motion: no-preference) {
  figcaption {
    transform: translate3d(0, 2rem, 0);
  }

  figure::after {
    border-radius: 50%;
    opacity: 1;
    transform: scale(0);
    transition: transform 900ms;
  }

  a:is(:hover, :focus) figure::after {
    transform: scale(2.5);
  }

  a:is(:hover, :focus) figcaption {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity 600ms 400ms, transform 600ms 400ms;
  }

  a:is(:hover, :focus) img {
    transform: scale(1.2);
  }
}

/* Media query cho màn hình dưới 400px */
@media (max-width: 400px) {
  ul {
    grid-template-columns: 1fr 1fr; /* Chia 1 dòng thành 2 ảnh */
  }
  h1 {
    font-size: 1.5rem;
  }
  figure .image-title {
    bottom: 5px;
    right: 5px;
    font-size: 0.8rem;
    background-color: rgba(0, 0, 0, 0.305);
  }
}
</style>
