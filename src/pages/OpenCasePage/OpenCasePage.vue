<template>
  <div class="container">
    <DlCases v-if="!loading" :cases="casesTmp" :catId="'test'"
      >Примеры кейсов</DlCases
    >
    <DlCases
      v-if="!loading"
      :cases="categories[0].cases"
      :catId="categories[0].id"
      >{{ categories[0].name }}</DlCases
    >
    >
  </div>
</template>
<script src="./open-case-page.js"></script>
