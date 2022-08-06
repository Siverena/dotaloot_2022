import DlCaseItem from '@/components/dl-case-item/DlCaseItem.vue';
export default {
  name: 'DlUserItems',
  props: ['items', 'page', 'handleClick', 'gift'],
  components: {
    DlCaseItem,
  },
};
