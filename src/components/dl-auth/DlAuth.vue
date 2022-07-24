<template>
  <div class="dl-auth">
    <DlAuthBefore v-if="getStatus.isAuth === false" />
    <DlAuthAfter v-if="getStatus.isAuth === true" @click="handleClick" />
  </div>
</template>
<script src="./dl-auth.js"></script>
