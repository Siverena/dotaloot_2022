import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
import DlProfileInfo from '@/components/dl-profile-info/DlProfileInfo.vue';
import DlBaseBanner from '@/components/dl-base-banner/DlBaseBanner.vue';
import DlLoader from '@/components/dl-loader/DlLoader.vue';
import DlUserContents from '@/components/dl-user-contents/DlUserContents.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProfilePage',
  components: {
    DlSectionHeader,
    DlProfileInfo,
    DlBaseBanner,
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
