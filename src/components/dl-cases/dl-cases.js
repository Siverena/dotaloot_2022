import DlCase from './dl-case/DlCase.vue';
import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
export default {
  name: 'DlCases',
  components: {
    DlCase,
    DlSectionHeader,
  },
  data() {
    return {
      cases: [
        {
          tag: 'count',
          price: '1105',
          oldPrice: '1401',
          name: 'С насмешкой',
          imgSrc: require('../../assets/img/dl-cases/cases/case1.png'),
          money: true,
        },
        {
          tag: 'new',
          price: '1103',
          oldPrice: '1404',
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
};
