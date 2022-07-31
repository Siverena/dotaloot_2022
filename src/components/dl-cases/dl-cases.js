import DlCase from './dl-case/DlCase.vue';
import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';

export default {
  name: 'DlCases',
  props: ['cases', 'catId'],

  components: {
    DlCase,
    DlSectionHeader,
  },
  data() {
    return {};
  },
};
