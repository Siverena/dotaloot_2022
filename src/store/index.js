import { createStore } from 'vuex';
import auth from './modules/auth.js';
import adaptive from './modules/adaptive';

export default createStore({
  modules: {
    auth,
    adaptive,
  },
});
