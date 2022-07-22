export default {
  name: 'DlButton',
  // data() {
  //   return {
  //     styles: '',
  //   };
  // },
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
    bheight: {
      default: '63px',
    },
    bwidth: {
      default: '300px',
    },
    classList: {
      default: '',
    },
  },
  // methods: {
  //   getStyle() {
  //     return `style="${
  //       this.bwidth
  //         ? 'width:' + this.bwidth
  //         : '' + (this.bheight ? '; height:' + this.bheight : '')
  //     }"`;
  //   },
  // },
  // computed: {
  //   getStyles() {
  //     return this.styles;
  //   },
  // },
  // created() {
  //   this.styles = this.getStyle();
  // },
};
