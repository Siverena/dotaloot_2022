<template>
  <div class="container">
    <DlSectionHeader :class="'dl-section-h--page'">Контракты</DlSectionHeader>
  </div>

  <section class="dl-contracts">
    <div class="container">
      <div class="dl-contract">
        <div class="dl-contract__start" v-if="!isShowWin">
          <div class="dl-contract__profit">
            <div class="dl-contract__profit-money">
              <div>Вы получите от 1293 ₽ до 8984 ₽</div>
            </div>
            <div class="dl-contract__profit-mana">
              +12235 <br />
              <span> маны</span>
            </div>
          </div>

          <div class="dl-contract__wrapper">
            <div class="dl-contract__items">
              <div v-for="i in 10" :key="i" class="dl-contract__item-bg">
                <div
                  v-if="contractItems[i - 1]"
                  @click="toggleItem(i - 1, 'inventory')"
                  class="dl-contract__item"
                  :style="{
                    'box-shadow':
                      `inset 0px -15px 15px 1px #` +
                      contractItems[i - 1].item.color,
                    'background-image': `url(https://steamcommunity-a.akamaihd.net/economy/image/${
                      contractItems[i - 1].item.image
                    })`,
                  }"
                >
                  <div class="dl-contract__item-name">
                    {{ contractItems[i - 1].item.name }}
                  </div>
                </div>
                <div
                  v-if="contractItems.length == i - 1"
                  @click="toggleItem(0, 'contract')"
                  class="dl-contract__item-add"
                ></div>
              </div>

              <div class="dl-contract__count dl-contract__count--from-items">
                {{ contractItems.length === 0 ? 0 : contractItems.length
                }}<span>/3</span>
              </div>
              <div
                class="dl-contract__clear dl-contract__clear--from-items"
                @click="clearContract"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8936 0.286621L22.6094 2.00245L15.6978 8.90204C16.9907 10.7629 17.1719 12.9983 16.0844 14.4483L8.44776 6.81162C9.89776 5.72412 12.1332 5.90537 13.994 7.19829L20.8936 0.286621ZM4.66568 18.2304C2.23693 15.8016 0.750677 12.9016 0.339844 10.195L6.23651 7.66954L15.2265 16.6595L12.7011 22.5562C9.99443 22.1454 7.09443 20.6591 4.66568 18.2304Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div class="dl-contract__buttons-group">
              <div class="dl-contract__price">
                цена контракта {{ getSum() }} ₽
              </div>
              <div class="dl-contract__count">
                {{ contractItems.length === 0 ? 0 : contractItems.length
                }}<span>/3</span>
              </div>
              <div class="dl-contract__clear" @click="clearContract()">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8936 0.286621L22.6094 2.00245L15.6978 8.90204C16.9907 10.7629 17.1719 12.9983 16.0844 14.4483L8.44776 6.81162C9.89776 5.72412 12.1332 5.90537 13.994 7.19829L20.8936 0.286621ZM4.66568 18.2304C2.23693 15.8016 0.750677 12.9016 0.339844 10.195L6.23651 7.66954L15.2265 16.6595L12.7011 22.5562C9.99443 22.1454 7.09443 20.6591 4.66568 18.2304Z"
                    fill="white"
                  />
                </svg>
              </div>
              <button
                :disabled="!canCreateContract"
                class="dl-contract__create"
                @click="toggleShowWin()"
              >
                создать новый контракт
              </button>
            </div>
          </div>
        </div>
        <div class="dl-contract__win" v-if="isShowWin">
          <div class="dl-contract__win-head">
            <p class="dl-contract__win-item-name">
              <span>ваш выигрыш </span> <br />
              feast of abscession
            </p>
            <div
              class="dl-contract__win-item-image"
              :style="{
                'box-shadow': `inset 0px -15px 15px 1px rgb(210 210 210),rgba(255, 0, 0, 50%) -11px 6px 54px 8px`,
                'background-image': `url(https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXK9QlSPcU-sBhcQgPHSOi70tycWl5xMhZWtbGaOwZj2LzBcjhV_t21n7-blvT_DLXBlVRV59FwteXY9o37t0O7pxVyZD32IIGUegI2aQuDrwfoxLy5gp6_vp6bynY2uCQm5nvfmRDiiRAZaPsv26JK50x0Ew)`,
              }"
            ></div>
            <!-- <div class="dl-contract__win-item-info"> -->

            <div class="dl-contract__win-button-group">
              <div class="dl-contract__win-button dl-contract__win-button--up">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    width="39"
                    height="39"
                    fill="url(#patternyui)"
                    fill-opacity="0.8"
                  />
                  <defs>
                    <pattern
                      id="patternyui"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_910_4200"
                        transform="translate(0 0.107784) scale(0.00299401)"
                      />
                    </pattern>
                    <image
                      id="image0_910_4200"
                      width="334"
                      height="262"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
                улучшить
              </div>
              <div
                class="dl-contract__win-button dl-contract__win-button--back"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M0 0H36V36H0V0Z" fill="url(#patternvbn)" />
                  <defs>
                    <pattern
                      id="patternvbn"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_910_4205"
                        transform="translate(0 0.00547445) scale(0.00364964)"
                      />
                    </pattern>
                    <image
                      id="image0_910_4205"
                      width="274"
                      height="271"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>

                Вернуться к кейсам
              </div>
              <div
                class="dl-contract__win-button dl-contract__win-button--try"
                @click="toggleShowWin()"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="38" height="38" fill="url(#patternnbv)" />
                  <defs>
                    <pattern
                      id="patternnbv"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_910_4206"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_910_4206"
                      width="96"
                      height="96"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>

                Попробовать еще раз
              </div>
              <!-- </div> -->
            </div>
          </div>
          <div class="dl-contract__win-bottom">
            <div class="dl-contract__win-steam">цена в Steam +70000 ₽</div>
            <div class="dl-contract__win-sell dl-button-green">
              Продать за 80000 ₽
              <span>+80000 маны</span>
            </div>
            <p class="dl-contract__win-take">
              Предмет всегда можно забрать в&nbsp;<span> личном кабинете</span>
            </p>
          </div>
        </div>
      </div>
      <div class="dl-inventory">
        <div class="dl-inventory__header-wrap">
          <p class="dl-inventory__header">ваши предметы</p>
          <div class="dl-filters__switch dl-filters__switch--contract">
            <div
              class="dl-filters__switch-item"
              @click="toggleSort"
              :class="!isActive ? 'dl-filters__switch-item--active' : ''"
            >
              Дорого
            </div>
            <div
              class="dl-filters__switch-item"
              @click="toggleSort"
              :class="isActive ? 'dl-filters__switch-item--active' : ''"
            >
              Дешево
            </div>
          </div>
        </div>
        <DlUserItems
          :items="userItemsShow"
          :page="'contract'"
          :handleClick="toggleItem"
        />
        <div
          v-if="userItems.length !== userItemsShow.length"
          @click="showMore()"
          class="dl-inventory__show-more dl-button--orange"
        >
          ПОКАЗАТЬ ЕЩЁ
          <img src="../../assets/img/dl-contract/arrow.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./contract-page.js"></script>
