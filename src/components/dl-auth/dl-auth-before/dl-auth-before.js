import { mapActions } from 'vuex';
export default {
  name: 'DlAuthBefore',
  methods: {
    ...mapActions(['login']),
  },
};
