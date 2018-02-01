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
    }
  },
  actions: {
    add: ({ commit }) => {
      commit("add");
      console.log("执行add-b");
    },
    minus: ({ commit }) => {
      commit("minus");
      console.log("执行minus-b");
    }
  }
};
export default module1;
