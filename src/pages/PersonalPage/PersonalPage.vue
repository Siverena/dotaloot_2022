<template>
  <div class="container">
    <DlSectionHeader :class="'dl-section-h--page'">{{
      user.name
    }}</DlSectionHeader>
    <DlPersonalInfo :user="user" />
    <DlBannerSellWithProfit />
    <DlUserContents :visible="true" :gamer="user" :page="'personal'" />
  </div>
</template>
<script src="./personal-page.js"></script>
