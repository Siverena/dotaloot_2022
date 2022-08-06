<template>
  <div class="dl-user-contract-detail">
    <div
      class="dl-user-contract-detail__win"
      :style="{
        'box-shadow': `inset 0px -15px 15px 1px #` + contract.item.color,
        'background-image': `url(https://steamcommunity-a.akamaihd.net/economy/image/${contract.item.image})`,
      }"
    >
      <div class="dl-user-contract-detail__win-info">
        <div class="dl-user-contract-detail__win-price">
          {{ contract.item.price }} ₽
        </div>
      </div>
      <div
        class="dl-user-contract-detail__win-name"
        :style="{
          'background-color': `#` + contract.item.color,
        }"
      >
        {{ contract.item.name }}
      </div>
    </div>
    <div class="dl-user-contract-detail__compound-wrap">
      <!-- 1 итем-->
      <div v-for="i in 10" :key="i" class="dl-user-contract-detail__item-bg">
        <div
          v-if="contract.items[i - 1]"
          class="dl-user-contract-detail__item"
          :style="{
            'box-shadow':
              `inset 0px -15px 15px 1px #` + contract.items[i - 1].item.color,
            'background-image': `url(https://steamcommunity-a.akamaihd.net/economy/image/${
              contract.items[i - 1].item.image
            })`,
          }"
        >
          <div class="dl-user-contract-detail__item-info">
            <div class="dl-user-contract-detail__item-price">
              {{ contract.items[i - 1].item.price }} ₽
            </div>
          </div>
          <div
            class="dl-user-contract-detail__item-name"
            :style="{
              'background-color': `#` + contract.items[i - 1].item.color,
            }"
          >
            {{ contract.items[i - 1].item.name }}
          </div>
        </div>
      </div>
      <!-- 1 итем-->
    </div>
  </div>
</template>
<script src="./dl-user-contract-detail.js"></script>
