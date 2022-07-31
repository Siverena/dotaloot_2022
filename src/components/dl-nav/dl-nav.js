export default {
  name: 'DlNav',
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showMenu() {
      this.isShow = !this.isShow;
    },
  },
};
