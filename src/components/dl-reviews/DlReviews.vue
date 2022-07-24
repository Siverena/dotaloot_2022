<template>
  <section class="dl-reviews">
    <DlSectionHeader>отзывы</DlSectionHeader>
    <carousel :autoplay="true" :autoplay-speed="9000" :speed="1000">
      <div class="dl-reviews__slide">
        <div class="dl-reviews__wrapper">
          <DlReview
            v-for="(review, key) in reviews"
            :review="review"
            :key="key"
          />
        </div>
      </div>
      <div class="dl-reviews__slide">
        <div class="dl-reviews__wrapper">
          <DlReview
            v-for="(review, key) in reviews"
            :review="review"
            :key="key"
          />
        </div>
      </div>
      <div class="dl-reviews__slide">
        <div class="dl-reviews__wrapper">
          <DlReview
            v-for="(review, key) in reviews"
            :review="review"
            :key="key"
          />
        </div>
      </div>
    </carousel>
  </section>
</template>
<script src="./dl-reviews.js"></script>
