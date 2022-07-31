<template>
  <section class="dl-trust">
    <DlSectionHeader>нам доверяют</DlSectionHeader>
    <div class="dl-trust__wrap">
      <DlStat :count="18584" :nameStat="'пользователи'"
        ><img src="../../assets/img/dl-trust/user.png" alt="" />
      </DlStat>
      <DlStat :class="'dl-stat--trust'" :count="18584" :nameStat="'контрактов'">
        <img src="../../assets/img/dl-trust/contr.png" alt="" />
      </DlStat>

      <DlStat :count="18584" :nameStat="'открытых кейсов'">
        <img src="../../assets/img/dl-trust/box.png" alt="" />
      </DlStat>
      <DlStat :count="18584" :nameStat="'окупаемости'">
        <img src="../../assets/img/dl-trust/money.png" alt="" />
      </DlStat>
      <DlStat :count="18584" :nameStat="'апгрейдов'">
        <img src="../../assets/img/dl-trust/up.png" alt="" />
      </DlStat>
    </div>
  </section>
</template>
<script src="./dl-trust.js"></script>
