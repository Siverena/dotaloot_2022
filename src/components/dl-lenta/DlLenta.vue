<template>
  <section class="dl-lenta">
    <div class="dl-lenta__menu">
      <div
        @click="changeType('total')"
        class="dl-lenta__menu-item dl-lenta__menu-item--live"
        :class="{ 'dl-lenta__menu-item--active': itemType === 'total' }"
      >
        <span>Live</span>
      </div>
      <div
        @click="changeType('today')"
        class="dl-lenta__menu-item dl-lenta__menu-item--top"
        :class="{ 'dl-lenta__menu-item--active': itemType === 'today' }"
      >
        <svg
          width="13"
          height="15"
          viewBox="0 0 13 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M12.5738 7.46786C11.3923 4.6786 7.18563 4.5282 8.20155 0.474201C8.2768 0.173399 7.92311 -0.0590394 7.63715 0.0981983C4.90546 1.56119 2.94135 4.49402 4.58939 8.33609C4.72485 8.65056 4.31848 8.94453 4.02499 8.73944C2.66291 7.80285 2.51993 6.45607 2.64033 5.49213C2.68549 5.13664 2.17376 4.96573 1.95553 5.2597C1.44381 5.97068 0.924561 7.1192 0.924561 8.84882C1.21052 12.6772 4.77 13.8531 6.0493 14.0035C7.87796 14.2154 9.85712 13.9078 11.2794 12.7251C12.8447 11.4056 13.4166 9.30002 12.5738 7.46786ZM5.59026 10.9066C6.67391 10.6673 7.23078 9.95632 7.38129 9.32737C7.62962 8.34976 6.65885 7.39266 7.31356 5.84763C7.56189 7.12604 9.77434 7.9259 9.77434 9.32053C9.83454 11.0501 7.7726 12.5336 5.59026 10.9066Z"
            fill="#A6A6A6"
          />
        </svg>

        <span>Тоp</span>
      </div>
      <div
        @click="changeType('gift')"
        class="dl-lenta__menu-item dl-lenta__menu-item--gift"
        :class="{ 'dl-lenta__menu-item--active': itemType === 'gift' }"
      >
        <span>gift</span>
      </div>
    </div>
    <div class="dl-drophistory">
      <!-- <DlLoader v-if="loading" /> -->
      <DlItems :drops="itemType === 'total' ? live_drops : top_drops" />
    </div>
  </section>
</template>
<script src="./dl-lenta.js"></script>
