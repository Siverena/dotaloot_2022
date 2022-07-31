export default {
  state: {
    isAuth: false,
    user: {
      id: 9,
      uuid: '3422ad10-cd07-478b-ac31-d42e9a4290ea',
      name: 'Anna Biktimirova',
      avatar:
        'https://sun1-26.userapi.com/s/v1/if1/fKF81RvFb2H_xAOYVB4iqiVjTPklHEYXQYA4XFg4p7ZKpLnShTWLqugxpCA1KeYpKTKzHdM9.jpg?size=200x200&quality=96&crop=1361,95,1036,1036&ava=1',
      balance: 9,
      loot_balance: 47,
      trade_link:
        'https://steamcommunity.com/tradeoffer/new/?partner=470377819&token=sFJs_wX3',
      login_steam: null,
      qiwi: null,
      provider_id: '21047866',
      is_banned: 0,
      is_admin: 0,
      provider: 'vkontakte',
      refId: null,
      lastPromoLinkId: null,
      createdAt: '2019-07-29T06:08:30.831Z',
      free_cases: [],
    },
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
      this.$router.push('/');
    },
  },
};
