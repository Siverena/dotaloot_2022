import DlItem from './dl-item/DlItem.vue';
// import AsyncItem from './dl-item/DlItem.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'DlLenta',
  data() {
    return { itemType: 'total' };
  },
  components: {
    DlItem,
  },
  methods: {
    ...mapActions(['fethDrops']),
    changeType(itemType) {
      this.itemType = itemType;
      this.fethDrops(this.itemType);
    },
  },
  created() {
    this.loading = true;
  },
  computed: {
    ...mapGetters(['getDrops', 'getLoading']),
  },
  async mounted() {
    this.fethDrops(this.itemType);
  },
};
