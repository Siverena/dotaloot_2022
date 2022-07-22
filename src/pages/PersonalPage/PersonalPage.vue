<template>
  <div class="container">
    <DlSectionHeader :class="'dl-section-h--page'"
      >gury mcflury</DlSectionHeader
    >
    <section class="dl-personal-info">
      <div class="dl-personal-info__block balance">
        <img
          class="balance__img"
          src="../../assets/img/dl-auth/ava.png "
          alt=""
        />
        <div class="balance__currency">
          <p class="balance__currency balance__currency--rub">250.12</p>
          <p class="balance__currency balance__currency--mana">250.12</p>
        </div>
        <button class="balance__button">пополнить</button>
      </div>
      <div class="dl-profile__partner">
        <p>партнерка</p>
        <router-link to="/partner">подробнее</router-link>
      </div>
    </section>
    <div class="dl-profile__sell"></div>
    <div class="dl-profile__filter"></div>
  </div>
</template>
<script src="./personal-page.js"></script>
