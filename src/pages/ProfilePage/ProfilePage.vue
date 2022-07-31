<template>
  <DlLoader v-if="loading" />
  <div v-else class="container">
    <DlSectionHeader :class="'dl-section-h--page'"
      >Профиль {{ getGamer.name }}</DlSectionHeader
    >
    <DlProfileInfo :gamer="getGamer" />
    <DlBannerReplenishWisely />
    <DlUserContents :gamer="getGamer" :visible="false" />
  </div>
</template>
<script src="./profile-page.js"></script>
