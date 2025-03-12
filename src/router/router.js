import { createWebHashHistory, createRouter } from "vue-router";

import HeaderComp from "../components/Headers/Header1Comp.vue";
import Header2Comp from "@/components/Headers/Header2Comp.vue";
import AboutComp from "../components/AboutComp.vue";
import ModalInactive from "@/components/ModalInactive.vue";
import AlbumComp from "../components/AlbumComp.vue";
import FooterComp from "../components/FooterComp.vue";
import Error404Comp from "@/components/Error404Comp.vue";
import ProfileComp from "../components/ProfileComp.vue";
import AlbumTest from "@/components/AlbumTest.vue";
import AlbumInfo from "@/components/AlbumInfo.vue";
import Feedback from "@/components/FeedBackComp.vue";
//albums
import GigaAlbum from "@/components/Albums/GigaAlbum.vue";
import KtxAlbum from "@/components/Albums/KtxAlbum.vue";
import KtxAlbum2 from "@/components/Albums/KtxAlbum2.vue";
import HomeAlbum from "@/components/Albums/HomeAlbum.vue";
import HomeAlbum2 from "@/components/Albums/HomeAlbum2.vue";
import SaiGonAlbum from "@/components/Albums/SaiGonAlbum.vue";
import SaiGonAlbum2 from "@/components/Albums/SaiGonAlbum2.vue";
import ZooAlbum from "@/components/Albums/ZooAlbum.vue";

// test
const routes = [
  { path: "/", component: AlbumComp },
  //albums
  { path: "/giga", component: GigaAlbum },
  { path: "/home", component: HomeAlbum },
  { path: "/home2", component: HomeAlbum2 },
  { path: "/ktx", component: KtxAlbum },
  { path: "/ktx2", component: KtxAlbum2 },
  { path: "/sg", component: SaiGonAlbum },
  { path: "/sg2", component: SaiGonAlbum2 },
  { path: "/zoo", component: ZooAlbum },
  //pages
  { path: "/feedback", component: Feedback },
  { path: "/albumtest", component: AlbumTest },
  { path: "/modal", component: ModalInactive },
  { path: "/albuminfo", component: AlbumInfo },
  { path: "/404", component: Error404Comp },
  { path: "/:pathMatch(.*)*", component: AboutComp },
  { path: "/about", component: HeaderComp },
  { path: "/footer", component: FooterComp },
  { path: "/profile", component: ProfileComp },
  //headers
  { path: "/header1", component: HeaderComp },
  { path: "/header2", component: Header2Comp },
  // test
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
