<template>
  <div class="album-info">
    <h1>Photo Gallery</h1>
    <ul>
      <li v-for="(image, index) in images" :key="index">
        <a href="#">
          <figure>
            <img :src="image.src" :alt="image.alt" />
            <figcaption>{{ image.caption }}</figcaption>
            <div class="image-title">{{ image.title }}</div>
          </figure>
        </a>
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
          src: "https://res.cloudinary.com/ddhyr7ejn/image/upload/w_800,q_auto,f_auto/v1722012142/IMG_1961_yy4ezr.png",
          caption: "Gigamall with friends",
          title: "Gigamall",
        },
        {
          src: "https://images.unsplash.com/photo-1633621533308-8760aefb5521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjAyMQ&ixlib=rb-1.2.1&q=80&w=400",
          caption: "My 4 years of youth",
          title: "Thu Duc",
        },
        {
          src: "https://images.unsplash.com/photo-1633635146842-12d386e64058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400",
          alt: "Person standing alone in a misty forest",
          caption: "Forest escapes",
          title: "Forest",
        },
        {
          src: "https://images.unsplash.com/photo-1568444438385-ece31a33ce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400",
          alt: "Person hiking on a trail through mountains while taking a photo with phone",
          caption: "Hiking trails",
          title: "Hiking",
        },
        {
          src: "https://images.unsplash.com/photo-1633515257379-5fda985bd57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400",
          alt: "Street scene with person walking and others on motorbikes, all wearing masks",
          caption: "Street scenes",
          title: "Street",
        },
        {
          src: "https://images.unsplash.com/photo-1633209931146-260ce0d16e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400",
          alt: "Fashionable-looking girl with blond hair and pink sunglasses",
          caption: "Trending",
          title: "Trending",
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
}
</style>
