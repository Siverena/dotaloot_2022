export default {
  state: {
    windowWidth: 0,
    version: 'desktop',
  },
  getters: {
    getVersion(state) {
      return state.version;
    },
    isMobileVersion(state) {
      return state.windowWidth < 833;
    },
    isTabVersion(state) {
      return state.windowWidth >= 833 && state.windowWidth < 1440;
    },
    isDesktopVersion(state) {
      return state.windowWidth >= 1440;
    },
  },
  mutations: {
    CHANGE_WIDTH(state, width) {
      state.windowWidth = width;
    },
    CHANGE_VERSION(state) {
      if (state.windowWidth < 833) {
        state.version = 'mobile';
      }
      if (state.windowWidth >= 833 && state.windowWidth < 1440) {
        state.version = 'tablet';
      }
      if (state.windowWidth >= 1440) {
        state.version = 'desktop';
      }
    },
  },
  actions: {
    updateWidth(ctx) {
      ctx.commit('CHANGE_WIDTH', document.documentElement.clientWidth);
      ctx.commit('CHANGE_VERSION');
    },
  },
};
