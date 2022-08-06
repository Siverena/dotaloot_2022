export default {
  name: 'DlUserContract',
  props: ['item', 'compound', 'handleClick', 'index'],
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    getContractSum() {
      let sum = 0;
      this.compound.forEach((element) => {
        sum += element.item.price;
      });
      return sum;
    },
  },
};
