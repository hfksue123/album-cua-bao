<template>
  <div class="wrapper">
    <div class="top-section">
      <div class="logo">HFKSUE123</div>
      <nav class="navbar">
        <router-link to="/" @click="closeDropdown">Home</router-link>
        <router-link to="/giga" @click="closeDropdown">About Me</router-link>
        <router-link to="/profile" @click="closeDropdown">Info</router-link>
      </nav>

      <div class="toggle-btn" @click="toggleDropdown">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>

      <div class="dropdown" :class="{ open: isDropdownOpen }">
        <router-link to="/" @click="closeDropdown">Home</router-link>
        <router-link to="/giga" @click="closeDropdown">About Me</router-link>
        <router-link to="/profile" @click="closeDropdown">Info</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
  },
  // Close dropdown if clicked outside
  mounted() {
    document.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target) && this.isDropdownOpen) {
        this.closeDropdown();
      }
    });
  },
};
</script>

<style scoped src="../css/NavBar.css"></style>
