export default {
  name: 'DlButton',
  props: {
    type: {
      default: 'default',
    },
    size: {
      default: '',
    },
    disabled: {
      default: false,
    },
    loading: {
      default: false,
    },
    selected: {
      default: false,
    },
    stretch: {
      default: false,
    },
    nativeType: {
      default: 'button',
    },
    icon: {
      default: '',
    },
  },
};
