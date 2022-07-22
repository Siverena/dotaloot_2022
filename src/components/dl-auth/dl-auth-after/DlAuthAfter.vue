<template>
  <div class="dl-auth-after">
    <button class="dl-auth-after__pay">
      Пополнить <img src="../../../assets/img/dl-auth/plus.png" alt="" />
    </button>
    <div class="dl-auth-after__currencies">
      <p class="dl-auth-after__currency dl-auth-after__currency--rub">456,34</p>
      <p class="dl-auth-after__currency dl-auth-after__currency--mana">
        456,34
      </p>
    </div>
    <router-link to="/personal" class="dl-auth-after__ava">
      <img src="../../../assets/img/dl-auth/ava.png" alt="" />
    </router-link>
  </div>
</template>
<script src="./dl-auth-after.js"></script>
