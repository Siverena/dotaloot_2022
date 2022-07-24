import DlEvent from './dl-event/DlEvent.vue';
import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
export default {
  name: 'DlEvents',
  components: {
    DlEvent,
    DlSectionHeader,
  },
  data() {
    return {
      events: [
        {
          nameEvent: 'Восстание тьмы/ Хеллоуин',
          price: '110',
          imgSrc: require('../../assets/img/dl-events/events/event1.jpg'),
        },
        {
          nameEvent: 'Холодрыжество/ Frostivus',
          price: '150',
          imgSrc: require('../../assets/img/dl-events/events/event2.jpg'),
        },
        {
          nameEvent: 'Новоцвет/ new bloom',
          price: '300',
          imgSrc: require('../../assets/img/dl-events/events/event3.jpg'),
        },
      ],
    };
  },
};
