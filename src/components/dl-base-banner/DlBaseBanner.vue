<template>
  <div class="dl-base-banner">
    <p class="dl-base-banner__header"><slot name="header"></slot></p>
    <p :class="['dl-base-banner__text', colorClass]">
      <slot name="text"></slot>
    </p>
    <slot name="buttons"></slot>
  </div>
</template>
<script>
export default {
  name: 'DlBaseBanner',
  props: {
    spanColor: {
      validator(color) {
        return ['blue', 'orange', 'green', ''].includes(color);
      },
      default: '',
    },
  },
  computed: {
    colorClass() {
      return this.spanColor ? `dl-base-banner__text--${this.spanColor}` : '';
    },
  },
};
</script>
