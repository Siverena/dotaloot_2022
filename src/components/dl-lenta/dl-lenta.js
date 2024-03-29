import DlItem from './dl-item/DlItem.vue';
import DlLoader from '@/components/dl-loader/DlLoader.vue';
import Axios from 'axios';
export default {
  name: 'DlLenta',
  data() {
    return {
      itemType: 'total',
      drops: [],
      loading: true,
      live_drops: [],
      top_drops: [],
      expensive_drop: {},
    };
  },
  components: {
    DlItem,
    DlLoader,
  },
  methods: {
    async changeType(itemType) {
      this.loading = true;
      this.itemType = itemType;
      this.getDrops();
    },
    async API(itemType) {
      return Axios.post('https://dotaloot.co/api/drop/get', {
        type: itemType,
      });
    },
    async getDrops() {
      this.loading = true;
      Axios.post('https://dotaloot.co/api/drop/get', { type: this.itemType })
        .then((response) => {
          if (this.itemType === 'total') {
            this.live_drops = response.data.drops;
          } else {
            this.top_drops = response.data.drops;
          }
          this.drops = response.data.drops;
          this.exspensive_drop = response.data.drops[0];
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
  created() {
    this.loading = true;
  },
  async mounted() {
    this.getDrops();
  },
};
