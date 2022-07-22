<template>
  <section class="dl-raffles">
    <DlRaffle v-for="(raf, index) in raffles" :raffles="raf" :key="index" />
  </section>
</template>
<script src="./dl-raffles.js"></script>
