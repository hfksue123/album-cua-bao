import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Add all icons to the library
library.add(fas, far, fab);

// Import jQuery and Lightbox
import "jquery";
import "./registerServiceWorker";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
