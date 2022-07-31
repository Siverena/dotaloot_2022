<template>
  <section class="dl-raffles">
    <DlSectionHeader>Активные розыгрыши</DlSectionHeader>
    <div class="dl-raffles__wrapper">
      <carousel
        v-if="isMobileVersion()"
        :autoplay="false"
        :autoplay-speed="9000"
        :speed="1000"
        :navButtons="false"
        :dots="isMobileVersion()"
      >
        <DlRaffle v-for="(raf, index) in raffles" :raffle="raf" :key="index" />
      </carousel>
      <DlRaffle
        v-else
        v-for="(raf, index) in raffles"
        :raffle="raf"
        :key="index"
      />
    </div>
  </section>
</template>
<script src="./dl-raffles.js"></script>
