<template>
  <DlSlider />
  <DlLoader v-if="loading" />
  <div class="container">
    <DlRaffles />
    <DlCases v-if="!loading" :cases="casesTmp" :catId="'test'"
      >Примеры кейсов</DlCases
    >
    <DlCases
      v-if="!loading"
      :cases="categories[0].cases"
      :catId="categories[0].id"
      >{{ categories[0].name }}</DlCases
    >
    <DlCases
      v-if="!loading"
      :cases="categories[1].cases"
      :catId="categories[1].id"
      >{{ categories[1].name }}</DlCases
    >
    <DlBannerFreeItem />
    <DlCases
      v-if="!loading"
      :cases="categories[2].cases"
      :catId="categories[2].id"
      >{{ categories[2].name }}</DlCases
    >
    <DlCases
      v-if="!loading"
      :cases="categories[3].cases"
      :catId="categories[3].id"
      >{{ categories[3].name }}</DlCases
    >
    <DlEvents />
    <DlCases
      v-if="!loading"
      :cases="categories[4].cases"
      :catId="categories[4].id"
      >{{ categories[4].name }}</DlCases
    >
    <DlCases
      v-if="!loading"
      :cases="categories[5].cases"
      :catId="categories[5].id"
      >{{ categories[5].name }}</DlCases
    >
    <DlCases
      v-if="!loading"
      :cases="categories[6].cases"
      :catId="categories[6].id"
      >{{ categories[6].name }}</DlCases
    >
  </div>

  <DlQuests />
  <div class="container">
    <DlReviews />
    <DlTrust />
  </div>
</template>
<script src="./cases-page.js"></script>
