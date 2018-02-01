import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import a from "./modules/a";
import b from "./modules/b";

export default new Vuex.Store({
  strict: true,
  modules: {
    a,
    b
  }
});
