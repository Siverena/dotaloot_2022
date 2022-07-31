import { createStore } from 'vuex';
import auth from './modules/auth.js';
import gamer from './modules/gamer.js';

export default createStore({
  modules: {
    auth,
    gamer,
  },
});
