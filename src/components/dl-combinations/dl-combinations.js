import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
import DlCombination from './dl-combination/DlCombination.vue';
export default {
  name: 'DlCombinations',
  components: {
    DlSectionHeader,
    DlCombination,
  },
  data() {
    return {
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
          name: 'EMP',
          color: 'legendary',
          price: '20000',
          profit: '20100',
          countLeft: '25525',
          contAll: '4554544',
          tag: 'приятное',
          imgSrc: require('@/assets/img/dl-combinations/combinations/legendary.png'),
          imgBg: require('@/assets/img/dl-combinations/combinations/legendary_bg.png'),
        },
        {
          name: 'Tornado',
          color: 'mythical',
          price: '5',
          profit: '10',
          countLeft: '25',
          contAll: '54443',
          tag: ' избранным',
          imgSrc: require('@/assets/img/dl-combinations/combinations/mythical.png'),
          imgBg: require('@/assets/img/dl-combinations/combinations/mythical_bg.png'),
        },
        {
          name: 'Chaos Meteor',
          color: 'season',
          price: '15',
          profit: '18',
          countLeft: '45824',
          contAll: '515056',
          tag: 'хит',
          imgSrc: require('@/assets/img/dl-combinations/combinations/season.png'),
          imgBg: require('@/assets/img/dl-combinations/combinations/season_bg.png'),
        },
      ],
    };
  },
};
