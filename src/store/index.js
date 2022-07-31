import { createStore } from 'vuex';
import auth from './modules/auth.js';
import adaptive from './modules/adaptive';
import gamer from './modules/gamer.js';

export default createStore({
  modules: {
    auth,
    adaptive,
    gamer,
  },
});
