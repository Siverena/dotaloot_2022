// import { defineAsyncComponent } from 'vue';
// import { Vue } from 'vue';
export default {
  name: 'DlItem',
  props: ['drop'],
  mounted() {
    console.log(this.drop);
  },
};
// const DlItemBase = Vue.component({ props: ['drop'] });
// const DlItemLoading = Vue.component({
//   template: `<template>
//     <div>loading...</div>
// </template>`,
// });
// const DlItemError = Vue.component({
//   template: `<template>
//     <div>loading error</div>
// </template>`,
// });
// AsyncItem = () => ({
//   component: DlItemBase,
//   loading: DlItemLoading,
//   error: DlItemError,
//   delay: 1000,
//   timeout: 3000,
// });

// export default Vue.component('AsyncItem', () => ({
//   component: DlItem,
//   loading: DlItemLoading,
//   error: DlItemError,
//   delay: 1000,
//   timeout: 3000,
// }));
