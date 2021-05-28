import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import axios from "axios";

import "element-ui/lib/theme-chalk/index.css";

const instance = axios.create({
    baseURL: "http://localhost:3000",
});

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = instance;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
