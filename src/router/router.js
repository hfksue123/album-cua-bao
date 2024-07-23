import { createMemoryHistory, createRouter } from "vue-router";

import HeaderComp from "../components/HeaderComp.vue";
import AboutComp from "../components/AboutComp.vue";
import AlbumComp from "../components/AlbumComp.vue";
import FooterComp from "../components/FooterComp.vue";
// import ErrorComp from "../components/ErrorComp.vue";
import ProfileComp from "../components/ProfileComp.vue";
import GigaAlbum from "@/components/Albums/GigaAlbum.vue";

const routes = [
  { path: "/", component: AlbumComp },
  { path: "/about", component: HeaderComp },
  { path: "/footer", component: FooterComp },
  { path: "/profile", component: ProfileComp },
  { path: "/header1", component: HeaderComp },
  { path: "/giga", component: GigaAlbum },
  { path: "/:pathMatch(.*)*", component: AboutComp },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
