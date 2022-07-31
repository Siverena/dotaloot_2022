<template>
  <!--итем-->
  <router-link :to="`/profile/${drop.user_uuid}`" class="dl-drophistory-item">
    <div
      class="dl-drophistory-item__content"
      :style="{
        'border-color': '#' + drop.item_color,
        'box-shadow': 'inset 0px -9px 20px 0px #' + drop.item_color,
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
      <div class="dl-drophistory-item__user-name">
        {{ drop.user_name }}
      </div>
    </div>
  </router-link>
  <!--итем-конец -->
</template>
<script src="./dl-item.js"></script>
