import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
import { VueAgile } from 'vue-agile';
import { mapGetters } from 'vuex';
import DlReview from './dl-review/DlReview.vue';
import { ref, reactive } from 'vue';
export default {
  name: 'DlReviews',
  components: {
    carousel: VueAgile,
    DlReview,
    DlSectionHeader,
  },
  data() {
    return {
      version: reactive({ ver: ref('') }),
      //mock для заполнения компонента DlReview
      reviews: [
        {
          id: '1',
          author: {
            id: '1',
            name: 'GURI МАКФЛУРИ',
            avatar: require('@/assets/img/dl-reviews/dl-reviews-avatar.jpg'),
          },
          date: new Date('2022-02-28'),
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
            id: '4ff54f07-385d-4e69-8395-b1276756e700',
            name: 'OKITA SOUJI',
            avatar:
              'https://avatars.akamai.steamstatic.com/239765e6061c1e5e9ea779987bad1ed318bfde07_full.jpg',
          },
          date: new Date('2022-03-27'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '2',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '2',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXP7g1bJ4Q1lgheXknVSffiwM7BXlx3LQ1Zs4WpJAZkwPDaIWwMtIywzNXTlPP2Z-qGxzgEvsEo3OqW89n2jgW3-kA5Yjr1LICSewQ3YUaQpAbrIAHiKg',
          },
        },
        {
          id: '3',
          author: {
            id: '4ff54f07-385d-4e69-8395-b1276756e700',
            name: 'OKITA SOUJI',
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
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUhogJKXk3ET9ug1sjWHE5_PBNFt66tFBNpiszBfDBN_si3mL-JlvT_fKjaj3xD6dF5tf3IrLP8hVm7uQc9PwahddXOcxg2YAyG-FXswue-1se0vJTOyycwuSMg4SuOmUe0hR1ParRr0PbKSQ-fGeUXS1L8vzX_',
          },
        },
        {
          id: '4',
          author: {
            id: '4ff54f07-385d-4e69-8395-b1276756e700',
            name: 'УЗНИК',
            avatar:
              'https://avatars.akamai.steamstatic.com/5e3a3116866d195e6b9a5796973720689dd5e366_full.jpg',
          },
          date: new Date('2022-04-18'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '4',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '4',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUlqAlRQ0_bCOOi28reHEl8IDtDuaimIwVl0uHNY3JW5NmJgI-ZlP_2NrrDk3lu5tVyte3O4Y3Kn1Wmpxw_OAake9rALxg7ZVvWrle-x-vngJW_uM-cmnJr6Sh34Szbl0Tj1UlEauxs0PfMGgrNGeUXS-MId5j8',
          },
        },
        {
          id: '5',
          author: {
            id: '45a197f3-74b9-4aff-86d8-80bb4b71efc4',
            name: 'менеджер кристина',
            avatar:
              'https://avatars.akamai.steamstatic.com/c4c6545c7dd5926232a718d09c4020e6909243d4_full.jpg',
          },
          date: new Date('2022-04-28'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '5',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '5',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUlqAlRQ0_bCOOi28reHEl8IDtDuaimIwVl0uHNY3JW5NmJgI-ZlP_2NrrDk3lu5tVyte3O4Y3Kn1Wmpxw_OAake9rALxg7ZVvWrle-x-vngJW_uM-cmnJr6Sh34Szbl0Tj1UlEauxs0PfMGgrNGeUXS-MId5j8',
          },
        },
        {
          id: '6',
          author: {
            id: '3d2e4851-8163-4b82-932d-548f7f1c352a',
            name: 'дед инсайд (настоящий!)',
            avatar:
              'https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
          },
          date: new Date('2022-05-19'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '6',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '6',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU4vBxaSV7eRvG5mNzWQU91LhFFt_W2LhVy0vjdYzwM6Y3hxdbfwKD1YOyCzjJSvJIl0u_A8N2h2wzkqkBpZmryIoTHc1Q-N0aQpAZ5a-uikg/108fx108f',
          },
        },
        {
          id: '7',
          author: {
            id: '0ef187ec-b369-4cf0-9a78-01fe624ee3c5',
            name: "LOL DIDN'T READ",
            avatar:
              'https://avatars.akamai.steamstatic.com/666ab97b6e4228b26603a83956e7eee773b5b68b_full.jpg',
          },
          date: new Date('2022-05-25'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '7',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '7',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU_qAlOA0HRVfeSw8aKbFR5KAtForupFBBl0uPHf3JP7c6lq5SCzsj9PrbehH9Q5Ppmj-jR-oK7iwW3_kI6YTrwdYfAegNvN1uF_wLvyem90JXuv5_InCNqvXQn5SuPzgv3309cCU9Now',
          },
        },
        {
          id: '8',
          author: {
            id: '76421777-a663-42ce-a1e6-08f34b59ed30',
            name: 'ᴏɴᴇ-ᴇʏᴇᴅ-ᴋɪɴɢ',
            avatar:
              'https://avatars.akamai.steamstatic.com/c83ac273922b5b6004489d59d8d04a87a58d15e2_full.jpg',
          },
          date: new Date('2022-06-08'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '8',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '8',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUwpg5TWFXvT_Gjw8rBHF98GhBe74WsJgpvwefJfQJV6d2mm47Elf_LJ7KIqWJc5cpjnujNypvwiUS7pV1sNm73ddXBcwE8YljS8gK_kr_nhMO76MybmiZh6SZ37XvcyxG20hoYcKUx0hwV6dJT',
          },
        },
        {
          id: '9',
          author: {
            id: '9b477883-d896-4e27-abb6-3c3c71da339f',
            name: "postoyanno_v_til'de",
            avatar:
              'https://avatars.akamai.steamstatic.com/0c0adb12493ff8783581bec9ff3804a8d354053f_full.jpg',
          },
          date: new Date('2022-06-13'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '9',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '9',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUhpxJNSV6fSuWu38bdVmJzMApotbKkOQtp1rzFcD5K5dKzq4eemcj3O7rDmmJUpsYi07mWo96k2QPh-kBrZ2D7d9eTdgU9aVrS_VPtxO_m0J60v8nPwHp9-n51U-bh3v0',
          },
        },
        {
          id: '10',
          author: {
            id: '9b477883-d896-4e27-abb6-3c3c71da339f',
            name: "postoyanno_v_til'de",
            avatar:
              'https://avatars.akamai.steamstatic.com/f893433b3ac6811e7542d8113879db53389ab047_full.jpg',
          },
          date: new Date('2022-06-15'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '10',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '10',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuu1svWXUd1GglWsbOmFAphwOfNY3NGvIm1x9LbwK-tN-qIwjMEsZUi0rrE9tik0VC2-UU5Zm3ydY-RJlNrfxiOrfksyZai',
          },
        },
        {
          id: '11',
          author: {
            id: '0446f648-9740-4452-97fe-b8cdae869921',
            name: "IT'S SHOW TIME",
            avatar:
              'https://avatars.akamai.steamstatic.com/f893433b3ac6811e7542d8113879db53389ab047_full.jpg',
          },
          date: new Date('2022-06-28'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '11',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '11',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUioRpTWEPdeOW-xM7AQFR6agxSura2FBJz2_baPjVH4NClq5WYn_LmDLXUgSUJv8cm3OuY9N33jVK2qRVpZTz7JoSUdAZsMAnTqFHvxri7hpXptJjI1zI97f0aSko5/108fx108f',
          },
        },
        {
          id: '12',
          author: {
            id: '3d2e4851-8163-4b82-932d-548f7f1c352a',
            name: 'brokeboyrari zxc4af',
            avatar:
              'https://avatars.akamai.steamstatic.com/b5740857c595c7016a48d5db4c923ba8603c753a_full.jpg',
          },
          date: new Date('2022-07-20'),
          text: 'Сайт бомба, вложил 100 рублей, а получил в 3 раза больше!!! Кейсы суперские!',
          case: {
            id: '12',
            img: require('@/assets/img/dl-cases/cases/case2.png'),
          },
          item: {
            id: '12',
            price: 1234.45,
            img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuv1tvHX1hgNwVH-L79L1I0hfGRIGQW7t_gwNnYz6WmMOiFxD4A7sF1372Xp9ii0FCx8kFyIzekI0pUdD0',
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'getVersion',
      'isMobileVersion',
      'isTabVersion',
      'isDesktopVersion',
    ]),
    slidesPerPage() {
      switch (this.version) {
        case 'desktop':
          return 3;
        case 'tablet':
          return 2;
        case 'mobile':
          return 1;
        default:
          return 1;
      }
    },
    countOfPages() {
      return this.reviews.length / this.slidesPerPage;
    },
  },
  methods: {
    getPartOfReviews(part) {
      return this.reviews.slice(
        this.slidesPerPage * (part - 1),
        this.slidesPerPage * (part - 1) + this.slidesPerPage
      );
    },
  },
  created() {
    this.version = this.getVersion;
  },
  watch: {
    getVersion() {
      this.version = this.getVersion;
    },
  },
};
