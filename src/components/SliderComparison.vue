<template>
  <div
    class="beer-slider"
    ref="beerSlider"
    :data-beer-label="beforeLabel"
    :data-start="start"
  >
    <img :src="beforeImage" :alt="beforeAlt" />
    <div class="beer-reveal" :data-beer-label="afterLabel">
      <img :src="afterImage" :alt="afterAlt" />
    </div>
  </div>
</template>

<script>
import BeerSlider from "beerslider"; // Import thư viện BeerSlider
import "beerslider/dist/BeerSlider.css";

export default {
  props: {
    beforeImage: { type: String, required: true },
    afterImage: { type: String, required: true },
    beforeLabel: { type: String, default: "" },
    afterLabel: { type: String, default: "" },
    beforeAlt: { type: String, default: "Before Image" },
    afterAlt: { type: String, default: "After Image" },
    clickToMove: { type: Boolean, default: true },
    start: { type: Number, default: 50 },
    sliderColor: { type: String, default: "" }, // Màu thanh trượt
    sliderWidth: { type: Number, default: 1 }, // Độ rộng thanh trượt
    showLabels: { type: Boolean, default: true }, // Hiển thị nhãn Before/After
    labelPosition: { type: String, default: "bottom" }, // Vị trí nhãn ('top' | 'bottom' | 'center')
    transition: { type: Boolean, default: true }, // Hiệu ứng chuyển đổi mượt
  },
  mounted() {
    new BeerSlider(this.$refs.beerSlider, { start: this.start });
  },
};
</script>

<style scoped>
.beer-slider {
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}
</style>
