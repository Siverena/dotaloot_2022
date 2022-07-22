<template>
  <div class="container">
    <section class="dl-footer">
      <DlBeneficiary />
      <div class="dl-footer__links-row-wrap">
        <div class="dl-footer__links-row">
          <router-link class="dl-footer__link-top" to="/contacts"
            >Контакты</router-link
          >
          <a class="dl-footer__link-top" href="https://vk.com/dotaloot"
            ><img src="../../assets/img/dl-footer/vk.png" alt=""
          /></a>
          <router-link class="dl-footer__link-top" to="/help"
            >Помощь</router-link
          >
        </div>
        <div class="dl-footer__links-row">
          <router-link class="dl-footer__link-middle" to="/agreement"
            >Пользовательское соглашение</router-link
          >
          <router-link class="dl-footer__link-middle" to="/policy"
            >Политика конфиденциальности</router-link
          >
          <router-link class="dl-footer__link-middle" to="/сookie"
            >Политика Cookie</router-link
          >
        </div>
        <div class="dl-footer__links-row">
          <ul class="dl-footer__payments">
            <li class="dl-footer__payment">
              <img src="../../assets/img/dl-footer/payments/visa.png" alt="" />
            </li>
            <li class="dl-footer__payment">
              <img
                src="../../assets/img/dl-footer/payments/mastercard.png"
                alt=""
              />
            </li>
            <li class="dl-footer__payment">
              <img src="../../assets/img/dl-footer/payments/qiwi.png" alt="" />
            </li>
            <li class="dl-footer__payment">
              <img
                src="../../assets/img/dl-footer/payments/webmoney.png"
                alt=""
              />
            </li>
            <li class="dl-footer__payment">
              <img
                src="../../assets/img/dl-footer/payments/yandex.png"
                alt=""
              />
            </li>
            <li class="dl-footer__payment">
              <img
                src="../../assets/img/dl-footer/payments/skinsback.png"
                alt=""
              />
            </li>
            <li class="dl-footer__payment">
              <img src="../../assets/img/dl-footer/payments/mts.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div class="dl-footer__info">
        <img
          class="dl-footer__logo"
          src="../../assets/img/dl-footer/logo.png"
          alt=""
        />
        <a class="dl-footer__mail" href="mailto:support@dotaloot.co"
          >support@dotaloot.co</a
        >
        <p class="dl-footer__copyright">Copyright C 2019 - 2022 dotaloot</p>
      </div>
    </section>
  </div>
</template>
<script src="./dl-footer.js"></script>
