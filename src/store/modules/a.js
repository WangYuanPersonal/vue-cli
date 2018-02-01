const module2 = {
  namespaced: true,
  state: {
    count: 10
  },
  mutations: {
    add: state => {
      state.count++;
      console.log("a");
    },
    minus: state => {
      state.count--;
      console.log("a");
    }
  },
  actions: {
    add: ({ commit }) => {
      commit("add");
      console.log("执行add-a");
    },
    minus: ({ commit }) => {
      commit("minus");
      console.log("执行minus-a");
    }
  },
  getters: {
    count: state => {
      return state.count;
    }
  }
};
export default module2;
