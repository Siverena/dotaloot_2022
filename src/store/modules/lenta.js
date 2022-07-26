import Axios from 'axios';
export default {
  state: {
    drops: [],
    itemType: 'total',
    loading: true,
  },
  getters: {
    getLiveDrops(state) {
      return state.live_drops;
    },
    getTopDrops(state) {
      return state.top_drops;
    },
    getDrops(state) {
      return state.drops;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    SET_DROPS_LIVE(state, drops) {
      state.live_drops = drops;
    },
    SET_DROPS_TOP(state, drops) {
      state.top_drops = drops;
    },
    SET_DROPS(state, drops) {
      state.drops = drops;
    },
    CHANGE_LOADING(state, status) {
      state.loading = status;
    },
  },
  actions: {
    async fethDrops(ctx, itemType) {
      try {
        const response = await Axios.post('https://dotaloot.co/api/drop/get', {
          type: itemType,
        });

        if (response.status !== 200) {
          return;
        }
        const { drops } = response.data;
        console.log(drops);
        ctx.commit('SET_DROPS', drops);
        ctx.commit('CHANGE_LOADING', false);

        // if (this.type === 'total') {
        //   ctx.commit('SET_DROPS_LIVE', drops);
        // } else {
        //   ctx.commit('SET_DROPS_TOP', drops);
        // }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
