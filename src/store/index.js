import { createStore } from 'vuex';
import auth from './modules/auth.js';
import lenta from './modules/lenta.js';

export default createStore({
  modules: {
    auth,
    lenta,
  },
});
