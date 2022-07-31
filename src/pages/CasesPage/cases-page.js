import DlRaffles from '@/components/dl-raffles/DlRaffles.vue';
import DlCases from '@/components/dl-cases/DlCases.vue';
import DlBannerFreeItem from '@/components/dl-banner-free-item/DlBannerFreeItem.vue';
import DlEvents from '@/components/dl-events/DlEvents.vue';
import DlTrust from '@/components/dl-trust/DlTrust.vue';
import DlQuests from '@/components/dl-quests/DlQuests.vue';
import DlSlider from '@/components/dl-slider/dLSlider.vue';
import DlReviews from '@/components/dl-reviews/DlReviews.vue';
import DlLoader from '@/components/dl-loader/DlLoader.vue';
import DlButton from '@/elements/dl-button/DlButton.vue';
import Axios from 'axios';
export default {
  name: 'CasesPage',
  components: {
    DlRaffles,
    DlCases,
    DlBannerFreeItem,
    DlEvents,
    DlTrust,
    DlSlider,
    DlButton,
    DlQuests,
    DlReviews,
    DlLoader,
  },
  data() {
    return {
      loading: true,
      categories: {},
      casesTmp: [
        {
          name: 'С насмешкой',
          price: 49,
          type: 'items',
          tag: 'count',
          imgSrc: require('../../assets/img/dl-cases/cases/case1.png'),
          money: true,
        },
        {
          tag: 'new',
          price: '1103',
          name: 'С насмешкой',
          imgSrc: require('../../assets/img/dl-cases/cases/case2.png'),
          mana: true,
        },
        {
          tag: 'top',
          name: 'С насмешкой',
          imgSrc: require('../../assets/img/dl-cases/cases/case3.png'),
          free: true,
        },
        {
          tag: 'count',
          name: 'С насмешкой',
          imgSrc: require('../../assets/img/dl-cases/cases/case1.png'),
          gift: true,
        },
        {
          tag: 'new',
          name: 'С насмешкой',
          imgSrc: require('../../assets/img/dl-cases/cases/case2.png'),
          gift: true,
        },
      ],
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const response = await Axios.post('https://dotaloot.co/api/category/get');
      if (response.status !== 200) {
        return;
      }
      const { categories } = response.data;
      this.categories = categories;
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  },
};
