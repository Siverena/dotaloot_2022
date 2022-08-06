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
            id: 173304,
            status: 5,
            item: {
              id: 130,
              name: 'Bloodfeather Feast',
              market_hash_name: 'Bloodfeather Feast',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUjvB5YQkPWV-Wk2YDCXE1LMQ0Pia2gKhdv3bzZfi19-NXuq5eOluf7PfWExWoIvcEoibHD9I6n2ATg_xE6MTj1d4CWcFdsM13U_FHtxbzp1Jfoot2XnqONtCQ9',
              price: 22,
              type: 'item',
            },
          },
          {
            id: 184019,
            status: 5,
            item: {
              id: 4027,
              name: 'Grievous Grapnel',
              market_hash_name: 'Grievous Grapnel',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUivB9aSQPXVe2owcDGQGJzNwVHuL-pZABy2vbefihR09uklZCFkvu6au-BlG8AusAj0r-YrNSm2AS2-EM-MmHyJoGUJAdvMAqGqFW7kr3n1Ij84sqlwGvwqA',
              price: 7,
              type: 'item',
            },
          },
          {
            id: 184020,
            status: 5,
            item: {
              id: 312,
              name: "Yulsaria's Mantle",
              market_hash_name: "Yulsaria's Mantle",
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUxuwJOWE3ceOms3svWXRJ9KAlYpK6kJzhz2_zdfTlH_s_5l420nvr5PKnFl2du-81-n-XF8J7mxgzg_UJuZmuhJoHEI1Q2aF3W-Fbsl7_s0JK0vZScziNmuCdz4XuLykCpwUYbRATmOVM',
              price: 26,
              type: 'item',
            },
          },
          {
            id: 184021,
            status: 2,
            item: {
              id: 312,
              name: "Yulsaria's Mantle",
              market_hash_name: "Yulsaria's Mantle",
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUxuwJOWE3ceOms3svWXRJ9KAlYpK6kJzhz2_zdfTlH_s_5l420nvr5PKnFl2du-81-n-XF8J7mxgzg_UJuZmuhJoHEI1Q2aF3W-Fbsl7_s0JK0vZScziNmuCdz4XuLykCpwUYbRATmOVM',
              price: 26,
              type: 'item',
            },
          },
          {
            id: 184022,
            status: 5,
            item: {
              id: 1674,
              name: 'Genuine Strike of the Light',
              market_hash_name: 'Genuine Strike of the Light',
              color: '4D7455',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU5rB5NSV7vSOKSw8fWbFF9IgxD-amxOQ5r1vzOZTVH4NWxnJS0gPL1I7Tf2XhF-sx6j-bH4YTwhF2zowcDJDyiZNnLbAM-NArQ_gK2weu60ZC5vczAzXdrsnRztnjYlhOwiRtIPLRqg_edQA2AR_seaikmDD0',
              price: 55,
              type: 'item',
            },
          },
          {
            id: 184023,
            status: 5,
            item: {
              id: 1547,
              name: 'Tolling Shadows',
              market_hash_name: 'Tolling Shadows',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUkoAhcS0mfTumg2N3HUlFLIwVav7asKhUv2v7Ffi9W7dCJkoGGnvv9MqnugmRd5Mx_jafHodqgjACyqUNqYjz1doWXJA87NQyF-QXrwOu9h5G46M7LzHBmuSB0-z-DyJndzvt8',
              price: 108,
              type: 'item',
            },
          },
          {
            id: 184025,
            status: 2,
            item: {
              id: 4133,
              name: 'Насмешка: Shredding the Lute Invisible',
              market_hash_name: 'Taunt: Shredding the Lute Invisible',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXX4BlROpl9rRRJTXPZU-Gg6NvSRlNgGhdfpL-hLw5u1MzceTh94Mmikb-CmeH9ILLTmm4fuJAhiLiZptys3AHn_xdlZ2CncYGRdwJoYAqCrwe8ku7sg5-06pXMmGwj5Hc7bNZEVA',
              price: 11,
              type: 'item',
            },
          },
          {
            id: 184026,
            status: 2,
            item: {
              id: 538,
              name: "Malefic Drake's Strike",
              market_hash_name: "Malefic Drake's Strike",
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUkoAtYXgPGTvSoxfDaXlB7NxBWuoWxKg5s7OfBKXJU5cyzhr-Cmvr7Ia_QmlRF6cx9tf3IrcKk3QXnrkY-ajj6JI6XcFM2Yg2GrgC-yeu8h8LqupScyHFluyQmtCnZgVXp1uc2HDVU',
              price: 28,
              type: 'item',
            },
          },
          {
            id: 184027,
            status: 2,
            item: {
              id: 117,
              name: 'Bracers of Forlorn Precipice',
              market_hash_name: 'Bracers of Forlorn Precipice',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU2qAlWc1_VQvbi087BWGJnIAFFia6sczhp3v7HYylD4OO3ho2Y2PP1IbDuhW5U-vplg7H-_IH4h0agqh8DMiuuZ5jBelc7NV3U-wXoxenq0cS9vpTAyXZluHQl4XaMlkHlhxxMauA60POdVxzAUOsdQBNG',
              price: 5,
              type: 'item',
            },
          },
          {
            id: 184028,
            status: 2,
            item: {
              id: 232,
              name: "Markswoman's Cap",
              market_hash_name: "Markswoman's Cap",
              color: 'b0c3d9',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUloBVZXlneSeG_mN3cUVR6GgxWovW3JAVp3czAcCkM742wkoWNlvahYrqDkjMHupwniL_CrN-ijQTm8kJtNjymIYecdwBqaEaQpAZV05rrnA',
              price: 11,
              type: 'item',
            },
          },
          {
            id: 184029,
            status: 5,
            item: {
              id: 543,
              name: 'Frostglade Familiar Hat',
              market_hash_name: 'Frostglade Familiar Hat',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU2uxRKA1_VRPaow_DEWkl3LTtfs7uhZBRl0OHNZQJV5ci1nL-DkvbwfbiIzjtV7ZBy3rzCrNyj3QSy_xdtZmCgLYPHcwFtNAnVqQTow-3mgcei_MOeke9hEFk',
              price: 7,
              type: 'item',
            },
          },
          {
            id: 184030,
            status: 2,
            item: {
              id: 144,
              name: 'Hearts of Misrule',
              market_hash_name: 'Hearts of Misrule',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU2qAlWc1vZS-iiwIDXUk9_GhNeuraqPDh02qv3eDBP486ilYy0n_L1N_TVl3la19J4huXO4rPhgQyLoh4xPCu3ddr6KlNvNUaB_APow--6hp7u7pXMnHU1u3Yl4CvbnRzl0BlNaeZr16GaHFqaBawcAuDcUQCuXCWw',
              price: 16,
              type: 'item',
            },
          },
          {
            id: 184031,
            status: 5,
            item: {
              id: 117,
              name: 'Bracers of Forlorn Precipice',
              market_hash_name: 'Bracers of Forlorn Precipice',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU2qAlWc1_VQvbi087BWGJnIAFFia6sczhp3v7HYylD4OO3ho2Y2PP1IbDuhW5U-vplg7H-_IH4h0agqh8DMiuuZ5jBelc7NV3U-wXoxenq0cS9vpTAyXZluHQl4XaMlkHlhxxMauA60POdVxzAUOsdQBNG',
              price: 5,
              type: 'item',
            },
          },
          {
            id: 184032,
            status: 2,
            item: {
              id: 149,
              name: 'Edict of Shadows',
              market_hash_name: 'Edict of Shadows',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUgoBBUQU3CUqu_3sTabEl9fTteu7eqORNh38zAdDxGo86_n4m0g_6sDLLcm2RD_MR9teHE9Ii72ALm-BE4Nz30d4LEcFJvZlvTrlW2w729gMe5uJTIznI27ikhsHiOygv330_R5S_pxg',
              price: 8,
              type: 'item',
            },
          },
          {
            id: 184033,
            status: 2,
            item: {
              id: 119,
              name: 'Ghastly Nocturne',
              market_hash_name: 'Ghastly Nocturne',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUwqA9PRUjVVauv1tvBWllxNztDv-KaIgpt3OHccDF94dOjmpTElfbgIbLVk3lu_MwpteDM-IPnnFW4lB4zJje3OobAcAdrYQ7U-FW8lOznhpK6usmfzXBj6SZ25HmMykTighwabOJp0_KACQLJa9yl2dA',
              price: 13,
              type: 'item',
            },
          },
          {
            id: 184034,
            status: 2,
            item: {
              id: 995,
              name: 'Skull of the Elusive Destroyer',
              market_hash_name: 'Skull of the Elusive Destroyer',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUhqBVZc0fZSePi0sPGQFRiIDtTs6mxOQh51uH3eThD6JOzmJWYnuHxDL_UhX9D59x0mNbJ8I3xxgftrRFlN2vxIY6dclJvMFGC8lO5x-28hsO-vcydz3Zq73Jx4XuPyRapwUYbseGMaeQ',
              price: 13,
              type: 'item',
            },
          },
          {
            id: 184035,
            status: 2,
            item: {
              id: 992,
              name: "Phantom's Reaper",
              market_hash_name: "Phantom's Reaper",
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUzqxpZSEPeCPSl1sHHXFBnGhZSt6qgOUhw2_LGZTJP_-OkkYGbkuW6MrjVwjoCuZYo3uiTpNui2Ve1_kVqNjulLYDDJ1JqMlvR81fslbq6gIj84sqeeMI7sw',
              price: 13,
              type: 'item',
            },
          },
          {
            id: 184036,
            status: 2,
            item: {
              id: 995,
              name: 'Skull of the Elusive Destroyer',
              market_hash_name: 'Skull of the Elusive Destroyer',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUhqBVZc0fZSePi0sPGQFRiIDtTs6mxOQh51uH3eThD6JOzmJWYnuHxDL_UhX9D59x0mNbJ8I3xxgftrRFlN2vxIY6dclJvMFGC8lO5x-28hsO-vcydz3Zq73Jx4XuPyRapwUYbseGMaeQ',
              price: 13,
              type: 'item',
            },
          },
          {
            id: 184037,
            status: 2,
            item: {
              id: 1752,
              name: 'Inscribed Vigil Signet',
              market_hash_name: 'Inscribed Vigil Signet',
              color: 'CF6A32',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUhvx5TA03CSveS2MnsR1VxGhZYsa-gZAZy3uD3fjt9-NSzq5KEkOLxfbrQxWhVvp0i2uyV9tyt0VDi8kM5Zm_0J4fBI1c7Mg7YqFHtlO7ogJSi_MOecPKV7VM',
              price: 59,
              type: 'item',
            },
          },
          {
            id: 184042,
            status: 2,
            item: {
              id: 778,
              name: 'Blade of Soul Hunger',
              market_hash_name: 'Blade of Soul Hunger',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU2phRQA0rCQuH_x8PSSmJjIAVHubSaIx5oyrzOYzhHvsy6lZm0gPL1I7TfqWNI4Nw_2LvE8dSm3wbs_0U4Y2v6dtWddVU4YFDR_lO9kr29jcXovp_BznA3vj5iuygyZPW97A',
              price: 5,
              type: 'item',
            },
          },
          {
            id: 184038,
            status: 2,
            item: {
              id: 810,
              name: 'Tree Punisher',
              market_hash_name: 'Tree Punisher',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXP7g1bJ4Q1lgheXknVSffiw93WVk1hKw1Evr-3FAtv0vfBfzpR786zkY7Fw_KtZ-yFx25U6pxw2r2YoNmi3QDk_xJkZzv3I4GSdlQ2NV2F-FLrxvCv28EK1qNnBw',
              price: 12,
              type: 'item',
            },
          },
          {
            id: 184040,
            status: 2,
            item: {
              id: 952,
              name: 'Fire Tribunal Set',
              market_hash_name: 'Fire Tribunal Set',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStur3t3WbElmLAZCuLupFBRlx72cJmgbtYizxYXZz_SnN-jSxGpV7p0n2eyVrYjx2gzt-UY-Mm33d4LBbEZgNsLOp46Q',
              price: 4,
              type: 'item',
            },
          },
          {
            id: 184039,
            status: 2,
            item: {
              id: 193,
              name: 'Warcog',
              market_hash_name: 'Warcog',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXP7g1bJ4Q1lgheXknVSffiwM7BXlx3LQ1Zs4WpJAZkwPDaIWwMtIywzNXTlPP2Z-qGxzgEvsEo3OqW89n2jgW3-kA5Yjr1LICSewQ3YUaQpAbrIAHiKg',
              price: 7,
              type: 'item',
            },
          },
          {
            id: 184041,
            status: 2,
            item: {
              id: 123,
              name: 'Golden Bracers of Forlorn Precipice',
              market_hash_name: 'Golden Bracers of Forlorn Precipice',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU2qAlWc1_VQvbi087BWGJnIAFFia6sczhp3v7HYylD4OO3ho2Y2PP1IbDuhW5U-vplg7H-_IH4h0agqh8DMiuuZ4eLIAc9ZQ6GqFTvxOy818Dv6pSazCFnuCAnt36JlkPihh5IZ7Rm0_acG0LeWfJe4rTqhA',
              price: 14,
              type: 'item',
            },
          },
          {
            id: 184043,
            status: 2,
            item: {
              id: 211,
              name: 'Shock of the Anvil',
              market_hash_name: 'Shock of the Anvil',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU_qBxTTVjRUvbixMfcUFZLKgJoorKgFAZuxfrEPi5K49-9q4-NqOP8NoTQmH1Y5IsmiL-UpI2m2Abk_xZvMDyld4SQcVVoYV7Tq1Hqxu3r15a56pvIynNrpGB8ssEKKGf1',
              price: 64,
              type: 'item',
            },
          },
          {
            id: 184044,
            status: 2,
            item: {
              id: 945,
              name: 'Taunt: Selemene Leap!',
              market_hash_name: 'Taunt: Selemene Leap!',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXX4BlROpl9vRpIQljvTuei2fDfRlN1GhdSur-oLgll7P_NcC0MtNqwzNSKlqXxZ7-IkzkAu8EgibnA9NiniQex-kRvZWyidoTHdlM5MEaQpAaVlRm3Rw',
              price: 10,
              type: 'item',
            },
          },
          {
            id: 184045,
            status: 2,
            item: {
              id: 392,
              name: "Bow of the Eldwurm's Touch",
              market_hash_name: "Bow of the Eldwurm's Touch",
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU2uxRKA0jCRuOi2dzHXEh3LTtAs7u1JAkv1-HJdjJM_8i5gYODqODxMqvemCUCvpwl2uySoYn0iQy18hJuZ22ldY-TIwQ2MwqGrlLoxOvogse6vsjN1zI97UnK296M',
              price: 2,
              type: 'item',
            },
          },
        ],
        contracts: [
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
            items: [
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
            ],
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
            items: [
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
            ],
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
