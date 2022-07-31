export default {
  state: {
    windowWidth: 0,
  },
  getters: {
    isMobileVersion(state) {
      return state.windowWidth < 834;
    },
    isTabVersion(state) {
      return state.windowWidth > 834 && this.windowWidth < 1440;
    },
    isDesktopVersion(state) {
      return state.windowWidth > 1440;
    },
  },
  mutations: {
    CHANGE_WIDTH(state, width) {
      state.windowWidth = width;
    },
  },
  actions: {
    updateWidth(ctx) {
      ctx.commit('CHANGE_WIDTH', document.documentElement.clientWidth);
    },
  },
};
