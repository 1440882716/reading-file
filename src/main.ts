import { createApp } from "vue";
import vuePdfVite from "../packages";
import App from "./App.vue";
import router from './router'
// import * as WPS from './static/jwps.es6'
// const WPS = require('./static/jwps.es6')
import "vant/lib/index.css"
import { ConfigProvider } from 'vant';


const app = createApp(App);
app.use(vuePdfVite).use(router).use(ConfigProvider);
app.mount("#app");
// app.config.globalProperties.$wps = WPS;
// app.config.globalProperties.$toast = Toast;
