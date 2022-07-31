import DlHeader from '../components/dl-header/DlHeader.vue';
import DlFooter from '../components/dl-footer/DlFooter.vue';
import DlLenta from '@/components/dl-lenta/DlLenta.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    DlHeader,
    DlFooter,
    DlLenta,
  },
  methods: {
    ...mapGetters(['isMobileVersion', 'isTabVersion']),
    ...mapActions(['updateWidth']),
  },
  created() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  },
};
