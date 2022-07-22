<template>
  <div class="dl-event">
    <div class="dl-event__img-wrap">
      <img :src="event.imgSrc" alt="" class="dl-event__img" />
    </div>
    <div class="dl-event__content">
      <span class="dl-event__name">{{ event.nameEvent }}</span>
      <div class="dl-event__button">{{ event.price }} ₽</div>
    </div>
  </div>
</template>
<script src="./dl-event.js"></script>
