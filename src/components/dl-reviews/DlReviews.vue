<template>
  <section class="dl-reviews">
    <DlSectionHeader>отзывы</DlSectionHeader>
    <carousel
      :autoplay="false"
      :autoplay-speed="9000"
      :speed="1000"
      :dots="true"
      :key="version"
      :navButtons="false"
    >
      <div class="dl-reviews__slide" v-for="page in countOfPages" :key="page">
        <div class="dl-reviews__wrapper">
          <DlReview
            v-for="(review, n) in getPartOfReviews(page)"
            :review="review"
            :key="n"
          />
        </div>
      </div>
    </carousel>
  </section>
</template>
<script src="./dl-reviews.js"></script>
