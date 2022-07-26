<template>
  <!--итем-->
  <div class="dl-drophistory-item">
    <div
      class="dl-drophistory-item__content"
      :style="{
        'border-color': '#' + drop.item_color,
        'box-shadow': 'inset 0px -22px 15px 4px rgba(211, 44, 230, 0.3)',
        'background-image': `url(${
          drop.item_type === 'money'
            ? drop.item_image
            : 'https://steamcommunity-a.akamaihd.net/economy/image/' +
              drop.item_image +
              '/108fx108f'
        })`,
      }"
    >
      <!-- @mouseover="showInfo === 1" -->
    </div>
    <div class="dl-drophistory-item__hover">
      <div class="dl-drophistory-item__images">
        <div alt="" class="dl-drophistory-item__img-wrap">
          <img src="../../../assets/img/dl-lenta/item.png" alt="" />
        </div>
        <div alt="" class="dl-drophistory-item__img-wrap">
          <img src="../../../assets/img/dl-lenta/case.png" alt="" />
        </div>
      </div>
      <router-link :to="'/profile'" class="dl-drophistory-item__user-name">
        {{ drop.user_name }}
      </router-link>
    </div>
  </div>
  <!--итем-конец -->
</template>
<script src="./dl-item.js"></script>
