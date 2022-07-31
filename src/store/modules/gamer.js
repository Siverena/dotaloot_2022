import axios from 'axios';
const API = (body) => {
  const response = axios.post('https://dotaloot.co/api/user/get/' + body);
  //   console.log('response: ', response);
  //   console.log(
  //     'response,then: ',
  //     response.then((data) => data.json())
  //   );
  return response;
  //   return axios.post('https://dotaloot.co/api/user/get/', body);
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
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
