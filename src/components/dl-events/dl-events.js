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
          imgSrc: './events/event1.jpg',
          nameEvent: 'Восстание тьмы/Хеллоуин',
          price: '110',
        },
        {
          imgSrc: './events/event2.jpg',
          nameEvent: 'Холодрыжество/Frostivus',
          price: '150',
        },
        {
          imgSrc: './events/event3.jpg',
          nameEvent: 'Новоцвет/new bloom',
          price: '300',
        },
      ],
    };
  },
};
