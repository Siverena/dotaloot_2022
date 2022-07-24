<template>
  <section class="dl-slider">
    <carousel :autoplay="true" :autoplay-speed="9000" :speed="1000">
      <div class="dl-slide dl-slide--get-gift">
        <div class="dl-slide__wrapper">
          <p class="dl-slide__head">получи <span>подарок</span></p>
          <p class="dl-slide__descr">за авторизацию</p>
          <DlButton :bwidth="'368px'" :bheight="'62px'">
            Забрать предмет
          </DlButton>
        </div>
      </div>
      <div class="dl-slide dl-slide--get-gift">
        <div class="dl-slide__wrapper">
          <p class="dl-slide__head">получи <span>подарок</span></p>
          <p class="dl-slide__descr">за авторизацию</p>
          <DlButton :disabled="false"> Забрать предмет </DlButton>
        </div>
      </div>
      <div class="dl-slide dl-slide--get-gift">
        <div class="dl-slide__wrapper">
          <p class="dl-slide__head">получи <span>подарок</span></p>
          <p class="dl-slide__descr">за авторизацию</p>
          <DlButton :disabled="false" :bwidth="'368px'" :bheight="'62px'">
            Забрать предмет
          </DlButton>
        </div>
      </div>
      <div class="dl-slide dl-slide--get-gift">
        <div class="dl-slide__wrapper">
          <p class="dl-slide__head">получи <span>подарок</span></p>
          <p class="dl-slide__descr">за авторизацию</p>
          <DlButton :disabled="false" :bwidth="'368px'" :height="'62px'">
            Забрать предмет
          </DlButton>
        </div>
      </div>
    </carousel>
  </section>
</template>
<script src="./dl-slider.js"></script>
