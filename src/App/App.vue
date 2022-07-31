<template>
  <DlHeader></DlHeader>

  <main>
    <DlLenta />
    <router-view />
  </main>

  <DlFooter></DlFooter>
</template>
<script src="./app.js"></script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/main.scss';
</style>
