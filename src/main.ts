import { createApp } from "vue";
import vuePdfVite from "../packages";
import App from "./App.vue";
import router from './router'


const app = createApp(App);
app.use(vuePdfVite).use(router);
app.mount("#app");
