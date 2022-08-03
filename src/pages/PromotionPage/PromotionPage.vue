<template>
  <div class="container">
    <!-- <DlPromotionsSlider /> -->
    <section class="dl-promotions-slider">
      <DlSectionHeader class="dl-section-h--promotion">акции</DlSectionHeader>
      <carousel
        :autoplay="false"
        :autoplay-speed="9000"
        :speed="1000"
        :dots="true"
        :navButtons="false"
      >
        <DlBaseBanner class="dl-banner-replenish-wisely" :spanColor="'blue'">
          <template v-slot:header>Пополняй с умом</template>
          <template v-slot:text
            >Получай бесплатные сундуки и дополнительную <span>ману</span> за
            пополнение!</template
          >
          <template v-slot:buttons
            ><button class="dl-base-banner__button dl-button--blue">
              пополнить
            </button></template
          >
        </DlBaseBanner>
        <DlBaseBanner class="dl-banner-promocode" :spanColor="'orange'">
          <template v-slot:header>тише, тут промокод!</template>
          <template v-slot:text
            >Участвуй в розыгрышах или получи свежий <span>промокод</span> в
            наших социальных сетях!</template
          >
          <template v-slot:buttons>
            <div class="dl-banner-promocode__socials-wrap">
              <a
                href="https://vk.com/dotaloot"
                class="dl-banner-promocode__social"
                ><img src="@/assets/img/dl-banner-promocode/vk.png" alt="vk"
              /></a>
              <a
                href="https://vk.com/dotaloot"
                class="dl-banner-promocode__social"
                ><img
                  src="@/assets/img/dl-banner-promocode/telegram.png"
                  alt="telegram"
              /></a>
            </div>
          </template>
        </DlBaseBanner>
        <DlBaseBanner class="dl-banner-never-too-much-mana" :spanColor="'blue'">
          <template v-slot:header>маны много не бывает!</template>
          <template v-slot:text
            >Копи <span>ману</span> и трать ее на особую серию магических
            кейсов!</template
          >
          <template v-slot:buttons
            ><button class="dl-base-banner__button dl-button--blue">
              пополнить
            </button></template
          >
        </DlBaseBanner>
      </carousel>
    </section>
    <DlCombinations />
  </div>
</template>
<script src="./promotion-page.js"></script>
