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
      gamer: {},
    };
  },
  methods: {
    ...mapActions(['fethGamer']),
    async loadData() {
      try {
        this.loading = true;
        this.gamer = await this.fethGamer(this.$attrs.id);
        if (!this.getGamer) {
          return this.$router.push('/404');
        }
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
  beforeRouteUpdate() {
    this.loadData();
  },
  computed: {
    ...mapGetters(['getGamer']),
  },
  async created() {
    this.loadData();
  },
};
