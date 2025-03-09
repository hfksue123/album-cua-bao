import { createWebHashHistory, createRouter } from "vue-router";

import HeaderComp from "../components/Headers/Header1Comp.vue";
import AboutComp from "../components/AboutComp.vue";
import AlbumComp from "../components/AlbumComp.vue";
import FooterComp from "../components/FooterComp.vue";
import Error404Comp from "@/components/Error404Comp.vue";
import ProfileComp from "../components/ProfileComp.vue";
import GigaAlbum from "@/components/Albums/GigaAlbum.vue";
import AudioComp from "@/components/AudioComp.vue";
import ModalInactive from "@/components/ModalInactive.vue";
import Header2Comp from "@/components/Headers/Header2Comp.vue";
import AlbumTest from "@/components/AlbumTest.vue";
import AlbumInfo from "@/components/AlbumInfo.vue";
import KtxAlbum from "@/components/Albums/KtxAlbum.vue";
import KtxAlbum2 from "@/components/Albums/KtxAlbum2.vue";
import HomeAlbum from "@/components/Albums/HomeAlbum.vue";
// test

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
  { path: "/albuminfo", component: AlbumInfo },
  { path: "/ktx", component: KtxAlbum },
  { path: "/ktx2", component: KtxAlbum2 },
  { path: "/404", component: Error404Comp },
  { path: "/:pathMatch(.*)*", component: AboutComp },
  // test
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
