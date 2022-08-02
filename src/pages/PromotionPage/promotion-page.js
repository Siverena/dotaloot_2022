import { VueAgile } from 'vue-agile';
import DlCombinations from '@/components/dl-combinations/DlCombinations.vue';
import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
import DlBaseBanner from '@/components/dl-base-banner/DlBaseBanner.vue';
export default {
  name: 'PromotionPage',
  components: {
    carousel: VueAgile,
    DlCombinations,
    DlSectionHeader,
    DlBaseBanner,
  },
};
