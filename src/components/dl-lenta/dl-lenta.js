import DlItems from './dl-items/DlItems.vue';
import DlLoader from '@/components/dl-loader/DlLoader.vue';
import Axios from 'axios';
export default {
  name: 'DlLenta',
  data() {
    return { itemType: 'total', drops: [], loading: true };
  },
  components: {
    DlItems,
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
          console.log('response: ', response);
          this.drops = response.data.drops;
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
