import axios from "axios";
import router from "../../router/index";

const module1 = {
  namespaced: true,
  state: {
    count: 100000
  },
  mutations: {
    add: state => {
      state.count++;
      console.log("b");
    },
    minus: state => {
      state.count--;
      console.log("b");
      router.push({ name: "Login" });
    }
  },
  actions: {
    add: ({ commit }) => {
      commit("add");
      console.log("add1");
      axios
        .get("/login/ajax/doLogin.action", {
          params: {
            userAccount: 1,
            userPassword: 1
          }
        })
        .then(res => {
          console.log(222222222222222);
          console.log(res);
        });
      commit("add");
      console.log("add2");
    },
    minus: ({ commit }) => {
      console.log("执行minus-b");
      commit("minus");
    }
  }
};

// 111 222222222222  res  b
//b 111 222 res
export default module1;
