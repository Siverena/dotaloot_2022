<template>
  <div class="dl-case-item">
    <div
      class="dl-case-item__base"
      :style="{
        'box-shadow': `inset 0px -15px 15px 1px #` + item.color,
        'background-image': `url(https://steamcommunity-a.akamaihd.net/economy/image/${item.image})`,
      }"
    >
      <div class="dl-case-item__info">
        <div class="dl-case-item__coast">{{ item.price }} ₽</div>
      </div>
      <div
        class="dl-case-item__name"
        v-bind:style="{
          'background-color': '#' + item.color,
        }"
      >
        {{ item.name }}
      </div>
    </div>
    <!-- <div class="dl-case-item__add-contract">

    </div> -->
  </div>
</template>
<script src="./dl-case-item.js"></script>
