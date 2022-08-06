import DlUserItems from './dl-user-items/DlUserItems.vue';
import DlFilter from '@/components/dl-filter/DlFilter.vue';
import DlUserContracts from './dl-user-contracts/DlUserContracts.vue';
export default {
  name: 'DlUserContents',
  props: ['gamer', 'visible', 'page'],
  data() {
    return {
      // filterType 'box', 'contract', 'gift', 'upgrade'
      filterType: 'box',
      isActive: true,
    };
  },
  components: {
    DlFilter,
    DlUserItems,
    DlUserContracts,
  },
  computed: {
    filteredDrops() {
      let drops = [];
      if (this.isActive) {
        drops = this.gamer.drops
          .filter(
            (drop) =>
              drop.status === 0 ||
              drop.status === 5 ||
              (drop.offer && drop.offer.status < 2)
          )
          .sort((a, b) => b.id - a.id);
      } else {
        drops = this.gamer.drops
          .filter(
            (drop) =>
              drop.status !== 0 && !(drop.offer && drop.offer.status < 2)
          )
          .sort((a, b) => b.item.price - a.item.price);
      }
      return drops.sort((a) => (a.status === 5 ? -1 : 1));
    },
  },
  methods: {
    async changeType(filterType) {
      this.filterType = filterType;
    },
    async changeActive(status) {
      this.isActive = status;
    },
  },
};
