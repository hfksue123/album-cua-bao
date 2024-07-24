<template>
  <loader-comp v-if="loading" />
  <div v-else>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import LoaderComp from "./components/LoaderComp.vue";

export default {
  name: "App",
  components: {
    NavBar,
    LoaderComp,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
:root {
  --bg-color: #2c3e50;
  --second-bg-color: #161616;
  --text-color: #fff;
  --main-color: #00ffee;
}
html::-webkit-scrollbar {
  width: 6px !important;
}

html::-webkit-scrollbar-track {
  background-color: var(--bg-color);
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
}

html::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
  border-radius: 5px;
  border: 2px solid var(--bg-color);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
