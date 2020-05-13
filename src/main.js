import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import("@/assets/css/com.css");

// import service from './service/index'

process.env.VUE_APP_MOCK && require("./service/mock");

Vue.config.productionTip = false;
// Vue.prototype.$service=service;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
