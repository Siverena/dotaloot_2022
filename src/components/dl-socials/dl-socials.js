import DlSocial from './dl-social/DlSocial.vue';
export default {
  name: 'DlSocials',
  components: {
    DlSocial,
  },
  data() {
    return {
      socials: [
        {
          name: 'vk',
          link: 'https://vk.com/dotaloot',
        },
        {
          name: 'telegram',
          link: 'https://vk.com/dotaloot',
        },
      ],
    };
  },
};
