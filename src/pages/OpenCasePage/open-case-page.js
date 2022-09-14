import DlCase from '@/components/dl-cases/dl-case/DlCase.vue';
import DlLoader from '@/components/dl-loader/DlLoader.vue';
import DlCaseItems from '@/components/dl-case-items/DlCaseItems.vue';
import DlSectionHeader from '@/elements/dl-section-header/DlSectionHeader.vue';
import Axios from 'axios';
export default {
  name: 'OpenCasePage',
  components: {
    DlCase,
    DlLoader,
    DlSectionHeader,
    DlCaseItems,
  },
  data() {
    return {
      loading: true,
      caseItem: {},
      caseId: null,
      testCase: {
        Case: {
          id: 32,
          name: 'Hallowed Chest',
          image: 'hallowed chest_1643217067054.png',
          price: 399,
          opens: 0,
          payment: 0,
          position: 5,
          type: 'items',
          items: [
            {
              id: 473,
              name: 'Tales of the Ardalan Interdictor',
              market_hash_name: 'Tales of the Ardalan Interdictor',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu51sPWQGJ7IztDvr-aKhVk0v_JfwJL4sizhoSClOP7IfXXwDgJsJchiLqRpdnx0ADnqhBtMmv1IoGQewVoN1iGrFa_yebp05K4ot2XnkwCV3OG',
              price: 11206,
              type: 'item',
            },
            {
              id: 475,
              name: 'Shadow in the Deep',
              market_hash_name: 'Shadow in the Deep',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu-387XXEpLLApoorKgFANl1uOGJG1AuN-1ktKKzqSiN-6EwmgG6pwli76S9N-j2wex_Ec_ZGj7cYbEJBh-Pw_HGmrkeg',
              price: 6734,
              type: 'item',
            },
            {
              id: 470,
              name: 'Lash of the Lizard Kin',
              market_hash_name: 'Lash of the Lizard Kin',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUhoRpZQ1vDT-Wg1sGcQE5LIwVbuuj1FA5t3vzaZTxO09SzlYTEhOTLNbrdmjkB18x8h-bT4Y35t1yxqhdyZT-hd9XAclI_ZlvXqVjowuzpjJPtuMjBwSY3v3Ii4CnYnUex1RAeOvsv26LSnTJHFg',
              price: 1496,
              type: 'item',
            },
            {
              id: 483,
              name: 'Hunger of the Howling Wilds',
              market_hash_name: 'Hunger of the Howling Wilds',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStulwsHUVk9LKgJoorKgFA9vxP_Bfzp9-9W6kJPFwK_1YO7XxTsA7JRw0riV9tvw31a3rUBvMDjwdYTHJwQ5Y16DrwK9yfCv28EKGuk9kg',
              price: 371,
              type: 'item',
            },
            {
              id: 474,
              name: 'Provocation of Ruin',
              market_hash_name: 'Provocation of Ruin',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu9xcDFXF51MQ1YuIWqLThyxvrGPz8VvNizktaNxaesYeODl2oG7ZJw2riSp9-h0FHg80RoZmn1J4WUdw8gIQaHuML4fJE',
              price: 5175,
              type: 'item',
            },
            {
              id: 469,
              name: 'Avowance of the Veiled Ones',
              market_hash_name: 'Avowance of the Veiled Ones',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUioRpTWEPdeOW-xM7AQFR6ahRWibykJwsyg8zBfDBN_si3mL-Yn_jhP7_UhHge-MROjOjN-d6lt125phwuJzivS8XNLUNiNQ2SuU_rwui5gJLvvpXLwXcxsnMjsCmOyRzjgR8eaLBtgvXLHVicDqdBSqnQGDOO5w89DSBe',
              price: 2360,
              type: 'item',
            },
            {
              id: 468,
              name: 'Fetters of Omniscience',
              market_hash_name: 'Fetters of Omniscience',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU9pBVUR0LZQOy5mMDeXVRLIwVbuuj1FA5t3vzaZTxO08--m5WHk_LmIPTem2VY18NwhuWTpbP8hVm7uQc9PwawfNnQLlJrIxvOrwe5lb_t0MC6uZqfnHcxvHFx5C2LzES01x9Pb-A7hPWYSgifAvRAGL7CWCRnsziF_w',
              price: 1076,
              type: 'item',
            },
            {
              id: 466,
              name: 'Remnants of Ascension',
              market_hash_name: 'Remnants of Ascension',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU1uxJQX1jCSO-omMjAbFt1KQgF5oWsJgpvwefJfQJK6d2y24eYqPH1P7eDxlRY5ch-mP3A-bP9jVWw5UZlazz7JY6UIFA7M13R-1S8w-a7g5K-vcmfziM27Cd0sCzYmBXh0xpSLrs4q4TvWmU',
              price: 655,
              type: 'item',
            },
            {
              id: 467,
              name: "God's Mercy",
              market_hash_name: "God's Mercy",
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU_qAlOA0HRVfeS0c7fXw8kGg1au7W3PwZs7ODAeDhO6JO7lZKYqPH1P7eDxlRY5ch-mP3A-bPmgF2xpxdyZ2n0d4KSdwVtZQuC-VLoyLi60JG9uM-bnXBrvyMj4naPn0bm0x8eaPsv26LoaXanOw',
              price: 930,
              type: 'item',
            },
            {
              id: 465,
              name: 'Origin of the Unmaking',
              market_hash_name: 'Origin of the Unmaking',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUwqBVYA07RSeGS0c7fXw8kGg1au7W3PwZs7PvNcDkN7t24kb-Nlvv4Yevun2Zc59dli-X-_Yn0jBrsqkE_a2ymJ4OdJAI8M17S-1m5l-i7hp_tvZ3Kn3JlsiV34XnbnUHmn1gSOTA70nAb',
              price: 730,
              type: 'item',
            },
            {
              id: 579,
              name: 'Desert Burn',
              market_hash_name: 'Desert Burn',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu-2c7DVVRmIDtRt7apeVdf2v7Ffi9W7dCJlpWFk_vxfeLVwTIGupcl2ruZ8d2gigy18ks9Y2r1JISUcwc_aF2Eq1m8kOztgJei_MOeAEbGFZE',
              price: 4354,
              type: 'item',
            },
            {
              id: 580,
              name: 'Concord Reversion',
              market_hash_name: 'Concord Reversion',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcUioRpTWEPdeOis2czWQRJkKTtRt7apeVdf2v7Ffi9W7dCJnIWKk7jkP4TXl2ddupVOg-TM-p7hiViLoxY9N3enINPEIVBsZ12E-gLtkLu-g5G6v86azSMy6HJ3tCzUzBPkgUtFbeQ8m7XAHhxYkeeF',
              price: 1070,
              type: 'item',
            },
            {
              id: 589,
              name: 'The Hallows Within Bundle',
              market_hash_name: 'The Hallows Within Bundle',
              color: 'e4ae39',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu538rsW1x4KQtApYWyIhNo2v33cyhM6NCz2tTZlvKmZO3TlG1Q7ZAi3bnAptugi1HkrhdqYGn2I4_AcldtMF7U_liggbC4PIuxW8E',
              price: 1386,
              type: 'item',
            },
            {
              id: 506,
              name: 'The Leech Queen',
              market_hash_name: 'The Leech Queen',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu538rsX1hxJgxop6-gLgkugPXLdWRBvozuxNfez_H3auPTzjhUup110r6SrNSl2VHj80NvajzzJ5jVLFHIf050Cg',
              price: 17,
              type: 'item',
            },
            {
              id: 504,
              name: 'Crimsonwing Slayer',
              market_hash_name: 'Crimsonwing Slayer',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu53pbsUFx3LQFourmaKQtv3PfRTj9D-Mi6kb-KmfDxP_WIlDIFvZAmiOqQp4_3igPt_ERrNmyid4CUJwA7aQmB81XqkL290Ze7ot2XnkSYStwD',
              price: 17,
              type: 'item',
            },
            {
              id: 497,
              name: 'Arcane Infestation',
              market_hash_name: 'Arcane Infestation',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu63tvQW05LIhZWparreAVlgavOImka7o7vloGPla_3Y7mCwzMHv5Yi3OrDrdrwiQDj_RJoMHezetHHNEb52A',
              price: 17,
              type: 'item',
            },
            {
              id: 509,
              name: 'Bottomfeeder',
              market_hash_name: 'Bottomfeeder',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuuxc7EX1hmGgJFubeaPw9l7PfNdC0M6t_kxtaPlqWsNe6EkzpSucFy3uzE9N6j3gKwqRU_amv2LY_AdARvaUaQpAYf-vRS-Q',
              price: 17,
              type: 'item',
            },
            {
              id: 505,
              name: 'Jester King',
              market_hash_name: 'Jester King',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStun0tzHVk9LLg1ZsfT3c1M116SaKG4Rvt63ldHblvGhZbjQzzMG7p0o3biUo9z3iQXs_kZkfSmtc1oDybdg',
              price: 18,
              type: 'item',
            },
            {
              id: 576,
              name: 'Edge of Extinction',
              market_hash_name: 'Edge of Extinction',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu53pbsUFx3LQFotLeaKA9p1vXccDRM09Owq5SDksjkIbLcl2cf7sEl07mQptX3iVC1-kFqZGHwI4GTdQ9oaArT8wO5wem9g8fvuJ-awGwj5HeiPx8ubw',
              price: 21,
              type: 'item',
            },
            {
              id: 520,
              name: 'Praetor of Royal Souls',
              market_hash_name: 'Praetor of Royal Souls',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu53pbsUFx3LQFooLO2KgBl7OPBZQJF-d2kkM6Pkqb2NbmFwDtX7JQh3bCT84-hjADgqkQ6MmqmIobHdA42NVjS_FXo366x0qa89iCS',
              price: 17,
              type: 'item',
            },
            {
              id: 501,
              name: 'Owlwatch Commander',
              market_hash_name: 'Owlwatch Commander',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuqzt3cbFx4KQ1SsoWmJApt0v3MdC8MvYzhxdmOw6akNe2Bk24HvJcgi-iV89SjjgTtqEFtMWmiI4CRIAA6ZkaQpAZm1G3iJA',
              price: 20,
              type: 'item',
            },
            {
              id: 498,
              name: 'Dark Realm Oracles',
              market_hash_name: 'Dark Realm Oracles',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStur1tvWVUh4GhdOu7isJBRpwL3NIjsV6NjmkNeJxa6ia-PXkm0BsJYoi--So9SsjQ3n-Uc4ZD36LY_DbEZgNtQ7Qf3p',
              price: 18,
              type: 'item',
            },
            {
              id: 577,
              name: 'Wraith of the Red Sands',
              market_hash_name: 'Wraith of the Red Sands',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu_1sTAW1xnJEoD5u2jcwM01fbKcD9GvInixobdxfHyYbnUzz1X6ZF127DD8Nz03FGy5QMyNGAFzzDY',
              price: 17,
              type: 'item',
            },
            {
              id: 512,
              name: 'Kitestar Splendor',
              market_hash_name: 'Kitestar Splendor',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStusxcbAR1J3NwVDv7maOQJi2uHceXNDvIvkkdePxfKtMevXz20Du8Zw2uiQ9In3iVC1qkFqYmqgcNCVdgM-fxiOrcP3AV5M',
              price: 21,
              type: 'item',
            },
            {
              id: 495,
              name: 'Feast of the Unwilling',
              market_hash_name: 'Feast of the Unwilling',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuv28DcV2JkNw1Ztb-aKAhywebYZTRN4pLvl4Tak6atMriHxz0H6pYhj-qZ8Y7xjQPkrhZsa26lcY7HcwJsaFjZ5BHglj_-1qpu',
              price: 24,
              type: 'item',
            },
            {
              id: 494,
              name: "Razil's Revitalizer",
              market_hash_name: "Razil's Revitalizer",
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVSturxc7dWFh6NhBSv7TrLlJk0PKZd2UbutqwwYbSxvXwMLqGkG1T65Fw2e3Cpt6si1btrUVpYHezetEVb-WdGQ',
              price: 43,
              type: 'item',
            },
            {
              id: 510,
              name: 'Eye of the Fateweaver',
              market_hash_name: 'Eye of the Fateweaver',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuixc7QX1hLIwVDs4WjIgNk3_baP2UauIjll4Pdwq6sY77Uxz4D7pJ337rCrI_0jgTtrhc6ZWn0JoDGelcgIQaH0eGF9d4',
              price: 31,
              type: 'item',
            },
            {
              id: 507,
              name: 'Plague Baron',
              market_hash_name: 'Plague Baron',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu538rsUFJhKxBoubyaOwth1ObNPzsW7djgxdPalPOmYeuGz2kA7JIj3LjD9Nyk3AO1_hdtZWzzJI7EcQUgIQaHHDl9hnE',
              price: 35,
              type: 'item',
            },
            {
              id: 515,
              name: 'Thornwatch',
              market_hash_name: 'Thornwatch',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuqws7BV2J7IztDvr-aOAx5xOHJZTV9-NSkm46O2aClMu2AlG4BucEki-2X8Yn02QPlrhZtZmj3cYSdJw4_Y1nXqFC8k-jxxcjre1Cjo9o',
              price: 34,
              type: 'item',
            },
            {
              id: 496,
              name: 'Surly Bogstomper',
              market_hash_name: 'Surly Bogstomper',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStur3tzbVk95JApoobOxIzhlxfrETjhb6ZLvxYPexfOjNeiFlTlU6Z0n2bDDrYil2AOwqBBsZG32IYCVclI4M1HS5BHgls0xW3Xp',
              price: 27,
              type: 'item',
            },
            {
              id: 521,
              name: 'Cunning Cultivations',
              market_hash_name: 'Cunning Cultivations',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu_0szcQVlLLQtbsr-3FABy3OTNY3MWvdnnldfawKb3Zr_QxG4BupQi3e2Yrdms3FLsqRBpNmr1IdCWdA89fxiOrUByMr4h',
              price: 38,
              type: 'item',
            },
            {
              id: 517,
              name: 'Swamp Terror',
              market_hash_name: 'Swamp Terror',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu-wM7eQ2J5KgpEor-3ZQE50aKbdT8b7diwx9HblvbyN-KDwTxSsZRwjuuZrd6h2FDirUZuYGvtZNjCyOTPAMk',
              price: 29,
              type: 'item',
            },
            {
              id: 514,
              name: 'Plagueroad Apothacary',
              market_hash_name: 'Plagueroad Apothacary',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStum0srDVk9LKgJoprakLBJl7PbbYjhM79n4xoTcx6Lyar-IkzgGucYm37-UoY7wiQW3rxZtZj2mItTEIwNvYw3VqE_-n7n0AIGp1g',
              price: 35,
              type: 'item',
            },
            {
              id: 511,
              name: 'Blissful Knave',
              market_hash_name: 'Blissful Knave',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStug1tzYVllLNhNYpL62JgZunaLJcmRE6N_mxoOKwPWjNe_SxToG7cZz2bCZptn23VGwqRJuZGrwIdWLMlhpPfUNDiU',
              price: 25,
              type: 'item',
            },
            {
              id: 516,
              name: 'Witch Hunt',
              market_hash_name: 'Witch Hunt',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuvxcDcXk5gLAdcibiqJApzx_rLenNEtIThzdDYxK-tauiGxj4I6Zx107-Rp9mn2AC3-UM4NjugI4DGdQA4fxiOrXpT-T1s',
              price: 29,
              type: 'item',
            },
            {
              id: 519,
              name: 'Sunken Snapper',
              market_hash_name: 'Sunken Snapper',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStugwtvSXUlLKwFDvr-3FBN1wefEdHMR6Y6ykILdxPTxZOvXk28B6pN027DCpI70iVXtr0RlMGnwIIKVJAA3fxiOrWSicUrf',
              price: 26,
              type: 'item',
            },
            {
              id: 574,
              name: 'Twilight Effigy',
              market_hash_name: 'Twilight Effigy',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStul1t3FVk5gGgFRsLOiMkk20aaYdT9E74_vx9KKx6SjMemDwjxQuMEniL6Ypd2higy3-BFkMmqiOsbLJTktMk2i',
              price: 39,
              type: 'item',
            },
            {
              id: 508,
              name: 'Frightful Revelries',
              market_hash_name: 'Frightful Revelries',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVSturxcbUW0lnMQVbvb-3ZVRl0qacID9AvI_kxtHSz6SiMLrVxjwBu5Yhi7qZrY730VXgrRZtMWvtZNjCs7v0h_s',
              price: 28,
              type: 'item',
            },
            {
              id: 518,
              name: 'Dark Meadow Massacre',
              market_hash_name: 'Dark Meadow Massacre',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu61tvQW1BxKztYsIWyIwJhx8zOeDhO6JKzxobcxqStYL6FxTxVupB12L2YpdSt3waw_EJtMTj6JNDBeg84Z1jR5BHglrZy9MOW',
              price: 41,
              type: 'item',
            },
            {
              id: 499,
              name: 'Frostglade Familiar',
              market_hash_name: 'Frostglade Familiar',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu-0szBVklLMg1DtbLrKlVmhaPJKGhBtYiyxNbfkvagY-2GlDIIv8Nz37HEodmljQKw_BJoYHezetHaRv4dEw',
              price: 33,
              type: 'item',
            },
            {
              id: 500,
              name: 'Patterns of the Pristine',
              market_hash_name: 'Patterns of the Pristine',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuh3snWbF5tJghS-O-nfFE1gveRJD8X6Iqzx9LYlfXya-KIl24DuJx1jr7C8Y3w2Aa1qBdyIzekzkNb5FM',
              price: 56,
              type: 'item',
            },
            {
              id: 575,
              name: 'Fury of the Damned',
              market_hash_name: 'Fury of the Damned',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuq38DAR2J-MABQs6jre1E3hqGedGoUutnkxNXdkaL3ZePTkz4IuMRz3L-QoI-h3wfmr0c_N3ezetFSh-lvjg',
              price: 46,
              type: 'item',
            },
            {
              id: 502,
              name: 'Sinister Shadow',
              market_hash_name: 'Sinister Shadow',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu-3sHaQElxNztEvruhJBAuhKXKIztEtIi3wIbZlfamY-KCk28G6pMn27vA89im3layrUE5NT32J5jVLFElpD7D8Q',
              price: 62,
              type: 'item',
            },
            {
              id: 503,
              name: 'Vengeance of the Brine Lords',
              market_hash_name: 'Vengeance of the Brine Lords',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStumwsHYWFxLMQxSibmwORRl18zLcC1W7dW42oWJlqGjY-KAlT5Q7sYh372Q8Y2mjFfj-Eo-ZWH2ctOXJwFvYFHZ_QKggbC4BrpE6rE',
              price: 65,
              type: 'item',
            },
            {
              id: 513,
              name: 'Candy Cat',
              market_hash_name: 'Candy Cat',
              color: '4b69ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuu1sHXSmJ3JBAZ5Or8eV5k1aSRJ2UX7d7mxIbax_L1YeyBlzoEv5Qi0rmRpoiniwCy8l0sPT7t1PP0CQ',
              price: 124,
              type: 'item',
            },
            {
              id: 477,
              name: 'Night Terrors',
              market_hash_name: 'Night Terrors',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuj3sjbR2JgIBZFuai2ZQY3gKORIzxDv4S0zNPexqCkYeKHlWoJsZUk3eyUptukigPs_ENpNzrtZNjCWbwjuo0',
              price: 117,
              type: 'item',
            },
            {
              id: 482,
              name: 'Menace of the Forlorn Maze',
              market_hash_name: 'Menace of the Forlorn Maze',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStug0sHSUFhLKgJoorKgFAFvwf_HYzN94d2skc7ZwfL1ZOmEkDsBuZZz07GToN2t2wXmrxJqNjulLdOWJwM8ZFCG81C3366x0q8SR_LZ',
              price: 115,
              type: 'item',
            },
            {
              id: 581,
              name: 'Darkwood Witness',
              market_hash_name: 'Darkwood Witness',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStup1t3YRFJ7ITtAv66rLhRznfKcKDlAtN7gw9aKxvGsY7nSkzlXvJJ30rGTp4it2g3s-RY_Y2uhLdCLMlhp2daU-Zk',
              price: 105,
              type: 'item',
            },
            {
              id: 480,
              name: 'Gambits of Nishai',
              market_hash_name: 'Gambits of Nishai',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuq1sLRWklnGgtRibSsOA9h2r2QKWQUtY3mzNTelvOlMOyCxW9VsZVwi7DDpNyj3Ve1qUBqZ2nxIYXDbEZgNi7afwtS',
              price: 129,
              type: 'item',
            },
            {
              id: 485,
              name: "Contessa's Creed",
              market_hash_name: "Contessa's Creed",
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuu2MHHVk5nJBdotaigLgMu1fWYIDxAu4rmxoHbla6gN-3Uk25VvZMg3L_Dpo6ijATn-xY9ZjylcpjVLFFgucsp5w',
              price: 118,
              type: 'item',
            },
            {
              id: 478,
              name: 'Agony of Endless Days',
              market_hash_name: 'Agony of Endless Days',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStus0MDdSmJ7IztSuL6pLhRz7PfJaC4MvYmzxtSKxa7xZ-mHxW4DuZcp3--RpNn0jVKwrUtuMmHzJYOWIQQ9M0aQpAarO-gEmQ',
              price: 123,
              type: 'item',
            },
            {
              id: 486,
              name: 'Bindings of the Spiteful Djinn',
              market_hash_name: 'Bindings of the Spiteful Djinn',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuv3sHXWlNzNjtYsIWxIwJfwOPBZThE-dCJkIqCmfm6Ne-EkGlTucAj2-vCodyh2lLk-ENpMDrwJYGVcARqaFmC_FG7webu14j84spLV4jRcg',
              price: 153,
              type: 'item',
            },
            {
              id: 582,
              name: 'Whispers of the Damned',
              market_hash_name: 'Whispers of the Damned',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu638bAQ1hmNjtYsIWxIwJf1_LFfzhGooS1w4LTxaKiYeiAxGkJv5B137_EpY6m3Ffi_0I9am30coPGcFQ9N1rOug_pkfWdmrk',
              price: 173,
              type: 'item',
            },
            {
              id: 479,
              name: "Keeper of Oloxicam's Glass",
              market_hash_name: "Keeper of Oloxicam's Glass",
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStum0srDVk9LKgJoubaqMw5j0v7bTjpO7c-l2obblfXwNr7Vz2kGv5Ah3r2UpIn03FG2_xFrYDj3I4DEIwU3MFmBrFaggbC47iGdY1c',
              price: 135,
              type: 'item',
            },
            {
              id: 572,
              name: 'Arena Champion',
              market_hash_name: 'Arena Champion',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStusxcrdUmJ3LQVaprOqJUljgKGdIWpG6IjgldSNxPatYOPUzjxTuZRyie-ZrIml0AXnqBA_NWjzOsbLJZosOboB',
              price: 298,
              type: 'item',
            },
            {
              id: 481,
              name: 'Scorn of the Winged Sentinel',
              market_hash_name: 'Scorn of the Winged Sentinel',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu-1MDBXWJ7IztDvr-aPA5u1PbMTi5H4si_moWH2aKnN-KIlDoDsJMk0r2Soomk2w3krxJqMWn0INOWegJqYQnU-AS8l7zxxcjrgGLuCUI',
              price: 248,
              type: 'item',
            },
            {
              id: 573,
              name: 'Shadows of the Forgotten Plane',
              market_hash_name: 'Shadows of the Forgotten Plane',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu-387XXEpnGgtRia6tLjhm3OHPfilW6dKJhIyKmfK6au-Fzj5X65wn2uvH99zwjQKy_EVqZGr0cY-RdwA4NQzXrwO6xurp1oj84so1kDMR7A',
              price: 226,
              type: 'item',
            },
            {
              id: 583,
              name: 'Chasm of the Broken Code',
              market_hash_name: 'Chasm of the Broken Code',
              color: '8847ff',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuu387AXmJ7IztDvr-aKRVv2PbGTj5N6Nn4wNLew_Kmau7QxzlTsMQhiO-Rpd2njgLsrUc5Mmz7IoLBc1c2ZlCB-U_-n7nkmq8ZgA',
              price: 171,
              type: 'item',
            },
            {
              id: 3885,
              name: 'Blackshield Protodrone',
              market_hash_name: 'Blackshield Protodrone',
              color: 'D2D2D2',
              image:
                '-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStuv287QWE58LAFbsoW1OQh03PfafjNHoo7ikYXelaWnZLqBxDxX65B13e2UptWg0ATkqhZoNTj0LYLBdA82ZF3Oug_pvQT8K8w',
              price: 189,
              type: 'item',
            },
          ],
          is_lootback: false,
        },
      },
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const response = await Axios.post(
        `https://dotaloot.co/api/case/get/${this.$attrs.id}`
      );
      if (response.status !== 200) {
        return;
      }
      this.caseItem = response.data.Case;
      this.loading = false;
      console.log(this.caseItem);
    } catch (e) {
      console.log(e);
    }
  },
  // async mounted() {
  //   try {
  //     this.loading = true;
  //     const response = await Axios.post('https://dotaloot.co/api/category/get');
  //     if (response.status !== 200) {
  //       return;
  //     }
  //     const { categories } = response.data;
  //     this.categories = categories;
  //     this.loading = false;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },
};
