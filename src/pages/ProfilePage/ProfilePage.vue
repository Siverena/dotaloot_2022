<template>
  <DlLoader v-if="loading" />
  <div v-else class="container">
    <DlSectionHeader :class="'dl-section-h--page'"
      >Профиль {{ getGamer.name }}</DlSectionHeader
    >
    <DlProfileInfo :gamer="getGamer" />
    <DlBaseBanner class="dl-banner-replenish-wisely--personal">
      <template v-slot:header>Пополняй с умом</template>
      <template v-slot:text
        >Получай бесплатные кейсы и
        <span style="color: #ff8b00">бонус&nbsp;к&nbsp;мане</span>
        за пополнение!</template
      >
      <template v-slot:buttons
        ><button class="dl-base-banner__button dl-button--orange">
          пополнить
        </button></template
      >
    </DlBaseBanner>
    <DlUserContents :gamer="getGamer" :visible="false" />
  </div>
</template>
<script src="./profile-page.js"></script>
