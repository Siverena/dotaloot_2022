<template>
  <div class="dl-auth">
    <DlAuthBefore v-if="!isAuth" />
    <DlAuthAfter v-if="isAuth" />
  </div>
</template>
<script src="./dl-auth.js"></script>
