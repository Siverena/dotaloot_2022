import axios from 'axios';
const API = (body) => {
  const response = axios.post('https://dotaloot.co/api/user/get/' + body);
  return response;
};
export default {
  state: {
    gamer: {},
  },
  getters: {
    getGamer(state) {
      return state.gamer;
    },
  },
  mutations: {
    SET_GAMER(state, gamer) {
      state.gamer = gamer;
    },
  },
  actions: {
    fethGamer({ commit }, id) {
      return API(id)
        .then((response) => {
          const userTmp = response.data;
          if (userTmp) {
            commit('SET_GAMER', userTmp.user);
            return userTmp.user;
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
