import { mapActions } from 'vuex';
export default {
  name: 'DlAuthAfter',
  props: ['user'],
  data() {
    return {
      isMenuSow: false,
    };
  },
  methods: {
    openMenu: function () {
      this.isMenuSow = !this.isMenuSow;
    },
    closeMenu: function (evt) {
      if (evt.target.classList.contains('dl-auth-after__menu-link')) {
        this.isMenuSow = !this.isMenuSow;
      }
    },
    ...mapActions(['logout']),
  },
};
