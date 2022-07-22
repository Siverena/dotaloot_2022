<template>
  <div class="dl-combination">
    <div class="dl-combination__header">
      <img
        :src="'./combinations/' + combination.color + '.png'"
        alt=""
        class="dl-combination__img"
      />
      <span class="dl-combination__name">{{ combination.name }}</span>
    </div>
    <div class="dl-combination__content">
      <p class="dl-combination__price">{{ combination.price }} ₽</p>
      <div
        class="dl-combination__profit"
        :class="'dl-combination__profit--' + combination.color"
      >
        выгода <br />
        {{ combination.profit }} ₽
      </div>
      <p class="dl-combination__count">
        осталось {{ combination.countLeft
        }}<span :class="'dl-combination__span--' + combination.color"
          >/{{ combination.contAll }}</span
        >
      </p>
      <div
        class="dl-combination__tag"
        :class="'dl-combination__tag--' + combination.color"
      >
        {{ combination.tag }}
      </div>
    </div>
  </div>
</template>
<script src="./dl-combination.js"></script>
