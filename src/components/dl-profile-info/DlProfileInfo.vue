<template>
  <section class="dl-personal-info">
    <div class="dl-personal-info__block persona">
      <img class="persona__img" :src="gamer.avatar" alt="" />
      <div class="dl-personal-info__block-content persona__content">
        <p class="persona__name">{{ gamer.name }}</p>
        <p class="persona__cases-count">Открыто кейсов: <span>107</span></p>
        <a class="persona__link"
          ><img
            class="persona__icon"
            src="../../assets/img/dl-profile-info/vk.png"
            alt=""
        /></a>
      </div>
    </div>

    <div class="dl-personal-info__block lovely">
      <div class="dl-personal-info__block-content lovely__content">
        <p class="dl-personal-info__block-header">любимый кейс</p>
        <p class="dl-personal-info__block-text">Весенний крип</p>
        <button class="dl-button--orange lovely__button">Заглянуть</button>
      </div>
      <img
        class="lovely__img"
        src="../../assets/img/dl-personal-info/ava.png"
        alt=""
      />
    </div>

    <div class="dl-personal-info__block drop">
      <div class="dl-personal-info__block-content drop__content">
        <p class="dl-personal-info__block-header">лучший дроп</p>
        <p class="dl-personal-info__block-text">Dragonclaw hook</p>
        <p class="drop__price">19999.42 ₽</p>
      </div>

      <img
        class="drop__img"
        src="../../assets/img/dl-personal-info/ava.png"
        alt=""
      />
    </div>
  </section>
</template>
<script src="./dl-profile-info.js"></script>
