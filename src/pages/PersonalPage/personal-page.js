import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
import DlPersonalInfo from '@/components/dl-personal-info/DlPersonalInfo.vue';
import DlBannerSellWithProfit from '@/components/dl-banner-sell-with-profit/DlBannerSellWithProfit.vue';
import DlUserContents from '@/components/dl-user-contents/DlUserContents.vue';
export default {
  name: 'PersonalPage',
  components: {
    DlSectionHeader,
    DlPersonalInfo,
    DlBannerSellWithProfit,
    DlUserContents,
  },
  data() {
    return {
      user: {
        id: 9,
        uuid: '3422ad10-cd07-478b-ac31-d42e9a4290ea',
        name: 'Anna Biktimirova',
        avatar:
          'https://sun1-26.userapi.com/s/v1/if1/fKF81RvFb2H_xAOYVB4iqiVjTPklHEYXQYA4XFg4p7ZKpLnShTWLqugxpCA1KeYpKTKzHdM9.jpg?size=200x200&quality=96&crop=1361,95,1036,1036&ava=1',
        balance: 9,
        loot_balance: 47,
        trade_link:
          'https://steamcommunity.com/tradeoffer/new/?partner=470377819&token=sFJs_wX3',
        login_steam: null,
        qiwi: null,
        is_banned: 0,
        is_admin: 0,
        refId: null,
        lastPromoLinkId: null,
        createdAt: '2019-07-29T06:08:30.831Z',
        drops: [
          {
            id: 6451,
            status: 2,
            item: {
              id: 7,
              name: 'Blade of Eternal Reign',
              market_hash_name: 'Blade of Eternal Reign',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUluxpUWETvTO2j0IDWR1hmKwVbibipKgNlnPbcdC9M7dCJloyKk_K6MOKBwD9VupJw3b_Cooj2jAa2-xE5Z2H3JISSJARvMg6E8lXolO27jIj84sqxN-rEqQ',
              price: 1,
              type: 'item',
            },
          },
          {
            id: 27992,
            status: 5,
            item: {
              id: 514,
              name: 'Plagueroad Apothacary',
              market_hash_name: 'Plagueroad Apothacary',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStum0srDVk9LKgJoprakLBJl7PbbYjhM79n4xoTcx6Lyar-IkzgGucYm37-UoY7wiQW3rxZtZj2mItTEIwNvYw3VqE_-n7n0AIGp1g',
              price: 37,
              type: 'item',
            },
          },
          {
            id: 16398,
            status: 2,
            item: {
              id: 527,
              name: 'Насмешка: Enigmatic Style',
              market_hash_name: 'Taunt: Enigmatic Style',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXX4BlROpl9rRRJTXPZU-Gg6MrdWlp5JDtDo7igFANh3fDNPzlEtI7vl4HdwfahY-7TlD8EuMYhiOyQpY_20QSy-hFuYmimdYCXdQAgIQaH70SXukQ',
              price: 12,
              type: 'item',
            },
          },
          {
            id: 6452,
            status: 2,
            item: {
              id: 19,
              name: 'Steam Chopper',
              market_hash_name: 'Steam Chopper',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXP7g1bJ4Q1lgheXknVSffixNvWUlBLJgxYpqqgOThs3PLMeDNF08-1hoWOmbmnNuOBzjNU7cchjr2U9IqtiwzlqUU-ZDzzcNeXclI2M1iF_1O8w-_mm9bi6y_3upAv',
              price: 3,
              type: 'item',
            },
          },
          {
            id: 106157,
            status: 2,
            item: {
              id: 958,
              name: 'Naval Mine',
              market_hash_name: 'Naval Mine',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUmoB9YRFneU-G_mNvaV1h8MApDs6iaJg5u1r2fIW4XtY7hxtSPz6ChYLiIk29T7MMj2rGZotj33gzi_xVoNmGidYaXbEZgNrfRp2Rv',
              price: 7,
              type: 'item',
            },
          },
          {
            id: 106158,
            status: 2,
            item: {
              id: 4031,
              name: 'Azure Shroud',
              market_hash_name: 'Azure Shroud',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUhogJKXk3ET9ug1sjWHFxuMBZSpbK3JBJkg6CHcCdX_tmlnJKEgvOkYPXQwjgAuZN0076Y9Nn20AKw_RBlZmv7IIfEewFtaQmC8wK4w-i918S1ot2XntWmjJBK',
              price: 15,
              type: 'item',
            },
          },
          {
            id: 122327,
            status: 2,
            item: {
              id: 926,
              name: 'The Crow Eater',
              market_hash_name: 'The Crow Eater',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUivB9aSQPWU_SS08rdV1RLKgJRvrurL0hmx-P3dThM6NWJm4aNn_b6N_XXzzNSvcN3i-yWo4qk2lWyrUVsYWqgJoXEJFI-aFzZrFG3xOro08C9ot2Xnlfnz2te',
              price: 14,
              type: 'item',
            },
          },
          {
            id: 143693,
            status: 0,
            item: {
              id: 1137,
              name: 'Hoofenpaw',
              market_hash_name: 'Hoofenpaw',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU-vBVcA1bYQuGj6NvbVmJ5KgtZiamxKgBs2vzGPidK6dm4q5SDksj5PLTfqXhF6cJ9g-bPu9rz2lDs80U9MWqhI4eQIVRtM1rY-lS6xee-0ZLp6s-dy3Fj7nIi7HfD30vgi2aSuYo',
              price: 9,
              type: 'item',
            },
          },
        ],
        gift: {
          used: true,
          drop_status: 5,
          item: {
            id: 514,
            name: 'Plagueroad Apothacary',
            market_hash_name: 'Plagueroad Apothacary',
            color: '4b69ff',
            image:
              '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStum0srDVk9LKgJoprakLBJl7PbbYjhM79n4xoTcx6Lyar-IkzgGucYm37-UoY7wiQW3rxZtZj2mItTEIwNvYw3VqE_-n7n0AIGp1g',
            price: 37,
            type: 'item',
          },
          offers: [
            {
              id: 6,
              price: 199,
              cases: [
                {
                  name: 'Редкий кейс',
                  price: 59,
                },
                {
                  name: 'Летняя Катапульта',
                  price: 29,
                },
              ],
            },
            {
              id: 7,
              price: 999,
              cases: [
                {
                  name: 'Арканы и Сеты',
                  price: 399,
                },
                {
                  name: 'CARRY CASE',
                  price: 399,
                },
              ],
            },
          ],
        },
      },
    };
  },
};
