<template>
  <div class="dl-auth-before">
    <img
      class="dl-auth-before__key"
      src="../../../assets/img/dl-auth/key.png"
      alt=""
    />
    вход через:
    <div class="dl-auth-before__buttons">
      <a
        @click="login"
        class="dl-auth-before__button dl-auth-before__button--vk"
      >
        <img src="../../../assets/img/dl-auth/vk.png" alt="" width="29" />
      </a>
      <a
        @click="login"
        class="dl-auth-before__button dl-auth-before__button--steam"
      >
        <img src="../../../assets/img/dl-auth/steam.png" alt="" width="29" />
      </a>
    </div>
  </div>
</template>
<script src="./dl-auth-before.js"></script>
