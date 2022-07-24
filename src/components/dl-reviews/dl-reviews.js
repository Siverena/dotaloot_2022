import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
import { VueAgile } from 'vue-agile';
import DlReview from './dl-review/DlReview.vue';
export default {
  name: 'DlReviews',
  components: {
    carousel: VueAgile,
    DlReview,
    DlSectionHeader,
  },
  data() {
    return {
      //mock для заполнения компонента DlReview
      reviews: [
        {
          id: '1',
          author: {
            id: '1',
            name: 'GURI МАКФЛУРИ',
            avatar: require('@/assets/img/dl-reviews/dl-reviews-avatar.jpg'),
          },
          date: new Date('2022-03-28'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '1',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '1',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUnuwhcA1_HTuK56MzfUkpLMBZEt4WkOQpznObaYjx9_8u_kpS0lPv1JPWCwTlX7pF32ruZo9_z3FC3qBI4MGCmco6VdANqNAnRq1Lrl-7mhMO9ot2Xns8Tpl7H',
          },
        },
        {
          id: '2',
          author: {
            id: '2',
            name: 'GURI МАКФЛУРИ',
            avatar: require('@/assets/img/dl-reviews/dl-reviews-avatar.jpg'),
          },
          date: new Date('2022-03-28'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '2',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '2',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUnuwhcA1_HTuK56MzfUkpLMBZEt4WkOQpznObaYjx9_8u_kpS0lPv1JPWCwTlX7pF32ruZo9_z3FC3qBI4MGCmco6VdANqNAnRq1Lrl-7mhMO9ot2Xns8Tpl7H',
          },
        },
        {
          id: '3',
          author: {
            id: '3',
            name: 'GURI МАКФЛУРИ',
            avatar: require('@/assets/img/dl-reviews/dl-reviews-avatar.jpg'),
          },
          date: new Date('2022-03-28'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '3',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '3',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUnuwhcA1_HTuK56MzfUkpLMBZEt4WkOQpznObaYjx9_8u_kpS0lPv1JPWCwTlX7pF32ruZo9_z3FC3qBI4MGCmco6VdANqNAnRq1Lrl-7mhMO9ot2Xns8Tpl7H',
          },
        },
      ],
    };
  },
};
