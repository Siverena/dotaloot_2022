import DlCases from '@/components/dl-cases/DlCases.vue';
import DlLoader from '@/components/dl-loader/DlLoader.vue';
import Axios from 'axios';

export default {
  name: 'CasesPage',
  components: {
    DlCases,
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
