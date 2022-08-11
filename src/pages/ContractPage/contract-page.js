import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
import DlUserItems from '@/components/dl-user-contents/dl-user-items/DlUserItems.vue';
import testItems from './test-data/user-items';

export default {
  name: 'ContractPage',
  components: {
    DlSectionHeader,
    DlUserItems,
  },
  data() {
    return {
      userItems: testItems,
      isActive: false,
      contractItems: [],
      userItemsShow: [],
      numberOfShow: 15,
      isShowWin: false,
    };
  },
  computed: {
    canCreateContract() {
      return this.contractItems.length >= 3;
    },
  },
  methods: {
    toggleSort() {
      this.isActive = !this.isActive;
      this.userItems.reverse();
      this.getUsersItems();
    },
    toggleShowWin() {
      this.isShowWin = !this.isShowWin;
    },
    toggleItem(index, to) {
      if (to === 'contract') {
        if (
          this.contractItems.length >= 10 ||
          index > this.userItemsShow.length - 1
        ) {
          return;
        }
        this.contractItems.push(this.userItemsShow[index]);
        this.userItems.splice(index, 1);
        this.numberOfShow--;
      } else {
        if (index > this.contractItems.length - 1) {
          return;
        }
        this.userItems.push(this.contractItems[index]);
        this.contractItems.splice(index, 1);
        this.numberOfShow++;
      }
      this.sortItems();
    },
    sortItems() {
      this.userItems.sort((a, b) => b.item.price - a.item.price);
      this.getUsersItems();
    },
    clearContract() {
      this.userItems.push(...this.contractItems);
      this.numberOfShow += this.contractItems.length;
      this.contractItems = [];
      this.sortItems();
    },
    getSum() {
      // if (!this.user) return 0;
      return this.contractItems.reduce((a, b) => a + b.item.price, 0);
    },
    showMore() {
      this.userItemsShow.push(
        ...this.userItems.slice(
          this.userItemsShow.length,
          this.userItemsShow.length + 5
        )
      );
      this.numberOfShow += 5;
    },
    getUsersItems() {
      this.userItemsShow = this.userItems.slice(0, this.numberOfShow);
    },
  },
  created() {
    this.sortItems();
    this.getUsersItems();
  },
  mounted() {},
};
