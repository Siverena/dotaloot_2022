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
        },
        {
          name: 'Cold Snap',
          color: 'rare',
          price: '2000',
          profit: '2500',
          countLeft: '85',
          contAll: '5',
          tag: 'выгодное',
        },
        {
          name: 'EMP',
          color: 'legendary',
          price: '20000',
          profit: '20100',
          countLeft: '25525',
          contAll: '4554544',
          tag: 'приятное',
        },
        {
          name: 'Tornado',
          color: 'mythical',
          price: '5',
          profit: '10',
          countLeft: '25',
          contAll: '54443',
          tag: ' избранным',
        },
        {
          name: 'Chaos Meteor',
          color: 'season',
          price: '15',
          profit: '18',
          countLeft: '45824',
          contAll: '515056',
          tag: 'хит',
        },
      ],
    };
  },
};
