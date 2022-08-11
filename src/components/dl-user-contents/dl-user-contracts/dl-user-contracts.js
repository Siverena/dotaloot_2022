import DlUserContract from './dl-user-contract/DlUserContract.vue';
import DlUserContractDetail from './dl-user-contract-detail/DlUserContractDetail.vue';
export default {
  name: 'DlUserContracts',
  props: ['contracts'],

  components: {
    DlUserContract,
    DlUserContractDetail,
  },
  data() {
    return {
      currentContract: {},
      visibleDetail: false,
    };
  },
  methods: {
    showDetailContract(index) {
      this.currentContract = this.contracts[index];
      this.visibleDetail = true;
    },
  },
};
