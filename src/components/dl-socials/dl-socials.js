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
          imgSrc: require('../../assets/img/dl-socials/socials/vk.png'),
        },
        {
          name: 'telegram',
          link: 'https://vk.com/dotaloot',
          imgSrc: require('../../assets/img/dl-socials/socials/telegram.png'),
        },
      ],
    };
  },
};
