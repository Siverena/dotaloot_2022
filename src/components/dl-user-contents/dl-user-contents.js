import DlUserItems from './dl-user-items/DlUserItems.vue';
import DlFilter from '@/components/dl-filter/DlFilter.vue';
import DlUserContracts from './dl-user-contracts/DlUserContracts.vue';
import testContracts from '@/test-data/contracts';

export default {
  name: 'DlUserContents',
  props: ['gamer', 'visible', 'page'],
  data() {
    return {
      // filterType 'box', 'contract', 'gift', 'upgrade'
      filterType: 'box',
      isActive: true,
      numberOfDisplayedItems: 10,
      numberOfDisplayedContracts: 10,
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
    itemsCount() {
      if (this.isPersonalPage) {
        console.log('filteredDrops.length: ', this.filteredDrops.length);
        return this.filteredDrops.length;
      } else {
        console.log('gamer.drops.length: ', this.gamer.drops.length);
        return this.gamer.drops ? this.gamer.drops.length : 0;
      }
    },
    displayedItems() {
      return this.isPersonalPage
        ? this.filteredDrops.slice(0, this.numberOfDisplayedItems)
        : this.gamer.drops.slice(0, this.numberOfDisplayedItems);
    },
    displayedContracts() {
      return this.gamer.contracts.slice(0, this.numberOfDisplayedContracts);
    },
    isPersonalPage() {
      return this.page === 'personal';
    },
  },
  methods: {
    async changeType(filterType) {
      this.filterType = filterType;
    },
    async changeActive(status) {
      this.isActive = status;
    },
    showMore() {
      if (this.filterType === 'box') {
        this.numberOfDisplayedItems += 5;
        if (this.numberOfDisplayedItems > this.gamer.drops.length) {
          this.numberOfDisplayedItems = this.gamer.drops.length;
        }
      }
      if (this.filterType === 'contract') {
        this.numberOfDisplayedContracts += 5;
        if (this.numberOfDisplayedContracts > this.gamer.contracts.length) {
          this.numberOfDisplayedContracts = this.gamer.contracts.length;
        }
      }
    },
  },
  beforeMount() {
    this.gamer.contracts = testContracts;
    this.numberOfDisplayedContracts = Math.min(this.gamer.contracts.length, 10);
    if (this.isPersonalPage) {
      this.numberOfDisplayedItems = Math.min(this.filteredDrops.length, 9);
    } else {
      this.numberOfDisplayedItems = Math.min(this.gamer.drops.length, 10);
    }
  },
};
