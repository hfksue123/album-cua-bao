<template>
  <div ref="container" :id="galleryID" class="gallery">
    <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
      <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
    </a>
    <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
      <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
    </a>
    <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
      <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
    </a>
    <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
      <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
    </a>
    <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
      <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
    </a>
  </div>
</template>

<script>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default {
  name: "SimpleGallery",
  props: {
    galleryID: String,
    options: {
      type: Object,
      default: () => ({
        Carousel: {
          infinite: false,
        },
      }),
    },
  },
  mounted() {
    Fancybox.bind(this.$refs.container, "[data-fancybox]", {
      ...(this.options || {}),
    });
  },
  updated() {
    Fancybox.unbind(this.$refs.container);
    Fancybox.close();

    Fancybox.bind(this.$refs.container, "[data-fancybox]", {
      ...(this.options || {}),
    });
  },
  unmounted() {
    Fancybox.destroy();
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery a {
  margin: 5px;
}

.gallery img {
  max-width: 100%;
  cursor: pointer;
}
</style>
