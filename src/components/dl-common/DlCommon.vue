<template>
  <section class="dl-common">
    <div class="dl-common__wrap">
      <div class="dl-common__stat">
        <p class="dl-common__stat-text">Рефералов: 12345</p>
        <p class="dl-common__stat-text">Заработано: 12345</p>
      </div>
      <div class="dl-common__trade-wrap">
        <p class="dl-common__header">
          Ваша реферальная ссылка для приглашения друзей
        </p>
        <div class="dl-common__trade-link">https://www.dotabuff.com/</div>
      </div>
      <div class="dl-common__socials">
        <p class="dl-common__header">Поделись ссылкой в соц. сетях</p>
        <ul class="dl-common__social-list">
          <li
            class="dl-common__social-item"
            v-for="(link, key) in links"
            :key="key"
          >
            <a href="">
              <img :src="link.imgSrc" alt="" />
              <span class="visually-hidden">{{ link.nameSoc }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <p class="dl-common__info">
      С помощью кнопок "поделиться" вы можете делиться своей партнерской ссылкой
      как в соц. сетях, так и напрямую. Вы получите 7% от суммы всех заказов
      привлеченного пользователя. Полученные средства можно тратить на покупку
      кейсов на DotaLoot.
    </p>
  </section>
</template>
<script src="./dl-common.js"></script>
