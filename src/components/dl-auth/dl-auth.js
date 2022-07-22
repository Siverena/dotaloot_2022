import DlAuthBefore from './dl-auth-before/DlAuthBefore.vue';
import DlAuthAfter from './dl-auth-after/DlAuthAfter.vue';
export default {
  name: 'DlAuth',
  components: {
    DlAuthBefore,
    DlAuthAfter,
  },
  data() {
    return {
      isAuth: true,
    };
  },
};
