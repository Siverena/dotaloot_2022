import { mapActions } from 'vuex';
export default {
  name: 'DlAuthAfter',
  data() {
    return {
      isMenuSow: false,
    };
  },
  methods: {
    openMenu: function (evt) {
      this.isMenuSow = !this.isMenuSow;
      console.log(evt.target);
    },
    closeMenu: function (evt) {
      if (evt.target.classList.contains('dl-auth-after__menu-link')) {
        this.isMenuSow = !this.isMenuSow;
      }
    },
    ...mapActions(['logout']),
  },
};
