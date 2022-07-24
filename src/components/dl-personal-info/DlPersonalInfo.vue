<template>
  <section class="dl-personal-info">
    <div class="dl-personal-info__block balance">
      <img
        class="balance__img"
        src="../../assets/img/dl-personal-info/ava.png"
        alt=""
      />
      <div class="dl-personal-info__block-content balance__content">
        <div class="balance__currencies">
          <p class="balance__currency balance__currency--rub">250.12</p>
          <p class="balance__currency balance__currency--mana">250.12</p>
        </div>
        <button class="dl-button--green balance__button">пополнить</button>
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
    <div class="dl-personal-info__block partner">
      <div class="dl-personal-info__block-content partner__content">
        <p class="dl-personal-info__block-header partner__header">партнерка</p>
        <router-link to="/partner" class="dl-button--orange partner__button"
          >подробнее</router-link
        >
      </div>
    </div>
    <div class="dl-personal-info__block trade">
      <div class="trade__row">
        <p class="dl-personal-info__block-header trade__header">
          Ваша ссылка на обмен
        </p>
        <div class="trade__question">где взять ссылку для обмена?</div>
      </div>
      <div class="trade__row">
        <input
          class="trade__link"
          type="text"
          value="https//:idsahda.ru/dasda12312"
        />
        <button class="dl-button--orange trade__button">сохранить</button>
      </div>
    </div>
  </section>
</template>
<script src="./dl-personal-info.js"></script>
