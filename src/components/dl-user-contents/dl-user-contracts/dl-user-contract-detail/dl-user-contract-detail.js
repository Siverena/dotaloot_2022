export default {
  name: 'DlUserContractDetail',
  props: ['contract'],
  computed: {
    сontractSum() {
      let sum = 0;
      this.contract.items.forEach((element) => {
        sum += element.item.price;
      });
      return sum;
    },
  },
};
