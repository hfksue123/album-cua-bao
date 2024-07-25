<template>
  <div class="wrapper">
    <div class="top-section" :class="{ shrink: isShrunk }">
      <div class="logo" :class="{ shrink: isShrunk }">HFKSUE123</div>
      <nav class="navbar" :class="{ shrink: isShrunk }">
        <router-link to="/" @click="closeDropdown">Home</router-link>
        <router-link to="/giga" @click="closeDropdown">About Me</router-link>
        <router-link to="/albumtest" @click="closeDropdown">Info</router-link>
      </nav>
      <div
        class="toggle-btn"
        :class="{ shrink: isShrunk }"
        @click="toggleDropdown"
      >
        <font-awesome-icon
          :icon="['fas', 'bars']"
          :class="{ shrink: isShrunk }"
        />
      </div>
      <div class="dropdown" :class="{ open: isDropdownOpen }">
        <router-link to="/" @click="closeDropdown">Home</router-link>
        <router-link to="/giga" @click="closeDropdown">About Me</router-link>
        <router-link to="/albumtest" @click="closeDropdown">Info</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      isShrunk: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    handleScroll() {
      this.isShrunk = window.scrollY > 50;
    },
  },
  mounted() {
    document.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target) && this.isDropdownOpen) {
        this.closeDropdown();
      }
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped src="../css/NavBar.css"></style>
