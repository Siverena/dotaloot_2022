export default {
  state: {
    isAuth: false,
  },
  getters: {
    getStatus(state) {
      return state;
    },
  },
  mutations: {
    CHANGE_AUTH(state, status) {
      state.isAuth = status;
    },
  },
  actions: {
    login(ctx) {
      let status = true;
      ctx.commit('CHANGE_AUTH', status);
    },
    logout(ctx) {
      let status = false;
      ctx.commit('CHANGE_AUTH', status);
    },
  },
};
