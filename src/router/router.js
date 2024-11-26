import { createWebHistory, createRouter } from "vue-router";

import HeaderComp from "../components/Headers/Header1Comp.vue";
import AboutComp from "../components/AboutComp.vue";
import AlbumComp from "../components/AlbumComp.vue";
import FooterComp from "../components/FooterComp.vue";
// import ErrorComp from "../components/ErrorComp.vue";
import ProfileComp from "../components/ProfileComp.vue";
import GigaAlbum from "@/components/Albums/GigaAlbum.vue";
import AudioComp from "@/components/AudioComp.vue";
import ModalInactive from "@/components/ModalInactive.vue";
import Header2Comp from "@/components/Headers/Header2Comp.vue";
import AlbumTest from "@/components/AlbumTest.vue";
import AlbumCompCopy from "@/components/AlbumComp copy.vue";
import KtxAlbum from "@/components/Albums/KtxAlbum.vue";
import KtxAlbum2 from "@/components/Albums/KtxAlbum2.vue";
import HomeAlbum from "@/components/Albums/HomeAlbum.vue";

const routes = [
  { path: "/", component: AlbumComp },
  { path: "/about", component: HeaderComp },
  { path: "/footer", component: FooterComp },
  { path: "/profile", component: ProfileComp },
  { path: "/header1", component: HeaderComp },
  { path: "/header2", component: Header2Comp },
  { path: "/giga", component: GigaAlbum },
  { path: "/home", component: HomeAlbum },
  { path: "/albumtest", component: AlbumTest },
  { path: "/modal", component: ModalInactive },
  { path: "/audio", component: AudioComp },
  { path: "/albumcoppy", component: AlbumCompCopy },
  { path: "/ktx", component: KtxAlbum },
  { path: "/ktx2", component: KtxAlbum2 },
  { path: "/:pathMatch(.*)*", component: AboutComp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
