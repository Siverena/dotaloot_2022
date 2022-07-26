import DlItem from '../dl-item/DlItem.vue';
export default {
  name: 'DlItems',
  props: ['drops'],
  data() {
    return {
      ddr: this.drops,
    };
  },
  components: {
    DlItem,
  },
  computed: {
    getDrops() {
      return this.drops;
    },
  },
  watch: {
    ddr() {
      console.log(this.ddr);
    },
  },
};
