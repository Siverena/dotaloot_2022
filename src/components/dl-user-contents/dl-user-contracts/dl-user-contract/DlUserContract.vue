<template>
  <div class="dl-user-contract">
    <div
      class="dl-user-contract__base"
      :style="{
        'box-shadow': `inset 0px -15px 15px 1px #` + item.color,
        'background-image': `url(https://steamcommunity-a.akamaihd.net/economy/image/${item.image})`,
      }"
    >
      <div class="dl-user-contract__info">
        <div class="dl-user-contract__coast">{{ item.price }} ₽</div>
      </div>

      <div
        class="dl-user-contract__name"
        :style="{
          'background-color': '#' + item.color,
        }"
      >
        feast of abscession
      </div>
    </div>
    <div class="dl-user-contract__hover">
      <div class="dl-user-contract__contract-price">
        + {{ getContractSum }} ₽
      </div>
      <div class="dl-user-contract__more" @click="handleClick(index)">
        подробнее
      </div>
    </div>
  </div>
</template>
<script src="./dl-user-contract.js"></script>
