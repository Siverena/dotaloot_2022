import DlCaseItem from '@/components/dl-case-item/DlCaseItem.vue';
import DlCase from '@/components/dl-cases/dl-case/DlCase.vue';
import DlCombination from '@/components/dl-combinations/dl-combination/DlCombination.vue';
export default {
  name: 'DlCaseItems',
  props: ['items', 'page', 'handleClick', 'gift'],
  components: {
    DlCaseItem,
    DlCase,
    DlCombination,
  },
  data() {
    return {
      casesTmp: [
        {
          name: 'HOOKMANIA',
          price: 49,
          type: 'items',
          tag: 'count',
          imgSrc: require('@/assets/img/dl-cases/cases/case1.png'),
          money: true,
        },
        {
          name: 'CUSTOM HERO CLASH',
          price: 1000,
          type: 'items',
          tag: 'count',
          imgSrc: require('@/assets/img/dl-cases/cases/case2.png'),
          money: true,
        },
      ],
      combinations: [
        {
          name: 'Sunstrike',
          color: 'orange',
          price: '125',
          profit: '235',
          countLeft: '345',
          contAll: '555',
          tag: 'новое',
          imgSrc: require('@/assets/img/dl-combinations/combinations/orange.png'),
          imgBg: require('@/assets/img/dl-combinations/combinations/orange_bg.png'),
        },
        {
          name: 'Cold Snap',
          color: 'rare',
          price: '2000',
          profit: '2500',
          countLeft: '85',
          contAll: '5',
          tag: 'выгодное',
          imgSrc: require('@/assets/img/dl-combinations/combinations/rare.png'),
          imgBg: require('@/assets/img/dl-combinations/combinations/rare_bg.png'),
        },
        {
          name: 'Cold Snap',
          color: 'rare',
          price: '2000',
          profit: '2500',
          countLeft: '85',
          contAll: '5',
          tag: 'выгодное',
          imgSrc: require('@/assets/img/dl-combinations/combinations/rare.png'),
          imgBg: require('@/assets/img/dl-combinations/combinations/rare_bg.png'),
        },
      ],
    };
  },
  computed: {
    hasNoItems() {
      return this.page === 'personal' && !this.items?.length;
    },
  },
};
