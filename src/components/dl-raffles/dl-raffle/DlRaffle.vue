<template>
  <div :class="'dl-raffle ' + raffles.iterationMode">
    <div class="dl-raffle__bottom"></div>
    <div class="dl-raffle__top">
      <div class="dl-raffle__img-wrap">
        <img
          :src="raffles.itemLink"
          alt=""
          width="131"
          height="89"
          class="dl-raffle__img"
        />
        <div class="dl-raffle__img-tools">{{ raffles.price }} ₽</div>
      </div>
      <div class="dl-raffle__content">
        <div class="dl-raffle__item-name-wrap">
          <div class="dl-raffle__item-name">
            {{ raffles.itemName }}
          </div>
          <p class="tooltip">{{ raffles.itemName }}</p>
        </div>

        <p class="dl-raffle__info">
          Нажми, что бы принять участие или узнать условия
        </p>
        <div class="dl-raffle__time">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="dl-raffle__clock"
          >
            <circle
              cx="11"
              cy="11"
              r="9.75"
              stroke-opacity="0.5"
              stroke-width="2.5"
            />
            <path
              d="M14.9771 8.27833C15.3042 7.83335 15.2087 7.20744 14.7637 6.8803C14.3187 6.55317 13.6928 6.6487 13.3657 7.09368L14.9771 8.27833ZM10.1942 11.4077L9.60185 12.2134L11.2133 13.398L11.8056 12.5923L10.1942 11.4077ZM13.3657 7.09368L10.1942 11.4077L11.8056 12.5923L14.9771 8.27833L13.3657 7.09368Z"
              fill-opacity="0.5"
            />
            <path
              d="M8.5547 9.16795C8.09517 8.8616 7.4743 8.98577 7.16795 9.4453C6.8616 9.90483 6.98577 10.5257 7.4453 10.8321L8.5547 9.16795ZM10.4453 12.8321L11.2774 13.3868L12.3868 11.7226L11.5547 11.1679L10.4453 12.8321ZM7.4453 10.8321L10.4453 12.8321L11.5547 11.1679L8.5547 9.16795L7.4453 10.8321Z"
              fill-opacity="0.5"
            />
          </svg>
          {{ dataTimer.days }}д {{ dataTimer.hours }}ч {{ dataTimer.minutes }}м
          {{ dataTimer.seconds }}с
        </div>
      </div>
    </div>
    <p class="dl-raffle__name">{{ modeRuffles }} розыгрыш</p>
  </div>
</template>
<script src="./dl-raffle.js"></script>
