import { createMemoryHistory, createRouter } from "vue-router";

import HeaderComp from "../components/Headers/Header1Comp.vue";
import AboutComp from "../components/AboutComp.vue";
import AlbumComp from "../components/AlbumComp.vue";
import FooterComp from "../components/FooterComp.vue";
// import ErrorComp from "../components/ErrorComp.vue";
import ProfileComp from "../components/ProfileComp.vue";
import GigaAlbum from "@/components/Albums/GigaAlbum.vue";
import ModalInactive from "@/components/ModalInactive.vue";
import Header2Comp from "@/components/Headers/Header2Comp.vue";
import AlbumTest from "@/components/AlbumTest.vue";

const routes = [
  { path: "/", component: AlbumComp },
  { path: "/about", component: HeaderComp },
  { path: "/footer", component: FooterComp },
  { path: "/profile", component: ProfileComp },
  { path: "/header1", component: HeaderComp },
  { path: "/header2", component: Header2Comp },
  { path: "/giga", component: GigaAlbum },
  { path: "/albumtest", component: AlbumTest },
  { path: "/modal", component: ModalInactive },
  { path: "/:pathMatch(.*)*", component: AboutComp },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
