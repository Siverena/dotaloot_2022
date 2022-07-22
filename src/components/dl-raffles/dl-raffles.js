import DlRaffle from './dl-raffle/DlRaffle.vue';
export default {
  name: 'DlRaffles',
  components: {
    DlRaffle,
  },
  data() {
    return {
      raffles: [
        {
          itemName: 'Feast of Abscession',
          price: '1324,45',
          leftTimetime: '10000',
          iterationMode: 'everyday',
          itemLink:
            'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU4vBxaSV7eRvG5mMjWXVhmLAdoob-1FAVy3PLMYipN_tj4wtXYxqOnZuuIlz5UscZz2ejH9tSl3QLnrkQ_MD-nJ4XBclQ8Yg3R_0_-n7lsF3BgiA',
        },
        {
          itemName: 'Blades of Voth Domosh',
          price: '624',
          leftTimetime: '168',
          iterationMode: 'everyweek',
          itemLink:
            'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUnuwhcA1_HTuK56MzfUkpLMBZEt4WkOQpznObaYjx9_8u_kpS0lPv1JPWCwTlX7pF32ruZo9_z3FC3qBI4MGCmco6VdANqNAnRq1Lrl-7mhMO9ot2Xns8Tpl7H',
        },
        {
          itemName: 'Manifold Paradox',
          price: '2096',
          leftTimetime: '168',
          iterationMode: 'everymonth',
          itemLink:
            'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUioRpTWEPdeOW-xM7AQFR6aglWuLOjJAtk7OPJYzxG48T5lZKIlvn1DKvQ2G5Sv8Nz077Co9XxjATn-EJqZW71I4-RIwdrYVvXrle4wr2-g5O_u8_XiSw0XFCd1cI',
        },
      ],
    };
  },
};
