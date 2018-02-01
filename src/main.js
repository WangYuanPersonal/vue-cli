// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import qs from "qs";
import http from "./assets/js/http";
import store from "./store";

import "./assets/css/reset.css";
import "./assets/css/common.css";

Vue.config.productionTip = false;
Vue.prototype.qs = qs;
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
