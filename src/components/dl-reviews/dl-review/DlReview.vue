<template>
  <div class="dl-review">
    <div class="dl-review__author">
      <img :src="author.avatar" alt="avatar" class="dl-review__avatar" />
      <div class="dl-review__author-wrapper">
        <div class="dl-review__author-name">{{ author.name }}</div>
        <div class="dl-review__date">{{ getReviewDate }}</div>
      </div>
    </div>
    <div class="dl-review__text">&#8220;{{ text }}&#8221;</div>
    <div class="dl-review__case">
      <img :src="dlCase.img" alt="" />
    </div>
    <div class="dl-review__item">
      <img :src="review.item.img" alt="" />
      <div class="dl-review__item-price">{{ item.price }}</div>
    </div>
  </div>
</template>
<script src="./dl-review.js"></script>
