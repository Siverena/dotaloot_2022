import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
import DlProfileInfo from '@/components/dl-profile-info/DlProfileInfo.vue';
import DlBannerReplenishWisely from '@/components/dl-banner-replenish-wisely/DlBannerReplenishWisely.vue';
import DlLoader from '@/components/dl-loader/DlLoader.vue';
import DlUserContents from '@/components/dl-user-contents/DlUserContents.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProfilePage',
  components: {
    DlSectionHeader,
    DlProfileInfo,
    DlBannerReplenishWisely,
    DlLoader,
    DlUserContents,
  },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    ...mapActions(['fethGamer']),
    async loadData() {
      this.loading = true;
      await this.fethGamer(this.$attrs.id);
      this.loading = await false;
    },
  },
  beforeRouteUpdate() {
    this.loadData();
  },
  computed: {
    ...mapGetters(['getGamer']),
  },
  async mounted() {
    this.loadData();
  },
};
