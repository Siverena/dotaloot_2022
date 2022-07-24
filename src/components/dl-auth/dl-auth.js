import DlAuthBefore from './dl-auth-before/DlAuthBefore.vue';
import DlAuthAfter from './dl-auth-after/DlAuthAfter.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'DlAuth',
  components: {
    DlAuthBefore,
    DlAuthAfter,
  },
  computed: { ...mapGetters(['getStatus']) },
  mounted() {},
};
